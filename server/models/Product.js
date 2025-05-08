const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the schema for food items
const foodItemSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  image: {
    type: String,
    default: 'default-food.jpg'
  },
  available: {
    type: Boolean,
    default: true
  },
  ingredients: [
    {
      type: String,
      trim: true
    }
  ],
  nutritionInfo: {
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

// Create a pre-save hook to update the 'updatedAt' field
foodItemSchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

// Create and export the model
const FoodItem = mongoose.model('FoodItem', foodItemSchema)
module.exports = FoodItem
