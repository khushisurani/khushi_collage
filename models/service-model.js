const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  name: { type: String, required: true },
  carat: { type: String, required: true },
  Description: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
});

const Service = new model("Service", serviceSchema);

module.exports = Service;
