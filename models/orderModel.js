const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  phone: String,
  foodItem: String,
  deliveryMethod: String,
  paymentMethod: String
});

module.exports = mongoose.model("Order", OrderSchema);
