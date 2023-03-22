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

PlaceSchema.index({
  place: 1,
});

PlaceSchema.index({
  latitude: 1,
});

PlaceSchema.index({
  longitude: 1,
});

PlaceSchema.index({
  price: 1,
});


module.exports = mongoose.model("Places", PlaceSchema);
