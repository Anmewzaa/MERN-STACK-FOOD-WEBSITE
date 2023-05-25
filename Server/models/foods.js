const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  foodId: {
    type: String,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  foodDescription: {
    type: String,
    required: true,
  },
  foodImage: {
    type: String,
    required: true,
  },
  foodMaterial: {
    type: [],
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Foods", FoodSchema);
