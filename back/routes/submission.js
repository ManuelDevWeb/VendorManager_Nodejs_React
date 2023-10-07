const express = require("express");

// Functions controller
const {
  getAllUnpaidSubmissions,
  paySubmission,
} = require("../controllers/submission");

const router = express.Router();

// GET /submissions/unpaid
router.get("/unpaid", getAllUnpaidSubmissions);

// POST /submissions/:submission_id/pay
router.post("/:submission_id/pay", paySubmission);

module.exports = router;
