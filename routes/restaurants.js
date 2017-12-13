const express = require("express");
const router = express.Router();

const response = require("../helpers/response");
const User = require("../models/user");
const Meal = require("../models/meal");
const Reservation = require("../models/reservation");

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
  const restaurant = req.body.restaurant;
  const portions = req.body.portions.quantity;

  const newReservation = new Reservation({
    client,
    meal,
    restaurant,
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

router.get("/edit-profile/:id", (req, res, next) => {
  User.findById(req.params.id, (err, theProfile) => {
    if (err) {
      return next(err);
    }
    response.data(req, res, theProfile);
  });
});

router.post("/edit-profile", (req, res, next) => {
  const updatedProfile = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email
  };
  User.findOne({ _id: req.user._id }, (err, data) => {
    if (err) {
      return next(err);
    }
    data.name = updatedProfile.name;
    data.phoneNumber = updatedProfile.phoneNumber;
    data.email = updatedProfile.email;

    data.save((err, result) => {
      if (err) {
        return next(err);
      }
      response.data(req, res, data);
    });
  });
});

router.get("/reservations", (req, res, next) => {
  Reservation.find({ client: req.user._id }).populate("meal restaurant").exec((err, reservations) => {
    if (err) {
      return next(err);
    }
    console.log(reservations);
    response.data(req, res, reservations);
  });
});

module.exports = router;
