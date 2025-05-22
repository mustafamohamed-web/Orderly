<template>
  <ul class="product-card">
    <img :src="product.image" class="product-image" :alt="product.name" />
    <h3 class="product-name">{{ product.name }}</h3>
    <p class="product-description">{{ product.description }}</p>
    <p class="price">£{{ product.price }}</p>
  </ul>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object
  }
})
</script>
