const express = require("express");
const path = require("path");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const app = express();

// ---- CONFIGURING HELPERS ----

const response = require("./helpers/response");
const configurePassport = require("./helpers/passport");

// ---- APP SETUP ----

app.use(cors({
  credentials: true,
  origin: ["http://localhost:4200"]
}));

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  }),
  secret: "todo-app",
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000
  }
}));

const passport = configurePassport();
app.use(passport.initialize());
app.use(passport.session());

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// --- CONNECT TO MONGOOSE ---
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/final-project-db", {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

// ---- CONFIGURING ROUTES ----

const auth = require("./routes/auth");
const restaurants = require("./routes/restaurants");
// const business = require("./routes/business");
// const meals = require("./routes/meals");

app.use("/auth", auth);
app.use("/", restaurants);
// app.use("/", business);
// app.use("/", meals);

// ---- ERROR HANDLING ----

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
