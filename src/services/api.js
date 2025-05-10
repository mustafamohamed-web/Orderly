// src/services/api.js
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api'


// Helper function for fetch with error handling
async function fetchData(url, options = {}) {
  try {
    const response = await fetch(`${API_URL}${url}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    throw error
  }
}

export default {
  // Categories
  async getCategories() {
    return fetchData('/categories')
  },

  async getCategoryById(id) {
    return fetchData(`/categories/${id}`)
  },

  // Food Items
  async getFoodItems(categoryId = null) {
    const url = categoryId ? `/food-items?category=${categoryId}` : '/food-items'
    return fetchData(url)
  },

  async getFoodItemById(id) {
    return fetchData(`/food-items/${id}`)
  },

  // Orders
  async createOrder(orderData) {
    return fetchData('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    })
  }
}
