const { Op } = require("sequelize");

// Model
const { Agreement } = require("../models/agreement");

// Custom response
const { success, error } = require("../network/response");

// Function to list an agreements belonging to the user (buyer or supplier) where the agreements are not terminated.
const getAllAgreements = async (req, res) => {
  try {
    const notTerminatedAgreements = await Agreement.findAll({
      where: {
        status: {
          [Op.not]: ["terminated"],
        },
      },
    });

    if (!notTerminatedAgreements || notTerminatedAgreements.length === 0) {
      return error(req, res, "There aren't in progress or new agreements", 404);
    }

    return success(req, res, notTerminatedAgreements, 200);
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

// Create an endpoint that return the agreement only if it belongs to the calling account.
const getAgreement = async (req, res) => {
  try {
    const { id } = req.params;
    const { callingAccountId } = req.body;

    // TODO: Get the calling account id from the token req.user.id and verify if the account exists.

    if (!id) {
      error(req, res, "Missing id", 400);
    }

    // return the agreement only if it belongs to the calling account.
    const agreement = await Agreement.findOne({
      where: {
        id,
        [Op.or]: [
          { BuyerId: callingAccountId },
          { SupplierId: callingAccountId },
        ],
      },
    });

    if (!agreement) {
      return error(req, res, "Agreement not found", 404);
    }

    return success(req, res, agreement, 200);
  } catch (err) {
    error(req, res, err.message, 500);
  }
};

module.exports = {
  getAgreement,
  getAllAgreements,
};
