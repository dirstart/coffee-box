<template>
  <div class="grid grid-cols-2 gap-3 mb-6">
    <button
      v-for="coffee in COFFEE_TYPES"
      :key="coffee.id"
      @click="emit('update:modelValue', coffee.id)"
      :class="[
        'p-4 rounded-xl text-left transition-all',
        modelValue === coffee.id
          ? 'bg-blue-100 border-2 border-blue-400'
          : 'bg-gray-50 border-2 border-transparent hover:bg-blue-50'
      ]"
    >
      <div class="font-medium text-gray-900">{{ coffee.name }}</div>
      <div class="text-sm text-gray-600">
        {{ coffee.calories }} 卡路里 | GI: {{ coffee.gi }}
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
const COFFEE_TYPES = [
  { id: 'americano', name: '美式咖啡', calories: 5, gi: 0 },
  { id: 'latte', name: '拿铁咖啡', calories: 120, gi: 38 },
  { id: 'mocha', name: '摩卡咖啡', calories: 230, gi: 45 },
  { id: 'cappuccino', name: '卡布奇诺', calories: 110, gi: 35 },
];

defineProps<{
  modelValue: string
}>();

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>();
</script>