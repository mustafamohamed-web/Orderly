<template>
  <div class="app">
    <router-view v-slot="{ Component,route }">
      <transition :name="route.meta.transition || 'page'" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <IconSprite />
  </div>
</template>

<script setup>
import { IconSprite } from '@/components'

</script>
