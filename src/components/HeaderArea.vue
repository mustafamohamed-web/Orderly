<template>
  <div class="header center-coloumn">
    <SvgIcon tag="logo" css="icon big" :style="{ fill: colour }" />
    <h1>Orderly</h1>
  </div>
</template>

<script setup>
import { SvgIcon } from '@/components'
 const props = defineProps({
    colour: {
      type: String,
      default: '#e3703e'
    },
  
  })

</script>
