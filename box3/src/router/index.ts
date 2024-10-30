import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CoffeeGuide from '../views/CoffeeGuide.vue';
import HealthProfile from '../views/HealthProfile.vue';
import AskAI from '../views/AskAI.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/guide',
      name: 'guide',
      component: CoffeeGuide
    },
    {
      path: '/profile',
      name: 'profile',
      component: HealthProfile
    },
    {
      path: '/ai',
      name: 'ai',
      component: AskAI
    }
  ]
});

export default router;