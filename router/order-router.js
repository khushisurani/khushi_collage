const express = require("express");
const router = express.Router();
const orderForm = require("../controllers/order-controller");

router.route("/order").post(orderForm);

module.exports = router;
