const express = require("express");

// Functions controller
const { deposit } = require("../controllers/balance");

const router = express.Router();

// POST /balances/deposit/:accountId
router.post("/deposit/:accountId", deposit);

module.exports = router;
