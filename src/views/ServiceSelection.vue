<template>
    <div class="service-selection center-coloumn full-height">
        <HeaderArea :colour="'#E76F51'" />
       <h3 class="bg-secondary">What do you want to eat today</h3>
       <ServiceCards/>
    </div>

</template>

<script setup>
import { HeaderArea,ServiceCards } from '@/components'
</script>

