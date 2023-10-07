// Model
const { Agreement } = require("../models/agreement");

// Custom response
const { success, error } = require("../network/response");

// Return a list of agreements belonging to the user (buyer or supplier) where the agreements are not terminated.
const getAllAgreements = async (req, res) => {
  try {
    success(req, res, "GET /agreements");
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

// Create an endpoint that return the agreement only if it belongs to the calling account.
const getAgreement = async (req, res) => {
  try {
    success(req, res, "GET /agreements/:agreement_id");
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

module.exports = {
  getAgreement,
  getAllAgreements,
};
