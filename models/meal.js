const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const mealSchema = new mongoose.Schema({
  name: String,
  portions: Number,
  price: Number,
  restaurant: {
    // objectID ref User
    type: ObjectId,
    ref: "User"
  },
  availablePortions: Number
}, {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  });

const Meal = mongoose.model("Meal", mealSchema);

module.exports = Meal;
