const mongoose = require('mongoose');

const Delivery = new mongoose.Schema({
  orderId: { type: Number,  required: true},
  customerId: { type: Number,  required: true},
  receiverName: { type: String,  required: true},
  receiverCpf: { type: String,  required: true},
  isBuyer: Boolean,
  delivery_date: { type : Date },
  location: { type: String,  required: true},
});

module.exports = mongoose.model('Delivery', Delivery)