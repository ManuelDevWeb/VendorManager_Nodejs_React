// Model
const { Account } = require("../models/account");

// Custom response
const { success, error } = require("../network/response");

// Implement the API to allow buyers to deposit money into their balance. A buyer can't deposit more than 10% of their total submissions to pay at the moment of deposit.
const deposit = async (req, res) => {
  try {
    success(req, res, "POST /balance/deposit/:accountId");
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

module.exports = {
  deposit,
};
