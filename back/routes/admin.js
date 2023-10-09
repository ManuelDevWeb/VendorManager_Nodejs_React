const express = require("express");

// Functions controller
const {
  getBestBuyerProfession,
  getBestBuyers,
} = require("../controllers/admin");

// Middleware
const { checkAuth } = require("../middlewares/checkAuth");

const router = express.Router();

// GET /admin/best-supplier-profession?start=<date>&end=<date>
router.get("/best-supplier-profession", checkAuth, getBestBuyerProfession);

// GET /admin/best-buyers?start=<date>&end=<date>&limit=<integer>
router.get("/best-buyers", checkAuth, getBestBuyers);

module.exports = router;
