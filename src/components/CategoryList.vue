<template>
  <div class="category-list center-coloumn">
    <div class="header center-coloumn">
      <SvgIcon tag="logo" css="icon touch" />
      <h4>Orderly</h4>
    </div>
    <div class="back-home">
      <p>Home</p>
      <SvgIcon @click="home" tag="home" css="icon mini-icon" />
    </div>
    <div class="back-home">
      <p @click="displayAllergen">Allergens</p>
      <SvgIcon tag="hazard" css="icon mini-icon" />
    </div>
    <ul>
      <li v-for="category in store.categories" :key="category.id" @click="store.selectCategory(category._id)">
        <p class="category-name">{{ category.name }}</p>
        <img :src="category.image" class="category-image" alt="category image" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted,inject } from 'vue'
import { SvgIcon } from '@/components'
import { useRouter } from 'vue-router'
import { useCategoriesStore } from '@/stores/categories'

const router = useRouter()
const store = useCategoriesStore()

const props = defineProps({
  displayAllergen: {
    type: Function,
    required: true
  }
})

onMounted(() => {
  store.fetchCategories()
})


function home() {
  router.push('/')
}
</script>
