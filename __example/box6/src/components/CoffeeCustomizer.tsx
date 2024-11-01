import React, { useState } from 'react';
import { Coffee, Thermometer, Droplet } from 'lucide-react';

type Size = '大杯' | '中杯' | '小杯';
type Temperature = '热' | '冰';
type Sugar = '标准甜' | '微甜' | '少甜' | '不另外加糖';

interface CoffeeOptions {
  size: Size;
  temperature: Temperature;
  sugar: Sugar;
}

const prices = {
  '大杯': 32,
  '中杯': 28,
  '小杯': 24
};

export default function CoffeeCustomizer() {
  const [options, setOptions] = useState<CoffeeOptions>({
    size: '大杯',
    temperature: '热',
    sugar: '微甜'
  });

  const renderOptionGroup = (
    title: string,
    icon: React.ReactNode,
    values: string[],
    selected: string,
    onChange: (value: string) => void,
    showPrice?: boolean
  ) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs font-medium text-gray-700">{title}</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {values.map((value) => (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={`
              group relative px-3 py-2 border transition-all text-center
              ${selected === value 
                ? 'border-blue-600 bg-blue-50/80 text-blue-700' 
                : 'border-gray-100 hover:border-blue-200 hover:bg-blue-50/50'
              }
            `}
          >
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-xs font-medium">{value}</span>
              {showPrice && value in prices && (
                <span className={`text-[10px] ${
                  selected === value ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  ¥{prices[value as Size]}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg p-4 space-y-4">
      <div className="space-y-4">
        {renderOptionGroup(
          '杯型',
          <Coffee className="w-3.5 h-3.5 text-gray-400" />,
          ['大杯', '中杯', '小杯'],
          options.size,
          (size) => setOptions(prev => ({ ...prev, size: size as Size })),
          true
        )}

        {renderOptionGroup(
          '温度',
          <Thermometer className="w-3.5 h-3.5 text-gray-400" />,
          ['热', '冰'],
          options.temperature,
          (temp) => setOptions(prev => ({ ...prev, temperature: temp as Temperature }))
        )}

        {renderOptionGroup(
          '糖度',
          <Droplet className="w-3.5 h-3.5 text-gray-400" />,
          ['标准甜', '微甜', '少甜', '不另外加糖'],
          options.sugar,
          (sugar) => setOptions(prev => ({ ...prev, sugar: sugar as Sugar }))
        )}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-semibold text-blue-600">¥{prices[options.size]}</span>
            <span className="text-xs text-gray-400 line-through">¥{prices[options.size] + 5}</span>
          </div>
          <div className="text-[10px] text-gray-400">已优惠5元</div>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium transition-colors hover:bg-blue-700">
          立即购买
        </button>
      </div>
    </div>
  );
}