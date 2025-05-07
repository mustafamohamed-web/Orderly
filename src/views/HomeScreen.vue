<template>
  <div class="home-screen full-height" @click="touch">
    <div class="logo-header">
      <HeaderArea :colour="'#ffffff'" />
    </div>
    <div class="main-meal">
      <img src="@/assets/main-burger.png" alt="Restaurant Logo" />
    </div>
    <div class="cta">
      <SvgIcon tag="touch" css="icon touch" />
      <h1 class="text-primary">Touch to start</h1>
    </div>
  </div>
</template>

<script setup>
import { SvgIcon, HeaderArea } from '@/components'
import { useRouter } from 'vue-router'

const router = useRouter()

function touch() {
  router.push('/serviceSelection')
}
</script>
