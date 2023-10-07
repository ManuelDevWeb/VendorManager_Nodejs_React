const express = require("express");

// Custom response
const response = require("../network/response");

const router = express.Router();

// GET /submissions/unpaid
router.get("/unpaid", (req, res) => {
  response.success(req, res, "GET /submissions/unpaid");
});

// POST /submissions/:submission_id/pay
router.post("/:submission_id/pay", (req, res) => {
  response.success(req, res, "POST /submissions/:submission_id/pay");
});

module.exports = router;
