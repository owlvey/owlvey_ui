const express = require("express");
const router = express.Router();
const scenarioController = require("../controllers/scenario.controller");

router.get("/", scenarioController.getScenariosByFeature);

module.exports = router;
