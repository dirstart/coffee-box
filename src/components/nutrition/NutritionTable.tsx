import React from 'react';
import { Leaf } from 'lucide-react';

const NutritionTable: React.FC = () => {
  const headers = ['GI值', '热量', '蛋白质', '反式脂肪酸', '碳水化合物', '脂肪'];
  const colors = [
    'from-green-400/20 to-green-500/20',
    'from-blue-400/20 to-blue-500/20',
    'from-purple-400/20 to-purple-500/20',
    'from-red-400/20 to-red-500/20',
    'from-yellow-400/20 to-yellow-500/20',
    'from-pink-400/20 to-pink-500/20'
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
      <div className="flex items-center gap-4 text-sm text-white">
        <div className="w-8">
          <Leaf className="w-6 h-6" />
        </div>
        {headers.map((header, index) => (
          <div 
            key={index} 
            className={`flex-1 flex flex-col items-center p-3 rounded-lg bg-gradient-to-br ${colors[index]} backdrop-blur-sm`}
          >
            <span className="font-medium">{header}</span>
            <span className="text-xs text-blue-100">每100ml</span>
          </div>
        ))}
      </div>
      <div className="text-xs text-blue-100 mt-4 text-center">
        *营养成份以实际供应为准（请以制成品上之标示为准）
      </div>
    </div>
  );
};

export default NutritionTable;
