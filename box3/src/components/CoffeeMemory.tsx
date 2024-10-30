import React from 'react';

const CoffeeMemory = () => {
  const recentCoffees = [
    {
      id: 1,
      name: '生椰拿铁',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=300&h=200',
      lastOrdered: '3天前',
      calories: 180,
      appleEquivalent: 2,
    },
    {
      id: 2,
      name: '美式咖啡',
      image: 'https://images.unsplash.com/photo-1494415859740-21e878dd929d?auto=format&fit=crop&q=80&w=300&h=200',
      lastOrdered: '1周前',
      calories: 5,
      appleEquivalent: 0,
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">您的咖啡记忆</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentCoffees.map((coffee) => (
          <div key={coffee.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{coffee.name}</h3>
              <p className="text-gray-600 text-sm">{coffee.lastOrdered}购买</p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-sm text-gray-600">热量：{coffee.calories}kcal</span>
                <span className="text-sm text-gray-600">
                  {Array(coffee.appleEquivalent).fill('🍎').join('')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoffeeMemory;