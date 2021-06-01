const express = require("express");
const router = express.Router();

const { getAllTours } = require("../controllers/tours-controller");

//on app we will define it as /tours
router.get("/", getAllTours);

module.exports = router;
