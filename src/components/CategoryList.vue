<template>
  <div class="category-list center-coloumn">
    <div class="header center-coloumn">
      <SvgIcon tag="logo" css="icon touch" />
      <h4>Orderly</h4>
    </div>
    <ul>
      <li v-for="category in categories" class="categories">
        <p class="category-name">{{ category.name }}</p>
        <img :src="category.image" class="category-image" alt="category image" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { SvgIcon } from '@/components'
import api from '@/services/api'
const categories = ref([])
const loading = ref(true)
const error = ref(null)

const fetchCategories = async () => {
  try {
    loading.value = true
    error.value = null

    const response = await api.getCategories()
    console.log(response)

    // Your backend response structure
    if (response.success) {
      categories.value = response.data
    } else {
      throw new Error('Failed to fetch categories')
    }
  } catch (err) {
    console.error('Error fetching categories:', err)
    error.value = 'Failed to load categories. Please try again.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchCategories)
</script>
