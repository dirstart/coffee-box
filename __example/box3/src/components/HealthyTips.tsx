import React from 'react';
import { Lightbulb } from 'lucide-react';

const HealthyTips = () => {
  const tips = [
    {
      id: 1,
      title: '咖啡搭配建议',
      content: '建议在享用含糖咖啡时搭配高蛋白食物，可以减缓糖分吸收速度。',
    },
    {
      id: 2,
      title: '最佳饮用时间',
      content: '建议在早上10点到12点之间饮用咖啡，此时咖啡因的吸收效果最好。',
    },
    {
      id: 3,
      title: '健康小贴士',
      content: '选择无糖或低糖选项可以减少不必要的热量摄入，同时保持咖啡的原香。',
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">健康小贴士</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip) => (
          <div key={tip.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="text-yellow-500" size={24} />
              <h3 className="text-lg font-semibold text-gray-800">{tip.title}</h3>
            </div>
            <p className="text-gray-600">{tip.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HealthyTips;