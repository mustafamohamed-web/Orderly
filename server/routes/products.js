const express = require('express')
const router = express.Router()
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require('../controllers/productController.js')

// Get all food items and create new item
router.route('/').get(getAllItems).post(createItem)

// Get, update and delete food item by id
router.route('/:id').get(getItemById).put(updateItem).delete(deleteItem)

module.exports = router
