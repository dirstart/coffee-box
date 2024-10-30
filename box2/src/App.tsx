import React from 'react';

function NutritionHeader() {
  const headers = ['GI值', '热量', '蛋白质', '反式脂肪酸', '碳水化合物', '脂肪'];
  
  return (
    <div className="bg-[#1e2756] text-white p-4 rounded-t-lg">
      <div className="flex items-center gap-4 text-sm">
        <div className="w-8">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M2 8v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8H2zm14 3c0 .55-.45 1-1 1h-4c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1zm6-6H2V3c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2z"/>
          </svg>
        </div>
        {headers.map((header, index) => (
          <div key={index} className="flex flex-col items-center">
            <span>{header}</span>
            <span className="text-xs">每100ml</span>
          </div>
        ))}
      </div>
      <div className="text-xs text-blue-300 mt-2">
        *营养成份以实际供应为准（请以制成品上之标示为准）
      </div>
    </div>
  );
}

function ProductCard({ name, englishName, nutritionInfo }: {
  name: string;
  englishName: string;
  nutritionInfo: {
    gi: number;
    calories: number;
    protein: number;
    transFat: number;
    carbs: number;
    fat: number;
  };
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-lg">
      <div className="flex items-center gap-4">
        <div className="bg-gray-100 w-24 h-24 rounded-lg flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2 21v-2h18v2H2zM20 8h-3V5H5v11h14v-6h3c1.1 0 2-.9 2-2s-.9-2-2-2zm0 4h-1V8h1v4z"/>
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-sm text-gray-500">{englishName}</p>
          <div className="mt-2 grid grid-cols-6 gap-2 text-center text-sm">
            <div>{nutritionInfo.gi}</div>
            <div>{nutritionInfo.calories}</div>
            <div>{nutritionInfo.protein}</div>
            <div>{nutritionInfo.transFat}</div>
            <div>{nutritionInfo.carbs}</div>
            <div>{nutritionInfo.fat}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const products = [
    {
      name: '拿铁咖啡',
      englishName: 'CAFE LATTE',
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
      name: '美式咖啡',
      englishName: 'AMERICANO',
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
      name: '卡布奇诺',
      englishName: 'CAPPUCCINO',
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
      name: '摩卡咖啡',
      englishName: 'CAFFE MOCHA',
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

  return (
    <div className="max-w-2xl mx-auto p-4 bg-gray-100 min-h-screen">
      <NutritionHeader />
      <div className="mt-4">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">GI≤55 为低GI食物</span>
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">55≤GI≤70 为中GI食物</span>
          <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">GI＞70 为高GI食物</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;