const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the schema for categories
const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    default: 'default-category.jpg'
  },
  displayOrder: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
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
categorySchema.pre('save', function (next) {
  this.updatedAt = Date.now()
  next()
})

// Create and export the model
const Category = mongoose.model('Category', categorySchema)
module.exports = Category
