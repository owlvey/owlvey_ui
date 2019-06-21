const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

//router.post("/sessions", sessionController.doLogin);
router.get("/", customerController.getCustomers);
router.post("/", customerController.addCustomer);

module.exports = router;
