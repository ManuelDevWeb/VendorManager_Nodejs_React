const { Op } = require("sequelize");

// Model
const { Submission } = require("../models/submission");
const { Agreement } = require("../models/agreement");

// Custom response
const { success, error } = require("../network/response");

// Function to get all unpaid submissions for a user (either a buyer or supplier) but only for active (new or in_profess) agreements.
const getAllUnpaidSubmissions = async (req, res) => {
  try {
    const { accountId } = req.body;

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
    success(req, res, "POST /submissions/:submission_id/pay");
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

module.exports = {
  getAllUnpaidSubmissions,
  paySubmission,
};
