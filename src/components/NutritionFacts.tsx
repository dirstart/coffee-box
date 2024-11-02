import React from 'react';
import { Leaf, Droplets, Gauge, Heart } from 'lucide-react';

const NutritionFacts: React.FC = () => {
  const nutritionItems = [
    {
      label: '咖啡因',
      value: '95mg',
      icon: Gauge,
      description: '提供能量',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      label: '抗氧化物',
      value: '高',
      icon: Leaf,
      description: '保护细胞',
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      label: '水分',
      value: '99%',
      icon: Droplets,
      description: '补充水分',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      label: '多酚类',
      value: '丰富',
      icon: Heart,
      description: '心脑健康',
      color: 'text-red-500',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <section className="mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">咖啡营养成分</h2>
      <div className="grid grid-cols-2 gap-4">
        {nutritionItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index}
              className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start space-x-3">
                <div className={`p-2 ${item.bgColor} rounded-lg`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-sm font-medium text-gray-600">{item.label}</span>
                    <span className={`text-sm font-bold ${item.color}`}>{item.value}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NutritionFacts;