<template>
  <div class="bg-white rounded-xl p-6 shadow-sm space-y-4">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">营养成分表</h3>
    
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-blue-50 p-3 rounded-lg">
        <div class="text-sm text-gray-600">热量</div>
        <div class="font-semibold text-blue-900">{{ nutrition.calories }} kcal</div>
      </div>
      <div class="bg-blue-50 p-3 rounded-lg">
        <div class="text-sm text-gray-600">蛋白质</div>
        <div class="font-semibold text-blue-900">{{ nutrition.protein }}g</div>
      </div>
      <div class="bg-blue-50 p-3 rounded-lg">
        <div class="text-sm text-gray-600">碳水化合物</div>
        <div class="font-semibold text-blue-900">{{ nutrition.carbs }}g</div>
      </div>
      <div class="bg-blue-50 p-3 rounded-lg">
        <div class="text-sm text-gray-600">脂肪</div>
        <div class="font-semibold text-blue-900">{{ nutrition.fat }}g</div>
      </div>
    </div>

    <div class="flex items-center gap-4 mt-6">
      <div class="flex items-center gap-2">
        <Leaf class="w-5 h-5 text-green-600" />
        <span class="text-sm text-gray-700">抗氧化物: {{ nutrition.antioxidants }}</span>
      </div>
      <div class="flex items-center gap-2">
        <Gauge class="w-5 h-5 text-blue-600" />
        <span class="text-sm text-gray-700">GI值: {{ nutrition.gi }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Leaf, Gauge } from 'lucide-vue-next';

const COFFEE_NUTRITION = {
  americano: {
    calories: 5,
    protein: 0.3,
    carbs: 0,
    fat: 0,
    gi: 0,
    antioxidants: "高",
  },
  latte: {
    calories: 120,
    protein: 6.5,
    carbs: 10,
    fat: 6,
    gi: 38,
    antioxidants: "中",
  },
  mocha: {
    calories: 230,
    protein: 7,
    carbs: 25,
    fat: 12,
    gi: 45,
    antioxidants: "中",
  },
  cappuccino: {
    calories: 110,
    protein: 6,
    carbs: 8.5,
    fat: 5.5,
    gi: 35,
    antioxidants: "中",
  },
} as const;

const props = defineProps<{
  coffeeType: keyof typeof COFFEE_NUTRITION
}>();

const nutrition = computed(() => COFFEE_NUTRITION[props.coffeeType]);
</script>