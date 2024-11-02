import React from 'react';

const CoffeeList = () => {
  const coffees = [
    {
      id: 1,
      name: '生椰拿铁',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=300&h=200',
      calories: 180,
      protein: 8,
      carbs: 22,
      fat: 6,
      gi: 'low',
    },
    {
      id: 2,
      name: '美式咖啡',
      image: 'https://images.unsplash.com/photo-1494415859740-21e878dd929d?auto=format&fit=crop&q=80&w=300&h=200',
      calories: 5,
      protein: 0,
      carbs: 0,
      fat: 0,
      gi: 'none',
    },
    {
      id: 3,
      name: '榛果拿铁',
      image: 'https://images.unsplash.com/photo-1585494156145-1c60a4fe952b?auto=format&fit=crop&q=80&w=300&h=200',
      calories: 220,
      protein: 8,
      carbs: 28,
      fat: 8,
      gi: 'medium',
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">咖啡营养指南</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee) => (
          <div key={coffee.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{coffee.name}</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">热量</span>
                  <span className="font-medium">{coffee.calories} kcal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">蛋白质</span>
                  <span className="font-medium">{coffee.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">碳水</span>
                  <span className="font-medium">{coffee.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">脂肪</span>
                  <span className="font-medium">{coffee.fat}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">升糖指数</span>
                  <span className={`font-medium ${
                    coffee.gi === 'low' ? 'text-green-500' :
                    coffee.gi === 'medium' ? 'text-yellow-500' :
                    coffee.gi === 'high' ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    {coffee.gi === 'low' ? '低' :
                     coffee.gi === 'medium' ? '中' :
                     coffee.gi === 'high' ? '高' : '无'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoffeeList;