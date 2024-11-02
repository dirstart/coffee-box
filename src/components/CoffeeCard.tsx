import React from 'react';
import { Coffee, Thermometer, Zap } from 'lucide-react';

interface CoffeeCardProps {
  coffee: {
    name: string;
    calories: string;
    caffeine: string;
    type: string;
    image: string;
    description: string;
  };
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <div className="mt-6 bg-white rounded-xl shadow-lg overflow-hidden">
      <img
        src={coffee.image}
        alt={coffee.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-900 mb-2">{coffee.name}</h3>
        <p className="text-amber-700 mb-4">{coffee.description}</p>
        
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center space-x-2">
            <Coffee className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-amber-700">{coffee.calories}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-amber-700">{coffee.caffeine}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Thermometer className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-amber-700">{coffee.type}</span>
          </div>
        </div>
      </div>
    </div>
  );
}