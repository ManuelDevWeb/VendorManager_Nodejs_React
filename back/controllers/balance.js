// Model
const { Account } = require("../models/account");
const { Agreement } = require("../models/agreement");
const { Submission } = require("../models/submission");

// Custom response
const { success, error } = require("../network/response");

// Function to deposit money into their balance. A buyer can't deposit more than 10% of their total submissions to pay at the moment of deposit.
const deposit = async (req, res) => {
  try {
    const { accountId } = req.params;
    const { amount } = req.body;

    if (!accountId) {
      return error(req, res, "Account id is required", 400);
    }

    if (!amount) {
      return error(req, res, "Amount is required", 400);
    }

    const account = await Account.findOne({
      where: {
        id: accountId,
        type: "buyer",
      },
    });

    if (!account) {
      return error(req, res, "Account not found", 404);
    }

    const agreements = await Agreement.findAll({
      where: {
        BuyerId: accountId,
      },
      include: {
        model: Submission,
        as: "Submissions",
        where: {
          paid: false,
        },
      },
    });

    if (agreements.length === 0 || !agreements) {
      return error(req, res, "You don't have submissions to buy", 404);
    }

    let sum = 0;

    agreements.forEach((agreement) =>
      agreement.Submissions.forEach((submission) => (sum += submission.price))
    );

    let percent = parseFloat((sum * 0.1).toFixed(2));

    if (amount > percent) {
      return error(
        req,
        res,
        `You can't deposit more than ${percent} at the moment`,
        400
      );
    }

    const newBalance = parseFloat((account.balance + amount).toFixed(2));

    await Account.update(
      {
        balance: newBalance,
      },
      {
        where: {
          id: accountId,
        },
      }
    );

    return success(req, res, "Balance updated succesfully!", 200);
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

module.exports = {
  deposit,
};
