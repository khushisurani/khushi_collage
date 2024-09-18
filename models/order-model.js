const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  username: { type: String, required: true },
  lname: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  state: { type: String, required: true },
  city: { type: String, required: true },
});

const Order = new model("Order", orderSchema);
module.exports = Order;
