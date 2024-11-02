import React from 'react';
import { Coffee } from 'lucide-react';

const NutritionHeader: React.FC = () => {
  const headers = ['GI值', '热量', '蛋白质', '反式脂肪酸', '碳水化合物', '脂肪'];
  
  return (
    <div className="bg-gradient-to-br from-[#4080ff] to-[#3575ff] text-white p-4 rounded-t-xl shadow-sm">
      <div className="flex items-center gap-4 text-sm">
        <div className="w-8">
          <Coffee className="w-6 h-6" />
        </div>
        {headers.map((header, index) => (
          <div key={index} className="flex flex-col items-center flex-1 text-center">
            <span className="font-medium">{header}</span>
            <span className="text-xs text-blue-100">每100ml</span>
          </div>
        ))}
      </div>
      <div className="text-xs text-blue-100 mt-2 pl-8">
        *营养成份以实际供应为准
      </div>
    </div>
  );
};

export default NutritionHeader;
