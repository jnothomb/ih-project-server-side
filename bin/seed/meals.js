// TO SEED, RUN: node bin/seed/meals.js

const mongoose = require("mongoose");
const Meal = require("../../models/meal");
mongoose.connect("mongodb://localhost/final-project-db", { useMongoClient: true });

const seededMeals = [
  {
    name: "Citrus Salmon Temaki",
    portions: 5,
    restaurant: "5a311ad67d4b1e9966b14ede",
    availablePortions: 5,
    price: 5
  },
  {
    name: "Spicy Tuna Temaki",
    portions: 3,
    restaurant: "5a311ad67d4b1e9966b14ede",
    availablePortions: 3,
    price: 5
  },
  {
    name: "Black King Prawn Temaki",
    portions: 10,
    restaurant: "5a311ad67d4b1e9966b14ede",
    availablePortions: 5,
    price: 5
  }
];

// connect

Meal.create(seededMeals, (err, seededMeals) => {
  if (err) {
    throw err;
  }
  seededMeals.forEach((seededMeals) => {
    console.log("Success", seededMeals);
  });
  mongoose.connection.close();
});
