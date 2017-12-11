const express = require("express");
const router = express.Router();

const response = require("../helpers/response");
const User = require("../models/user");
const Meal = require("../models/meal");

/* GET Phones listing. */
router.get("/restaurants", (req, res, next) => {
  User.find({ type: "restaurant" }, (err, restaurantList) => {
    if (err) {
      return next(err);
    }
    response.data(req, res, restaurantList);
  });
});

router.get("/restaurants/:id", (req, res, next) => {
  User.findById(req.params.id, (err, theRestaurant) => {
    if (err) {
      return next(err);
    }
    if (!theRestaurant) {
      return response.notFound(req, res);
    }
    response.data(req, res, theRestaurant);
  });
});

router.get("/restaurants/:id/meals", (req, res, next) => {
  Meal.find({ restaurant: "req.params.id" }, (err, mealsList) => {
    if (err) {
      return next(err);
    }
    response.data(req, res, mealsList);
  });
});

router.get("/meal/:id", (req, res, next) => {
  Meal.findById(req.params.id, (err, theMeal) => {
    if (err) {
      return next(err);
    }
    if (!theMeal) {
      return response.notFound(req, res);
    }
    response.data(req, res, theMeal);
  });
});

module.exports = router;
