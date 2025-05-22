// composables/useApi.js
import { ref } from 'vue'

export function useApi() {
  const loading = ref(false)
  const error = ref(null)

  const fetchData = async (apiMethod, ...args) => {
    try {
      loading.value = true
      error.value = null

      // This line is throwing the error - apiMethod is not a function
      const response = await apiMethod(...args)

      if (response.success) {
        return response.data
      } else {
        throw new Error('API call failed')
      }
    } catch (err) {
      console.error('Error:', err)
      error.value = 'Failed to load data. Please try again.'
      throw err
    } finally {
      loading.value = false
    }
  }

  return { fetchData, loading, error }
}
