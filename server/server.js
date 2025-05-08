const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { PORT, MONGODB_URI } = require('./config/env.js')
const foodItemRoutes = require('./routes/products.js')
const categoryRoutes = require('./routes/categories.js')

// Initialize express app
const app = express()
app.use(cors())
// Middleware
app.use(express.json()) // For parsing JSON request bodies
app.use(express.urlencoded({ extended: true })) // For parsing URL-encoded request bodies

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to Food Kiosk API')
})
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' })
})
// API routes
app.use('/api/food-items', foodItemRoutes)
app.use('/api/categories', categoryRoutes)

// Connect to MongoDB first, then start the server
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')

    // Start the server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err)
    process.exit(1)
  })
app.get('/api/collections', async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray()
    res.json({
      success: true,
      collections: collections.map((c) => c.name)
    })
  } catch (error) {
    console.error('Error fetching collections:', error)
    res.status(500).json({ error: error.message })
  }
})

app.get('/api/collection/:name', async (req, res) => {
  try {
    const collection = req.params.name
    const data = await mongoose.connection.db.collection(collection).find({}).toArray()
    res.json({
      success: true,
      collection: collection,
      count: data.length,
      data: data
    })
  } catch (error) {
    console.error(`Error fetching collection ${req.params.name}:`, error)
    res.status(500).json({ error: error.message })
  }
})
module.exports = app
