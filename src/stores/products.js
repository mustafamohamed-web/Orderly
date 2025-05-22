// stores/products.js
import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import api from '@/services/api'
import { useCategoriesStore } from '@/stores/categories'

export const useProductsStore = defineStore('products', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)
  const selectedProductId = ref(null)
  const displayAllergenInfo = ref(false)

  const allProducts = computed(() => products.value)
  const isLoading = computed(() => loading.value)
  const hasError = computed(() => !!error.value)

  // Fetch products by category ID
  async function fetchProducts(categoryId = null) {
    loading.value = true
    error.value = null

    try {
      const { fetchData } = useApi()
      products.value = await fetchData(() => api.getFoodItems(categoryId))
    } catch (err) {
      console.error('Error fetching products:', err)
      error.value = 'Failed to load products. Please try again.'
    } finally {
      loading.value = false
    }
  }

  // Watch for category changes
  const categoryStore = useCategoriesStore()
  watch(
    () => categoryStore.selectedCategoryId,
    (newCategoryId) => {
      if (newCategoryId) {
        fetchProducts(newCategoryId)
      } else {
        // Optional: fetch all products when no category is selected
        fetchProducts()
      }
    }
  )

  // Fetch all products on store initialization
  fetchProducts()

  return {
    products,
    loading,
    error,
    allProducts,
    isLoading,
    hasError,
    fetchProducts,
    selectedProductId,
  }
})
