import { CoffeeRecommendation } from '../types';

type CoffeeRecommendations = {
  [key: string]: {
    [key: string]: CoffeeRecommendation;
  };
};

export const coffeeRecommendations: CoffeeRecommendations = {
  "50mg": {
    "hot": {
      name: "轻柔拿铁",
      description: "低咖啡因含量的热饮，口感柔和，适合咖啡因敏感人群",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
      caffeine: "50mg",
      calories: "120kcal",
      type: "热饮"
    },
    "cold": {
      name: "冰摇轻咖啡",
      description: "清爽低咖啡因冰饮，添加牛奶，口感顺滑",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80",
      caffeine: "50mg",
      calories: "90kcal",
      type: "冰饮"
    }
  },
  "100mg": {
    "hot": {
      name: "经典拿铁",
      description: "传统意式浓缩配以丝滑奶泡，经典口感",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
      caffeine: "100mg",
      calories: "150kcal",
      type: "热饮"
    },
    "cold": {
      name: "冰美式",
      description: "清爽醇厚的冰美式咖啡，纯粹咖啡味",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
      caffeine: "100mg",
      calories: "15kcal",
      type: "冰饮"
    }
  },
  "200mg": {
    "hot": {
      name: "双倍浓缩美式",
      description: "双份意式浓缩，强劲提神",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=80",
      caffeine: "200mg",
      calories: "20kcal",
      type: "热饮"
    },
    "cold": {
      name: "冰摇特浓咖啡",
      description: "双倍浓缩制成的冰镇饮品，清爽提神",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=80",
      caffeine: "200mg",
      calories: "25kcal",
      type: "冰饮"
    }
  }
};
