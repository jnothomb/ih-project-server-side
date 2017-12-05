const express = require("express");
const router = express.Router();

const User = require("../models/user");

/* GET Phones listing. */
router.get("/restaurants", (req, res, next) => {
  User.find((err, restaurantList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(restaurantList);
  });
});

router.post("/restaurants", (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    userType: req.body.userType,
    restaurant: {
      name: req.body.name,
      description: req.body.description,
      photo: req.body.photo,
      address: req.body.address,
      category: req.body.category
    }
  });

  newUser.save((err) => {
    if (err) {
      res.json(err);
      return;
    }

    res.json({
      message: "New Phone created!"
    });
  });
});

module.exports = router;
