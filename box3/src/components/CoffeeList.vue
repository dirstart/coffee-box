<template>
  <section class="mb-12">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">咖啡营养指南</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="coffee in coffees" 
        :key="coffee.id" 
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
      >
        <img :src="coffee.image" :alt="coffee.name" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">{{ coffee.name }}</h3>
          
          <div class="space-y-2">
            <div v-for="(value, key) in coffee.nutrition" :key="key" class="flex justify-between">
              <span class="text-gray-600">{{ labels[key] }}</span>
              <span 
                class="font-medium"
                :class="key === 'gi' ? giColorClass(value) : ''"
              >
                {{ formatValue(key, value) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Coffee {
  id: number;
  name: string;
  image: string;
  nutrition: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    gi: 'low' | 'medium' | 'high' | 'none';
  };
}

const labels = {
  calories: '热量',
  protein: '蛋白质',
  carbs: '碳水',
  fat: '脂肪',
  gi: '升糖指数'
};

const coffees: Coffee[] = [
  {
    id: 1,
    name: '生椰拿铁',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=300&h=200',
    nutrition: {
      calories: 180,
      protein: 8,
      carbs: 22,
      fat: 6,
      gi: 'low'
    }
  },
  {
    id: 2,
    name: '美式咖啡',
    image: 'https://images.unsplash.com/photo-1494415859740-21e878dd929d?auto=format&fit=crop&q=80&w=300&h=200',
    nutrition: {
      calories: 5,
      protein: 0,
      carbs: 0,
      fat: 0,
      gi: 'none'
    }
  },
  {
    id: 3,
    name: '榛果拿铁',
    image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&q=80&w=300&h=200',
    nutrition: {
      calories: 220,
      protein: 8,
      carbs: 28,
      fat: 8,
      gi: 'medium'
    }
  }
];

const formatValue = (key: string, value: any) => {
  if (key === 'calories') return `${value} kcal`;
  if (key === 'gi') {
    return value === 'low' ? '低' :
           value === 'medium' ? '中' :
           value === 'high' ? '高' : '无';
  }
  return `${value}g`;
};

const giColorClass = (value: string) => {
  return {
    'low': 'text-green-500',
    'medium': 'text-yellow-500',
    'high': 'text-red-500',
    'none': 'text-gray-500'
  }[value] || 'text-gray-500';
};
</script>