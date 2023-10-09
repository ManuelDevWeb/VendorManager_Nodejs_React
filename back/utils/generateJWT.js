const jwt = require("jsonwebtoken");

// Function to generate JWT
const generateJWT = (id) => {
  return jwt.sign({ id }, "SECRET_KEY", { expiresIn: "1d" });
};

module.exports = {
  generateJWT,
};
