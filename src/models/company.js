const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: String,
  password: String,

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Company", CompanySchema);
