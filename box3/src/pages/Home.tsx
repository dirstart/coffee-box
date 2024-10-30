import React from 'react';
import { ArrowRight, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCoffees = [
    {
      id: 1,
      name: '生椰拿铁',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=300&h=200',
      calories: 180,
      healthIndex: '健康指数：⭐⭐⭐⭐',
    },
    {
      id: 2,
      name: '美式咖啡',
      image: 'https://images.unsplash.com/photo-1494415859740-21e878dd929d?auto=format&fit=crop&q=80&w=300&h=200',
      calories: 5,
      healthIndex: '健康指数：⭐⭐⭐⭐⭐',
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <Coffee className="text-[#00b96b] w-16 h-16 mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          健康饮品指南
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          探索瑞幸咖啡的健康之选，了解每一杯的营养价值
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            to="/guide"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#00b96b] text-white rounded-lg hover:bg-[#00a25d] transition-colors"
          >
            查看营养指南
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Featured Coffees */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">今日推荐</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredCoffees.map((coffee) => (
            <div key={coffee.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <img src={coffee.image} alt={coffee.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{coffee.name}</h3>
                <p className="text-gray-600">{coffee.healthIndex}</p>
                <p className="text-sm text-gray-500 mt-1">热量：{coffee.calories} kcal</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          to="/profile"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">咖啡记忆</h3>
          <p className="text-gray-600 text-sm">查看您的饮品历史记录</p>
        </Link>
        <Link
          to="/guide"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">营养指南</h3>
          <p className="text-gray-600 text-sm">了解详细的营养成分信息</p>
        </Link>
        <Link
          to="/ai"
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">智能助手</h3>
          <p className="text-gray-600 text-sm">解答您的健康饮品疑问</p>
        </Link>
      </section>
    </div>
  );
};

export default Home;