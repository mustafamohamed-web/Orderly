<template>
  <transition name="fade" mode="out-in">
    <div v-if="!displayAllergenInfo" class="menu-item-list">
      <CategoryList :displayAllergen="displayAllergen" />
      <ProductList />
    </div>
    <div v-else class="menu-item-list">
      <AllergenCard @close="closeAllergenCard" />
    </div>
  </transition>
</template>

<script setup>
import { CategoryList, ProductList, AllergenCard } from '@/components'
import { ref } from 'vue'

const displayAllergenInfo = ref(false)

function displayAllergen() {
  displayAllergenInfo.value = true
  console.log('displayAllergenInfo', displayAllergenInfo.value)
}

function closeAllergenCard() {
  displayAllergenInfo.value = false
}
</script>
