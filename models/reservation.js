const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  client: String,
  meal: String,
  portions: Number
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
