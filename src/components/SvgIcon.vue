<!-- IconComponent.vue -->
<template>
  <svg :class="cssClass">
    <use :xlink:href="'#' + tag" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  tag: String,
  css: String
})

const tag = computed(() => props.tag)
const cssClass = computed(() => props.css ? props.css : 'icon')
</script>