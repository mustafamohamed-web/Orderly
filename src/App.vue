<template>
  <HomeScreen/>
  <div class="logo">
    <img src="@/assets/main-burger.png" alt="Restaurant Logo" />
  </div>
  <div class="cta">
    <p class="text-primary">Touch to start</p>
    <SvgIcon tag="touch" css="icon touch" />
  </div>
  

  <IconSprite />
  

</template>

<script setup>
import { IconSprite, SvgIcon} from '@/components'
import { HomeScreen } from '@/views'
</script>