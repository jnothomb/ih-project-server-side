const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  username: String,
  phoneNumber: String,
  userType: {
    // mongoose enum
    type: String,
    enum: ["restaurant", "individual"],
    default: "individual"
  },
  restaurant: {
    name: String,
    description: String,
    photo: String,
    address: String,
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
