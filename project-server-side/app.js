const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// --- CONNECT TO MONGOOSE ---
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/final-project", {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

const auth = require("./routes/auth");
// const business = require("./routes/business");
// const meals = require("./routes/meals");
const restaurants = require("./routes/restaurants");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/auth", auth);
// app.use("/", business);
// app.use("/", meals);
app.use("/", restaurants);

// catch 404 and forward to error handler
app.use((req, res) => {
  res.status(404);
  res.json({ error: "not-found" });
});
// error handler
app.use((err, req, res, next) => {
  console.error("error", req.method, req.path, err);

  // return the error page
  if (!res.headersSent) {
    res.status(500);
    res.json({ error: "unexpected" });
  }
});

module.exports = app;
