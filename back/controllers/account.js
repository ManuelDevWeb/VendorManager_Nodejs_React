const bcrypt = require("bcrypt");

// Model
const { Account } = require("../models/account");

// Custom response
const { success, error } = require("../network/response");

// Function to login
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return error(req, res, "Username and password are required", 400);
    }

    // Hashea la contraseña 10 veces
    const salt = await bcrypt.genSalt(10);

    // Hasheamos la contraseña
    const passwordHashed = await bcrypt.hash(password, salt);
    console.log(passwordHashed);
  } catch (err) {
    return error(req, res, err.message, 500);
  }
};

module.exports = {
  login,
};
