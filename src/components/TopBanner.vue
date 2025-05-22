<template>
  <div class="top-banner">
    <h4 v-if="mainCategory">{{ mainCategory?.name }}</h4>
    <h4 v-else>Select a category</h4>
    <ul class="sub-categories">
      <li>All</li>
      <li>Popular</li>
      <li>Meat</li>
      <li>Vegitarian</li>
    </ul>
  </div>
</template>

<script setup>
import { ref,computed } from 'vue'
import { useCategoriesStore } from '@/stores/categories';
const store = useCategoriesStore()


const mainCategory = computed(() => {
  if(!store.categories || store.categories.length === 0) return null
  return store.categories.find(category => category._id === store.selectedCategoryId)
})

</script>
