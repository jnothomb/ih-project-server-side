const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
  phoneNumber: String,
  type: {
    type: String,
    enum: ["restaurant", "individual"],
    default: "individual"
  },
  restaurant: {
    name: String,
    description: String,
    photo: String,
    address: String,
    mapsLink: String,
    category: String
  }
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
