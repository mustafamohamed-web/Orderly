<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <IconSprite />
  </div>
</template>

<script setup>
import { IconSprite } from '@/components'
</script>
