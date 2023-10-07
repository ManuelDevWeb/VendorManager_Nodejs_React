const express = require("express");

// Custom response
const response = require("../network/response");

const router = express.Router();

// GET /agreements/
router.get("/", (req, res) => {
  response.success(req, res, "GET /agreements/");
});

// GET /agreements/:id
router.get("/:id", (req, res) => {
  response.success(req, res, "GET /agreements/:id");
});

module.exports = router;
