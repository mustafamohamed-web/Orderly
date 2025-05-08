const mongoose = require('mongoose')
const { MONGODB_URI } = require('./config/env.js')
const Category = require('./models/Category')
const FoodItem = require('./models/Product')
const data = require('./data.js')

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err)
    process.exit(1)
  })

// Function to seed data
const seedData = async () => {
  try {
    // Clear existing data
    await Category.deleteMany({})
    await FoodItem.deleteMany({})

    console.log('Database cleared. Starting seed process...')

    // Insert categories
    const createdCategories = await Category.insertMany(data.categories)
    console.log(`${createdCategories.length} categories inserted`)

    // Create a map of category names to IDs for reference when creating food items
    const categoryMap = {}
    createdCategories.forEach((category) => {
      categoryMap[category.name] = category._id
    })

    // Process food items to replace category name with category ID
    const processedFoodItems = data.foodItems.map((item) => {
      return {
        name: item.name,
        description: item.description || '',
        price: item.price,
        category: categoryMap[item.category], // Replace name with ID
        image: item.image,
        available: item.available !== undefined ? item.available : true,
        ingredients: item.ingredients || [],
        nutritionInfo: {
          calories: item.nutritionInfo?.calories || item.calorie || 0,
          protein: item.nutritionInfo?.protein || 0,
          carbs: item.nutritionInfo?.carbs || 0,
          fat: item.nutritionInfo?.fat || 0
        }
      }
    })

    const createdFoodItems = await FoodItem.insertMany(processedFoodItems)
    console.log(`${createdFoodItems.length} food items inserted`)

    console.log('Database seeded successfully')
    process.exit(0)
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1)
  }
}

// Run the seed function
seedData()
