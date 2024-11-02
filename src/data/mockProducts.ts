import { Product } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: '拿铁咖啡',
    englishName: 'CAFE LATTE',
    description: '醇厚浓郁的意式浓缩咖啡，搭配丝滑奶泡',
    price: 28,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800',
    calories: 130,
    tags: ['人气Top3', '经典', '奶香'],
    nutritionInfo: {
      gi: 35,
      calories: 130,
      protein: 6.8,
      transFat: 0,
      carbs: 10.2,
      fat: 7.1
    }
  },
  {
    id: '2',
    name: '美式咖啡',
    englishName: 'AMERICANO',
    description: '清爽醇厚的意式浓缩咖啡，加入纯净水调配',
    price: 22,
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=800',
    calories: 15,
    tags: ['经典', '无糖'],
    nutritionInfo: {
      gi: 30,
      calories: 15,
      protein: 0.2,
      transFat: 0,
      carbs: 0.3,
      fat: 0.1
    }
  },
  {
    id: '3',
    name: '卡布奇诺',
    englishName: 'CAPPUCCINO',
    description: '浓郁的意式浓缩咖啡，搭配轻盈绵密奶泡',
    price: 28,
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800',
    calories: 125,
    tags: ['经典', '奶香'],
    nutritionInfo: {
      gi: 35,
      calories: 125,
      protein: 6.5,
      transFat: 0,
      carbs: 9.8,
      fat: 6.9
    }
  },
  {
    id: '4',
    name: '摩卡咖啡',
    englishName: 'CAFFE MOCHA',
    description: '香浓巧克力与意式浓缩咖啡的默契融合',
    price: 30,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=800',
    calories: 180,
    tags: ['人气Top5', '巧克力'],
    nutritionInfo: {
      gi: 40,
      calories: 180,
      protein: 6.2,
      transFat: 0,
      carbs: 22.5,
      fat: 7.2
    }
  }
];
