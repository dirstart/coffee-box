<template>
  <nav class="bg-white shadow-sm">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="flex items-center gap-2">
          <Coffee class="text-[#00b96b]" />
          <span class="font-bold text-xl">瑞幸健康</span>
        </router-link>
        
        <div class="flex items-center gap-6">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-2"
            :class="[
              route.path === item.path 
                ? 'text-[#00b96b]' 
                : 'text-gray-600 hover:text-[#00b96b]'
            ]"
          >
            <component :is="item.icon" :size="20" />
            <span>{{ item.label }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { Coffee, History, MessageCircle } from 'lucide-vue-next';
import { useRoute } from 'vue-router';

const route = useRoute();

const navItems = [
  { path: '/guide', label: '营养指南', icon: Coffee },
  { path: '/profile', label: '咖啡记忆', icon: History },
  { path: '/ai', label: '智能助手', icon: MessageCircle },
];
</script>