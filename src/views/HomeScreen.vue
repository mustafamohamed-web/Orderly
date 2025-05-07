<template>
  <div class="home-screen">
    <div class="logo-header">
      <SvgIcon tag="logo" css="icon logo" />
      <h1>Orderly</h1>
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
import { SvgIcon } from '@/components'
</script>
