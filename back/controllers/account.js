const bcrypt = require("bcrypt");

// Model
const { Account } = require("../models/account");

// Custom response
const { success, error } = require("../network/response");

// Utils
const { generateJWT } = require("../utils/generateJWT");

// Function to login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return error(req, res, "Username and password are required", 400);
    }

    const account = await Account.findOne({ where: { firstName: username } });

    if (!account) {
      return error(req, res, "User doesn't exist", 401);
    }

    const validPassword = await bcrypt.compare(password, account.password);

    if (!validPassword) {
      return error(req, res, "Invalid credentials", 401);
    }

    const data = {
      id: account.id,
      firstName: account.firstName,
      lastName: account.lastName,
      profession: account.profession,
      balance: account.balance,
      type: account.type,
      role: account.role,
      jwtToken: generateJWT(account.id),
    };

    return success(req, res, data, 200);
  } catch (err) {
    return error(req, res, err.message, 500);
  }
};

module.exports = {
  login,
};
