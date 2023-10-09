const express = require("express");

// Functions controller
const { login } = require("../controllers/account");

const router = express.Router();

// POST /account/login
router.post("/login", login);

module.exports = router;
