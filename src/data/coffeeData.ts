import { CoffeeRecommendation } from '../types';

type CoffeeRecommendations = {
  [key: string]: {
    [key: string]: CoffeeRecommendation;
  };
};

export const coffeeRecommendations: CoffeeRecommendations = {
  "50mg": {
    "hot": {
      name: "香草拿铁",
      description: "低咖啡因含量的热饮，口感柔和，适合咖啡因敏感人群",
      image: "https://img05.luckincoffeecdn.com/group3/M00/5E/37/CtxgFGZ77FyAK1qfAAIJ_l_C5E4909.png",
      caffeine: "50mg",
      calories: "120kcal",
      type: "热饮"
    },
    "cold": {
      name: "抹茶瑞纳冰",
      description: "清新抹茶与细腻奶香的完美融合，口感绵密顺滑",
      image: "https://img02.luckincoffeecdn.com/group2/M00/04/14/CtwiPGN_Jy-AJFxMAAHhy_aGStk220.png",
      caffeine: "50mg",
      calories: "90kcal",
      type: "冰饮"
    }
  },
  "100mg": {
    "hot": {
      name: "生椰拿铁",
      description: "精选生椰乳与醇厚咖啡的完美结合，清爽不腻",
      image: "https://img03.luckincoffeecdn.com/group1/M00/2F/24/CtwhA2Hnw5-APh3XAAI1QTyCyOU499.png",
      caffeine: "100mg",
      calories: "150kcal",
      type: "热饮"
    },
    "cold": {
      name: "标准美式",
      description: "清爽醇厚的冰美式咖啡，纯粹咖啡味",
      image: "https://img02.luckincoffeecdn.com/group1/M00/2F/26/CtwhA2Hnw-GABuwhAAIZH9vQLIg476.png",
      caffeine: "100mg",
      calories: "15kcal",
      type: "冰饮"
    }
  },
  "200mg": {
    "hot": {
      name: "精萃澳瑞白",
      description: "双份浓缩咖啡，搭配绵密奶泡，浓郁醇厚",
      image: "https://img06.luckincoffeecdn.com/group3/M00/5E/3A/CtxgFGZ77KqAO-AHAAH5MljksPM292.png",
      caffeine: "200mg",
      calories: "20kcal",
      type: "热饮"
    },
    "cold": {
      name: "加浓美式",
      description: "双倍浓缩制成的冰镇饮品，清爽提神",
      image: "https://img05.luckincoffeecdn.com/group2/M00/B3/21/CtwiPGHnxAiAd6UwAAIdb0ZJv1E742.png",
      caffeine: "200mg",
      calories: "25kcal",
      type: "冰饮"
    }
  }
};
