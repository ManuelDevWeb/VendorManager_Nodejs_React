const express = require("express");

// Functions controller
const { getAllAgreements, getAgreement } = require("../controllers/agreement");

// Middleware
const { checkAuth } = require("../middlewares/checkAuth");

const router = express.Router();

// GET /agreements/
router.get("/", checkAuth, getAllAgreements);

// GET /agreements/:id
router.get("/:id", checkAuth, getAgreement);

module.exports = router;
