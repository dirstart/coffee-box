<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 p-4">
    <div class="max-w-md mx-auto space-y-6">
      <AppHeader />
      
      <div class="bg-white rounded-2xl p-6 shadow-lg space-y-6">
        <div>
          <h2 class="text-lg font-semibold text-gray-900 mb-4">选择你的咖啡</h2>
          <CoffeeSelector v-model="selectedCoffee" />
        </div>

        <NutritionInfo :coffee-type="selectedCoffee" />
        <HealthTips :coffee-type="selectedCoffee" />
      </div>

      <div class="text-center text-xs text-gray-500 pb-6">
        * 营养数据基于标准杯型(350ml)，实际数值可能略有差异
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppHeader from './components/AppHeader.vue';
import CoffeeSelector from './components/CoffeeSelector.vue';
import NutritionInfo from './components/NutritionInfo.vue';
import HealthTips from './components/HealthTips.vue';

const selectedCoffee = ref('americano');
</script>