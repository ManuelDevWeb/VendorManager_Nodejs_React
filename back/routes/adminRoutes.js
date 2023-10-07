const express = require("express");

// Custom response
const response = require("../network/response");

const router = express.Router();

// GET /admin/best-supplier-profession?start=<date>&end=<date>
router.get("/best-supplier-profession", (req, res) => {
  response.success(req, res, "GET /admin/best-supplier-profession");
});

// GET /admin/best-buyers?start=<date>&end=<date>&limit=<integer>
router.get("/best-buyers", (req, res) => {
  response.success(req, res, "GET /admin/best-buyers");
});

module.exports = router;
