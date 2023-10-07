const express = require("express");

// Functions controller
const { getAllAgreements, getAgreement } = require("../controllers/agreement");

const router = express.Router();

// GET /agreements/
router.get("/", getAllAgreements);

// GET /agreements/:id
router.get("/:id", getAgreement);

module.exports = router;
