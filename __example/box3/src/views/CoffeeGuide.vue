<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center">咖啡营养指南</h1>
    <CoffeeList />
    <HealthyTips />
  </div>
</template>

<script setup lang="ts">
import CoffeeList from '../components/CoffeeList.vue';
import HealthyTips from '../components/HealthyTips.vue';
</script>