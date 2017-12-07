const express = require("express");
const router = express.Router();

const User = require("../models/user");

/* GET Phones listing. */
router.get("/restaurants", (req, res, next) => {
  User.find({ type: "restaurant" }, (err, restaurantList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(restaurantList);
  });
});

module.exports = router;
