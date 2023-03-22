const mongoose = require("mongoose");

const InfoTravelSchema = new mongoose.Schema({
  recommendation: { type: [String], required: true },
  historyTravel: { type: String },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("InfoTravels", InfoTravelSchema);
