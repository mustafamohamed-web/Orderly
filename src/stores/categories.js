import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useApi } from '@/composables/useApi'
import api from '@/services/api'

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref([])
  const loading = ref(false)
  const error = ref(null)
  const selectedCategoryId = ref(null)
  const allCategories = computed(() => categories.value)
  const isLoading = computed(() => loading.value)
  const hasError = computed(() => !!error.value)
 

  // Fetch categories function
  async function fetchCategories() {
    const { fetchData } = useApi()

    try {
      // Pass a function that CALLS api.getCategories(), not the function itself
      categories.value = await fetchData(() => api.getCategories())
    } catch (err) {
      console.error('Error fetching categories:', err)
    }
  }

  // Select a category
  function selectCategory(categoryId) {
      selectedCategoryId.value = categoryId
      console.log('Selected category ID:', selectedCategoryId.value)
  }


  return {
    categories,
    selectedCategoryId,
    allCategories,
    isLoading,
    hasError,
    fetchCategories,
    selectCategory,

  }
})
