const express = require("express");
const router = express.Router();
const caseController = require("../controllers/case.controller");

router.get("/", caseController.getCasesByStep);

module.exports = router;
