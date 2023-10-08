// Model
const { Account } = require("../models/account");
const { Submission } = require("../models/submission");

// Custom response
const { success, error } = require("../network/response");

// Function to return the best buyer profession that earned the most money (sum of submissions paid) for any supplier who worked in the specified time range.
const getBestBuyerProfession = async (req, res) => {
  try {
    success(
      req,
      res,
      "GET /admin/best-supplier-profession?start=<date>&end=<date>"
    );
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

// Function to return the buyers who paid the most for submissions in the given time period. The result should be limited based on the query parameter `limit`, with the default limit set to 3.
const getBestBuyers = async (req, res) => {
  try {
    success(
      req,
      res,
      "GET /admin/best-buyers?start=<date>&end=<date>&limit=<integer>"
    );
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

module.exports = {
  getBestBuyerProfession,
  getBestBuyers,
};
