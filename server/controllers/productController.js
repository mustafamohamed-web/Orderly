const FoodItem = require('../models/Product.js')

// Get all food items
exports.getAllItems = async (req, res) => {
  try {
    const foodItems = await FoodItem.find()
    res.status(200).json({
      success: true,
      count: foodItems.length,
      data: foodItems
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// Get single food item
exports.getItemById = async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id)

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        error: 'Food item not found'
      })
    }

    res.status(200).json({
      success: true,
      data: foodItem
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// Create new food item
exports.createItem = async (req, res) => {
  try {
    const foodItem = await FoodItem.create(req.body)

    res.status(201).json({
      success: true,
      data: foodItem
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message)

      return res.status(400).json({
        success: false,
        error: messages
      })
    } else {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    }
  }
}

// Update food item
exports.updateItem = async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        error: 'Food item not found'
      })
    }

    res.status(200).json({
      success: true,
      data: foodItem
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message)

      return res.status(400).json({
        success: false,
        error: messages
      })
    } else {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    }
  }
}

// Delete food item
exports.deleteItem = async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndDelete(req.params.id)

    if (!foodItem) {
      return res.status(404).json({
        success: false,
        error: 'Food item not found'
      })
    }

    res.status(200).json({
      success: true,
      data: {}
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}
