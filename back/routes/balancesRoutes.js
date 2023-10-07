const express = require("express");

// Custom response
const response = require("../network/response");

const router = express.Router();

// POST /balances/deposit/:accountId
router.post("/deposit/:accountId", (req, res) => {
  response.success(req, res, "POST /balances/deposit/:accountId");
});

module.exports = router;
