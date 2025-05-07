<template>
  <div class="service-cards">
    <div class="card center-coloumn">
      <SvgIcon tag="logo" css="icon text-primary" />
      <h3>Eat In</h3>
      <h5 class="text-center">Enjoy your meal in our comfy seating area</h5>
    </div>
    <div class="card center-coloumn">
      <SvgIcon tag="take-away" css="icon text-primary" />
      <h3>Take Out</h3>
      <h5 class="text-center">Busy day? we'll pack your meal for you to take away</h5>
    </div>
  </div>
   <SvgIcon @click="home" tag="take-away" css="icon color-text-primary" />
</template>

<script setup>
import { SvgIcon } from '@/components'
import { useRouter } from 'vue-router'

const router = useRouter()

function home() {
    router.push('/')
}
</script>
