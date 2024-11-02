import { Product } from '../types/product';

interface CategoryProduct {
  productId: string;
  productName: string;
  thumbnailUrl: string;
}

// 咖啡
const coffeeProducts: CategoryProduct[] = [{
  "productId": "117",
  "productName": "拿铁",
  "thumbnailUrl": "https://img05.luckincoffeecdn.com/group3/M00/5E/21/CtxgFGZ76i6AUN1MAAITQmZpPdU211.png"
},
{
  "productId": "125",
  "productName": "焦糖玛奇朵",
  "thumbnailUrl": "https://img04.luckincoffeecdn.com/group3/M00/5E/38/CtxgFGZ77HiAMBzxAAISoQKWKG0143.png"
},
{
  "productId": "121",
  "productName": "卡布奇诺",
  "thumbnailUrl": "https://img05.luckincoffeecdn.com/group2/M00/B3/16/CtwiPWHnwW6AL4KjAAH1Y8uFSSc827.png"
},
{
  "productId": "127",
  "productName": "香草拿铁",
  "thumbnailUrl": "https://img05.luckincoffeecdn.com/group3/M00/5E/37/CtxgFGZ77FyAK1qfAAIJ_l_C5E4909.png"
},
{
  "productId": "124",
  "productName": "精萃澳瑞白",
  "thumbnailUrl": "https://img06.luckincoffeecdn.com/group3/M00/5E/3A/CtxgFGZ77KqAO-AHAAH5MljksPM292.png"
}];

// 瑞纳冰
const iceProducts: CategoryProduct[] = [{
  "productId": "311",
  "productName": "抹茶瑞纳冰",
  "thumbnailUrl": "https://img02.luckincoffeecdn.com/group2/M00/04/14/CtwiPGN_Jy-AJFxMAAHhy_aGStk220.png"
},
{
  "productId": "119",
  "productName": "巧克力瑞纳冰",
  "thumbnailUrl": "https://img05.luckincoffeecdn.com/group1/M00/7E/74/CtwhA2N_J1qAQhFZAAJS9vRcSNU059.png"
},
{
  "productId": "298",
  "productName": "咖啡瑞纳冰",
  "thumbnailUrl": "https://img03.luckincoffeecdn.com/group2/M00/04/15/CtwiPGN_J4-AH0PxAAG6V_9Oe6A892.png"
}];

// 生椰系列
const coconutProducts: CategoryProduct[] = [{
  "productId": "1262",
  "productName": "生椰拿铁",
  "thumbnailUrl": "https://img03.luckincoffeecdn.com/group1/M00/2F/24/CtwhA2Hnw5-APh3XAAI1QTyCyOU499.png"
},
{
  "productId": "1884",
  "productName": "生椰丝绒拿铁",
  "thumbnailUrl": "https://img05.luckincoffeecdn.com/group2/M00/63/25/CtwiPGPyQP2AHvaTAAIU-J06nY0805.png"
},
{
  "productId": "1344",
  "productName": "陨石生椰拿铁",
  "thumbnailUrl": "https://img03.luckincoffeecdn.com/group1/M00/2F/2E/CtwhAmHnw8OAKS6OAAJt1InFWKI828.png"
}];

// 轻乳茶
const milkTeaProducts: CategoryProduct[] = [{
  "productId": "1001",
  "productName": "经典奶茶",
  "thumbnailUrl": "https://img03.luckincoffeecdn.com/group1/M00/8D/24/CtwhA2BfWvWABY1zAAHKR8I_YhE328.png"
},
{
  "productId": "1002",
  "productName": "红茶拿铁",
  "thumbnailUrl": "https://img03.luckincoffeecdn.com/group1/M00/8D/25/CtwhA2BfWvSAVTlKAAHKR8I_YhE328.png"
},
{
  "productId": "1003",
  "productName": "抹茶轻乳茶",
  "thumbnailUrl": "https://img03.luckincoffeecdn.com/group1/M00/8D/26/CtwhA2BfWvSAyZVAAHKR8I_YhE328.png"
}];

export const categoryProducts: Record<string, CategoryProduct[]> = {
  "100025": coffeeProducts,
  "100008": iceProducts,
  "100380": coconutProducts,
  "100266": milkTeaProducts
};
