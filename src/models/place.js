const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
  place: String,
  latitude: String,
  longitude: String,
  price: String,
  description: String,

  createdBy: String,
  updatedBy: String,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Place", PlaceSchema);
