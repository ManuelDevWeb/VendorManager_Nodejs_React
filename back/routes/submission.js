const express = require("express");

// Functions controller
const {
  getAllUnpaidSubmissions,
  paySubmission,
} = require("../controllers/submission");

const router = express.Router();

// Middleware
const { checkAuth } = require("../middlewares/checkAuth");

// GET /submissions/unpaid
router.get("/unpaid", checkAuth, getAllUnpaidSubmissions);

// POST /submissions/:submission_id/pay
router.post("/:submission_id/pay", checkAuth, paySubmission);

module.exports = router;
