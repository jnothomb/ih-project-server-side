const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  username: String,
  phoneNumber: String,
  userType: String,
  restaurant: {
    name: String,
    description: String,
    photo: String,
    address: String,
    category: String
  }

});

const User = mongoose.model("User", userSchema);

module.exports = User;
