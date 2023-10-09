const jwt = require("jsonwebtoken");

// Model
const { Account } = require("../models/account");

// Custom response
const { error } = require("../network/response");
const { err } = require("../utils/error");

// Function to check if user is authenticated
const checkAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Get token from header
    token = req.headers.authorization.split(" ")[1];
    // console.log(token);

    // Verify token
    const decoded = jwt.verify(token, "SECRET_KEY");

    const infoAccount = await Account.findOne({ where: { id: decoded.id } });

    req.account = {
      id: infoAccount.id,
      firstName: infoAccount.firstName,
      lastName: infoAccount.lastName,
      profession: infoAccount.profession,
      balance: infoAccount.balance,
      type: infoAccount.type,
      role: infoAccount.role,
    };
    try {
    } catch (err) {
      return error(req, res, err.message, 404);
    }
  }

  if (!token) {
    const e = err("Invalid token", 401);
    return error(req, res, e.message, e.codeStatus);
  }
};

module.exports = {
  checkAuth,
};
