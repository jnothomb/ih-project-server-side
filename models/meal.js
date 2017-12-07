const mongoose = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const mealSchema = new mongoose.Schema({
  name: String,
  portions: Number,
  restaurant: {
    // objectID ref User
    type: ObjectId,
    ref: "User"
  },
  availablePortions: String
});

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
