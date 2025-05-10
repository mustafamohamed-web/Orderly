<template>
  <div class="menu-item-list">
    <div class="logo-header">
      <div class="main-meal">
        <img src="@/assets/main-burger.png" alt="Restaurant Logo" />
      </div>
    </div>

    <CategoryList/>
    <ProductList />
  </div>
</template>

<script setup>
import { CategoryList, ProductList } from '@/components'
</script>
