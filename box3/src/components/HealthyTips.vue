<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">健康小贴士</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="tip in tips" 
        :key="tip.id" 
        class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
      >
        <div class="flex items-center gap-2 mb-3">
          <Lightbulb class="text-yellow-500" :size="24" />
          <h3 class="text-lg font-semibold text-gray-800">{{ tip.title }}</h3>
        </div>
        <p class="text-gray-600">{{ tip.content }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Lightbulb } from 'lucide-vue-next';

const tips = [
  {
    id: 1,
    title: '咖啡搭配建议',
    content: '建议在享用含糖咖啡时搭配高蛋白食物，可以减缓糖分吸收速度。'
  },
  {
    id: 2,
    title: '最佳饮用时间',
    content: '建议在早上10点到12点之间饮用咖啡，此时咖啡因的吸收效果最好。'
  },
  {
    id: 3,
    title: '健康小贴士',
    content: '选择无糖或低糖选项可以减少不必要的热量摄入，同时保持咖啡的原香。'
  }
];
</script>