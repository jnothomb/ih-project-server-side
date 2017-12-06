const mongoose = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const reservationSchema = new mongoose.Schema({
  client: {
    // objectID ref User
    type: ObjectId,
    ref: "User"
  },
  meal: {
    // objectid ref Meal
    type: ObjectId,
    ref: "Meal"
  },
  portions: Number
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
