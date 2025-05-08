const Category = require('../models/Category.js')

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find()
    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// Get single category
exports.getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id)

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found'
      })
    }

    res.status(200).json({
      success: true,
      data: category
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    })
  }
}

// Create new category
exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)

    res.status(201).json({
      success: true,
      data: category
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message)

      return res.status(400).json({
        success: false,
        error: messages
      })
    } else if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'Category with this name already exists'
      })
    } else {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    }
  }
}

// Update category
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found'
      })
    }

    res.status(200).json({
      success: true,
      data: category
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((val) => val.message)

      return res.status(400).json({
        success: false,
        error: messages
      })
    } else if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'Category with this name already exists'
      })
    } else {
      res.status(500).json({
        success: false,
        error: 'Server Error'
      })
    }
  }
}

// Delete category
exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id)

    if (!category) {
      return res.status(404).json({
        success: false,
        error: 'Category not found'
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
