const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

//router.post("/sessions", sessionController.doLogin);
router.get("/:userid", userController.getUserById);

module.exports = router;
