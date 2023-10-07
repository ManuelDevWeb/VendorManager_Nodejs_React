// Model
const { Submission } = require("../models/submission");

// Custom response
const { success, error } = require("../network/response");

// Get all unpaid submissions for a user (either a buyer or supplier) but only for active agreements.
const getAllUnpaidSubmissions = async (req, res) => {
  try {
    success(req, res, "GET /submissions/unpaid");
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

// Implement this API to allow buyers to pay for a submission. A buyer can only pay if their balance is greater than or equal to the amount to pay. The amount should be moved from the buyer's balance to the supplier's balance.
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
