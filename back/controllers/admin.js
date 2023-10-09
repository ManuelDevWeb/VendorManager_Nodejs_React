// Model
const { Account } = require("../models/account");
const { Agreement } = require("../models/agreement");
const { Submission } = require("../models/submission");

// Custom response
const { success, error } = require("../network/response");

// Utils
const { submissionPriceWithRange } = require("../utils/accountFunctions");

// Function to return the best buyer profession that earned the most money (sum of submissions paid) for any supplier who worked in the specified time range.
const getBestBuyerProfession = async (req, res) => {
  try {
    let { start, end } = req.query;

    if (!start) start = 1;
    if (!end) end = 12;

    if (start > 12 || end > 12 || start < 1 || end < 1) {
      return error(req, res, "Invalid month, set number between 1 and 12", 400);
    }

    const buyersAccountWithPaidSubmission = await Account.findAll({
      where: {
        type: "buyer",
      },
      include: [
        {
          model: Agreement,
          as: "Buyer",
          include: [
            {
              model: Submission,
              where: {
                paid: true,
              },
            },
          ],
        },
      ],
    });

    // Get the sum of submissions paid for each buyer
    const bestBuyerProfession = submissionPriceWithRange(
      buyersAccountWithPaidSubmission,
      start,
      end
    );

    // Sort the array descending by sum and return the first element
    const bestBuyerProfessionSorted = bestBuyerProfession.sort(
      (a, b) => b.sum - a.sum
    )[0];

    const data = {
      profession: bestBuyerProfessionSorted.profession,
      amountPaid: bestBuyerProfessionSorted.amountPaid,
    };

    return success(req, res, data, 200);
  } catch (err) {
    return error(req, res, err.message, 500);
  }
};

// Function to return the buyers who paid the most for submissions in the given time period. The result should be limited based on the query parameter `limit`, with the default limit set to 3.
const getBestBuyers = async (req, res) => {
  try {
    let { start, end, limit } = req.query;

    if (!limit) limit = 3;
    if (!start) start = 1;
    if (!end) end = 12;

    if (start > 12 || end > 12 || start < 1 || end < 1) {
      return error(req, res, "Invalid month, set number between 1 and 12", 400);
    }

    if (limit < 1)
      return error(req, res, "Invalid limit, set number greater than 0", 400);

    const buyersAccount = await Account.findAll({
      where: {
        type: "buyer",
      },
      include: [
        {
          model: Agreement,
          as: "Buyer",
          include: [
            {
              model: Submission,
              where: {
                paid: true,
              },
            },
          ],
        },
      ],
    });

    // Get the sum of submissions paid for each buyer and
    const bestBuyers = submissionPriceWithRange(buyersAccount, start, end);

    // Sort the array descending by sum
    const limitBestBuyers = bestBuyers
      .sort((a, b) => b.amountPaid - a.amountPaid)
      .slice(0, limit);

    return success(req, res, limitBestBuyers, 200);
  } catch (err) {
    return error(req, res, err.message, 500);
  }
};

module.exports = {
  getBestBuyerProfession,
  getBestBuyers,
};
