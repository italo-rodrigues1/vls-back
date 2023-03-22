const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true, trim: true, minlength: 6 },
  description: { type: String },

  idInfoTravel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InfoTravel",
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.index({ email: 1 });

UserSchema.index({ name: 1 });

UserSchema.index({ createdAt: 1 });

UserSchema.index({ idInfoTravel: 1 });




module.exports = mongoose.model("Users", UserSchema);
