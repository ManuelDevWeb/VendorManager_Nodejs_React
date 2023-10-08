const { Op } = require("sequelize");

// Model
const { Submission } = require("../models/submission");
const { Account } = require("../models/account");
const { Agreement } = require("../models/agreement");

// Custom response
const { success, error } = require("../network/response");

// Function to get all unpaid submissions for a user (either a buyer or supplier) but only for active (new or in_profess) agreements.
const getAllUnpaidSubmissions = async (req, res) => {
  try {
    const { accountId } = req.body;

    if (!accountId) {
      return error(req, res, "Account id is required", 400);
    }

    const unpaidSubmissions = await Submission.findAll({
      where: {
        paid: false,
      },
      include: [
        {
          model: Agreement,
          as: "Agreement",
          where: {
            status: {
              [Op.not]: ["terminated"],
            },
            [Op.or]: [{ BuyerId: accountId }, { SupplierId: accountId }],
          },
        },
      ],
    });

    if (!unpaidSubmissions || unpaidSubmissions.length === 0) {
      return error(req, res, "There aren't unpaid submissions", 404);
    }

    return success(req, res, unpaidSubmissions, 200);
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

// Function to allow buyers to pay for a submission. A buyer can only pay if their balance is greater than or equal to the amount to pay. The amount should be moved from the buyer's balance to the supplier's balance.
const paySubmission = async (req, res) => {
  try {
    const { submission_id } = req.params;
    const { accountId } = req.body;

    if (!submission_id || !accountId) {
      return error(req, res, "Submission id and account id are required", 400);
    }

    const infoAccountBuyer = await Account.findOne({
      where: {
        id: accountId,
      },
      include: [
        {
          model: Agreement,
          as: "Buyer",
          where: {
            BuyerId: accountId,
          },
          include: [
            {
              model: Submission,
              as: "Submissions",
              where: {
                AgreementId: submission_id,
                paid: false,
              },
            },
          ],
        },
      ],
    });

    if (!infoAccountBuyer) {
      return error(
        req,
        res,
        "Account not found or dont have any submission to pay",
        404
      );
    }

    // if (infoAccountBuyer && infoAccountBuyer?.Buyer.length === 0) {
    //   return error(req, res, "You don't have submissions to pay");
    // }

    const infoAccountSupplier = await Account.findOne({
      where: {
        id: infoAccountBuyer?.Buyer[0].SupplierId,
      },
    });

    const balanceAccount = infoAccountBuyer.balance;
    const priceSubmission = infoAccountBuyer.Buyer[0].Submissions[0].price;

    if (balanceAccount < priceSubmission) {
      return error(
        req,
        res,
        "You don't have balance to paid the submission",
        400
      );
    }

    const newBalanceBuyer = balanceAccount - priceSubmission;
    const newBalanceSupplier = infoAccountSupplier.balance + priceSubmission;

    await Account.update(
      { balance: newBalanceBuyer },
      {
        where: {
          id: accountId,
        },
      }
    );

    await Account.update(
      { balance: newBalanceSupplier },
      {
        where: {
          id: infoAccountBuyer.Buyer[0].SupplierId,
        },
      }
    );

    await Submission.update(
      { paid: true },
      {
        where: {
          id: submission_id,
        },
      }
    );

    return success(req, res, "Submission pay successfully", 200);
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

module.exports = {
  getAllUnpaidSubmissions,
  paySubmission,
};
