// TO SEED, RUN: node bin/seed/restaurants.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../../models/user").User;
mongoose.connect("mongodb://localhost/final-project-db", { useMongoClient: true });

var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironhack";
var encryptedPass = bcrypt.hashSync(password, salt);

const listedRestaurants = [
  {
    email: "info@yoobi.com",
    password: encryptedPass,
    phoneNumber: "965-144-6018",
    type: "restaurant",
    restaurant: {
      name: "Yoobi",
      description: "Kick ass temaki restaurant",
      photo: "",
      address: "W1 London",
      category: "Sushi"
    }
  },
  {
    email: "info@honest.com",
    password: encryptedPass,
    phoneNumber: "965-564-6034",
    type: "restaurant",
    restaurant: {
      name: "Honest Burgers",
      description: "Kick ass burger joint",
      photo: "",
      address: "W1 London",
      category: "Burgers"
    }
  },
  {
    email: "info@sushigarden.com",
    password: encryptedPass,
    phoneNumber: "955-164-7818",
    type: "restaurant",
    restaurant: {
      name: "Sushi Garden",
      description: "Kick ass japanese restaurant",
      photo: "",
      address: "BN1 Brighton",
      category: "Sushi"
    }
  }
];

// User.remove({}).then(() => {
//   // create...

//   console.log(listedRestaurants);
// });

// connect

User.create(listedRestaurants, (err, listedRestaurants) => {
  if (err) {
    throw err;
  }
  listedRestaurants.forEach((listedRestaurants) => {
    console.log("Success", listedRestaurants);
  });
  mongoose.connection.close();
});
