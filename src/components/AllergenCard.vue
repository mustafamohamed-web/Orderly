<template>
    <div  class="allergen-card">
        <div class="allergen-card__header">
            <SvgIcon tag="hazard" css="icon hazard" />
            <h2 class="allergen-card__title">Allergen Information</h2>
            <p class="allergen-card__subtitle">If you have any specific dietary requirement including food allergies, please place your order at the counter where a member of staff can assit you</p>
        </div>
        
        <div class="allergen-card__footer">
            <button @click="$emit('close')" class="allergen-card__close-button">Close</button>
            <button @click="$emit('close')" class="allergen-card__close-button">Proceed</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import {SvgIcon} from '@/components'



// Add your component logic here
</script>

