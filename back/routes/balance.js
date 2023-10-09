const express = require("express");

// Functions controller
const { deposit } = require("../controllers/balance");

// Middleware
const { checkAuth } = require("../middlewares/checkAuth");

const router = express.Router();

// POST /balances/deposit/:accountId
router.post("/deposit/:accountId", checkAuth, deposit);

module.exports = router;
