const express = require("express");
const router = express.Router();
const versionController = require("../controllers/version.controller");

router.get("/", versionController.getVersionssByProduct);

module.exports = router;
