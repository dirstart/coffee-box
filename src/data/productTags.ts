export const getProductTags = (productId: string): Array<{
  id: string;
  name: string;
  color: string;
  backgroundColor: string;
}> => {
  const tagMap: Record<string, Array<{
    id: string;
    name: string;
    color: string;
    backgroundColor: string;
  }>> = {
    // 拿铁
    "117": [
      {
        id: "low-sugar",
        name: "低糖",
        color: "text-green-600",
        backgroundColor: "bg-green-50"
      },
      {
        id: "protein",
        name: "高蛋白",
        color: "text-blue-600",
        backgroundColor: "bg-blue-50"
      }
    ],
    // 焦糖玛奇朵
    "125": [
      {
        id: "classic",
        name: "经典",
        color: "text-amber-600",
        backgroundColor: "bg-amber-50"
      },
      {
        id: "milk",
        name: "奶香",
        color: "text-yellow-600",
        backgroundColor: "bg-yellow-50"
      }
    ],
    // 卡布奇诺
    "121": [
      {
        id: "low-fat",
        name: "低脂",
        color: "text-purple-600",
        backgroundColor: "bg-purple-50"
      },
      {
        id: "classic",
        name: "经典",
        color: "text-amber-600",
        backgroundColor: "bg-amber-50"
      }
    ],
    // 抹茶瑞纳冰
    "311": [
      {
        id: "vitamin-c",
        name: "维生素C",
        color: "text-orange-600",
        backgroundColor: "bg-orange-50"
      },
      {
        id: "matcha",
        name: "抹茶",
        color: "text-emerald-600",
        backgroundColor: "bg-emerald-50"
      }
    ],
    // 生椰拿铁
    "1262": [
      {
        id: "fresh-coconut",
        name: "椰香",
        color: "text-cyan-600",
        backgroundColor: "bg-cyan-50"
      },
      {
        id: "low-calorie",
        name: "低卡",
        color: "text-rose-600",
        backgroundColor: "bg-rose-50"
      }
    ]
  };

  return tagMap[productId] || [];
};
