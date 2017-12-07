const mongoose = require("mongoose");
const Schema = mongoose.Schema;
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
}, {
  timestamps: {
    createdAt: "created_at"
  }
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
