const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: String,
  portions: Number,
  restaurant: String,
  availablePortions: String
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
