const { Schema } = require('mongoose');

const foodSchema = new Schema({
  foodId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  },
  restaurant: {
    type: String
  },
  calories: {
    type: Number
  },
  carbs: {
    type: Number
  },
  fat: {
    type: Number
  },
  protein: {
    type: Number
  }
});

module.exports = foodSchema;
