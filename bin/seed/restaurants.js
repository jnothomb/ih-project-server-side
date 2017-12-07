const listedRestaurants = [
  {
    email: "info@yoobi.com",
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

// connect

User.remove({}).then(() => {
  // create...

  console.log(listedRestaurants);
});
