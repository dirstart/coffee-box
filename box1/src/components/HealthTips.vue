<template>
  <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
    <div class="flex items-start gap-3">
      <Sparkles class="w-6 h-6 text-blue-600 flex-shrink-0" />
      <div>
        <h3 class="font-medium text-blue-900 mb-2">健康小贴士</h3>
        <p class="text-sm text-gray-700">{{ benefit }}</p>
        <ul class="mt-3 text-sm text-gray-600 space-y-2">
          <li>• 建议搭配充足的水分摄入</li>
          <li>• 避免空腹饮用</li>
          <li>• 建议在下午3点前饮用</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Sparkles } from 'lucide-vue-next';

const COFFEE_BENEFITS = {
  americano: "低热量、零脂肪，富含抗氧化物，是健身人士的理想选择。",
  latte: "含优质蛋白质，可作为餐前饮品帮助控制食欲。",
  mocha: "巧克力中的可可多酚具有抗氧化作用，搭配蛋白质是理想的运动后补充品。",
  cappuccino: "奶泡丰富蛋白质，咖啡因释放更温和，适合早午餐搭配。"
} as const;

const props = defineProps<{
  coffeeType: keyof typeof COFFEE_BENEFITS
}>();

const benefit = computed(() => COFFEE_BENEFITS[props.coffeeType]);
</script>