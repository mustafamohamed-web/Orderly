const express = require('express')
const router = express.Router()
const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('../controllers/categoryController.js')

// Get all categories and create new category
router.route('/').get(getAllCategories).post(createCategory)

// Get, update and delete category by id
router.route('/:id').get(getCategoryById).put(updateCategory).delete(deleteCategory)

module.exports = router
