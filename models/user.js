const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  username: String,
  phoneNumber: String,
  userType: String, // mongoose enum
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
