const express = require("express");
const router = express.Router();

const response = require("../helpers/response");
const User = require("../models/user");
const Meal = require("../models/meal");
const Reservation = require("../models/reservation");

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
  Meal.find({ restaurant: req.params.id }, (err, mealsList) => {
    if (err) {
      return next(err);
    }
    response.data(req, res, mealsList);
  });
});

router.get("/meal/:id", (req, res, next) => {
  // @todo populate the resxtaurant
  Meal.findById(req.params.id).populate("restaurant").exec((err, theMeal) => {
    if (err) {
      return next(err);
    }
    if (!theMeal) {
      return response.notFound(req, res);
    }
    response.data(req, res, theMeal);
  });
});

router.post("/meal/:id/confirm", (req, res, next) => {
  const client = req.user._id;
  const meal = req.params.id;
  const portions = req.body.portions;

  const newReservation = new Reservation({
    client,
    meal,
    portions
  });

  Meal.findByIdAndUpdate(meal, { $inc: { "availablePortions": -portions } }, (err, result) => {
    if (err) {
      return next(err);
    }
    newReservation.save((err) => {
      if (err) {
        return next(err);
      }
      return response.data(req, res, newReservation);
    });
  });
});

module.exports = router;
