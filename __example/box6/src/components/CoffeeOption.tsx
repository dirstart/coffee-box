import React from 'react';
import { Coffee, Thermometer, Droplet } from 'lucide-react';

interface OptionItem {
  label: string;
  price?: number;
  icon?: string;
  isPopular?: boolean;
  isRecommended?: boolean;
}

interface CoffeeOptionProps {
  type: 'size' | 'temperature' | 'sugar';
  options: OptionItem[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function CoffeeOption({
  type,
  options,
  selectedValue,
  onChange
}: CoffeeOptionProps) {
  const getIcon = () => {
    switch (type) {
      case 'size': return Coffee;
      case 'temperature': return Thermometer;
      case 'sugar': return Droplet;
    }
  };

  const getLabel = () => {
    switch (type) {
      case 'size': return '杯型';
      case 'temperature': return '温度';
      case 'sugar': return '糖度';
    }
  };

  const Icon = getIcon();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-gray-400" />
          <span className="font-medium text-gray-700">{getLabel()}</span>
        </div>
      </div>
      <div className={`grid ${type === 'sugar' ? 'grid-cols-2' : 'grid-cols-3'} gap-2`}>
        {options.map((option) => (
          <button
            key={option.label}
            onClick={() => onChange(option.label)}
            className={`relative group ${
              selectedValue === option.label
                ? 'bg-blue-50 border-blue-200'
                : 'bg-gray-50/50 border-gray-100 hover:border-blue-100 hover:bg-blue-50/30'
            } border rounded-2xl p-4 transition-all duration-300`}
          >
            <div className="flex flex-col items-center gap-1">
              {option.icon && <span className="text-xl">{option.icon}</span>}
              <span className="text-sm font-medium">{option.label}</span>
              {option.price && (
                <span className={`text-xs ${
                  selectedValue === option.label ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  ¥{option.price}
                </span>
              )}
            </div>
            {option.isPopular && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                热门
              </span>
            )}
            {option.isRecommended && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
                推荐
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
