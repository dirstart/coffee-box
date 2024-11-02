import React from 'react';
import { Sparkles } from 'lucide-react';

const HealthTips: React.FC = () => {
  const tips = [
    "建议搭配充足的水分摄入",
    "避免空腹饮用",
    "奶泡手工茶富含蛋白质，咖啡因释放更温和"
  ];

  return (
    <section className="mb-6 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-50 rounded-lg mr-3">
          <Sparkles className="w-5 h-5 text-[#4080ff]" />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">健康小贴士</h2>
      </div>
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li 
            key={index} 
            className="flex items-start text-sm group cursor-default"
          >
            <span className="text-[#4080ff] mr-2 transition-transform duration-300">•</span>
            <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">{tip}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HealthTips;