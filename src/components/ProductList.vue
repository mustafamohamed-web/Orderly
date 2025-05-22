<template>
  <div class="product-list">
    <TopBanner />
    
    <Transition name="fade" mode="out-in">
      <div v-if="productStore.loading" class="loading-state">Loading products...</div>
      <div v-else-if="productStore.error" class="error-state">
        {{ productStore.error }}
        <button @click="retryFetch">Try Again</button>
      </div>
      <div v-else-if="mainProducts.length === 0" class="empty-state">
        No products found for this category.
      </div>
      <div v-else class="products-grid">
        <ProductCard 
          v-for="product in mainProducts" 
          :product="product" 
          :key="product._id" 
          class="product-card" 
        />
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useProductsStore } from '@/stores/products'
import { useCategoriesStore } from '@/stores/categories'
import { TopBanner, ProductCard } from '@/components'

const productStore = useProductsStore()
const categoryStore = useCategoriesStore()

function retryFetch() {
  productStore.fetchProducts(categoryStore.selectedCategoryId)
}

onMounted(() => {
  // Initial fetch
  if (categoryStore.selectedCategoryId) {
    productStore.fetchProducts(categoryStore.selectedCategoryId)
  } else {
    productStore.fetchProducts()
  }
})

const mainProducts = computed(() => {
  if (!categoryStore.categories || categoryStore.categories.length === 0) return []
  const mainCategory = categoryStore.categories.find((category) => category._id === categoryStore.selectedCategoryId)
  if (!mainCategory) return []
  return productStore.products.filter((product) => product.category === categoryStore.selectedCategoryId)
})
</script>
