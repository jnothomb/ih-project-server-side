// TO SEED, RUN: node bin/seed/restaurants.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../../models/user");
mongoose.connect("mongodb://localhost/final-project-db", { useMongoClient: true });

var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "123";
var encryptedPass = bcrypt.hashSync(password, salt);

const listedRestaurants = [
  {
    email: "info@yoobi.com",
    password: encryptedPass,
    phoneNumber: "+44-20-7287-9442",
    type: "restaurant",
    restaurant: {
      name: "Yoobi",
      description: "London’s first temakeria, Yoobi, takes inspiration from Brazil and pushes the sushi experience in an exciting new direction. Our freshly made temaki rolls, featuring uniquely developed flavour combinations, are served to eat in or enjoy on the go. Our range of creative recipes use the highest quality natural ingredients; from our own rice blend to the finest sustainably-sourced fish and from fresh wasabi to locally sourced vegetables.",
      photo: "https://scontent.fmad3-2.fna.fbcdn.net/v/t31.0-8/12967995_1048912348519976_3949127771077935711_o.jpg?oh=b56934ca11da54b2fcd969e0df048bae&oe=5ACF475B",
      address: "38 Lexington Street. W1F 0LL. London",
      category: "Sushi"
    }
  },
  {
    email: "info@honest.com",
    password: encryptedPass,
    phoneNumber: "+44-20-3146-3985",
    type: "restaurant",
    restaurant: {
      name: "Honest Burgers",
      description: "A burger restaurant inspired by great British produce.",
      photo: "https://www.honestburgers.co.uk/wp-content/uploads/2017/12/christmas-special-1280-853.jpg",
      address: "34a Camden Lock Pl. NW1 8AF. London",
      category: "Burgers"
    }
  },
  {
    email: "info@andina.com",
    password: encryptedPass,
    phoneNumber: "+44-20-7920-6499",
    type: "restaurant",
    restaurant: {
      name: "Andina",
      description: "Our menu is packed with superfood ingredients native to the Peruvian Andes paired with the best of British produce.",
      photo: "https://my.propcom.co.uk/data/media/gallery/large/Tiradito%20de%20Cobia_01_Andina_DL-1.jpg",
      address: "1 Redchurch Street. E2 7DJ. London",
      category: "Peruvian"
    }
  },
  {
    email: "info@sushigarden.com",
    password: encryptedPass,
    phoneNumber: "+44-12-7372-7246",
    type: "restaurant",
    restaurant: {
      name: "Sushi Garden",
      description: "Kick ass japanese restaurant",
      photo: "http://www.sushigarden.co.uk/images/slideImages/wp_IMG_6875.JPG",
      address: "32A Preston Street. BN1 2HP. Brighton",
      category: "Sushi"
    }
  },
  {
    email: "info@tommis.com",
    password: encryptedPass,
    phoneNumber: "+44-20-7224-3828",
    type: "restaurant",
    restaurant: {
      name: "Tommi's Burger Joint",
      description: "Kick ass japanese restaurant",
      photo: "https://d69uypo851qep.cloudfront.net/uploads/images/user9112/b1b6d37ef1ce6_image.jpg",
      address: "30 Thayer Street. W1U 2QP. London",
      category: "Burgers"
    }
  }
];

User.create(listedRestaurants, (err, listedRestaurants) => {
  if (err) {
    throw err;
  }
  listedRestaurants.forEach((listedRestaurants) => {
    console.log("Success", listedRestaurants);
  });
  mongoose.connection.close();
});
