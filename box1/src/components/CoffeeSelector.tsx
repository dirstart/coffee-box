import React from 'react';

const COFFEE_TYPES = [
  { id: 'americano', name: '美式咖啡', calories: 5, gi: 0 },
  { id: 'latte', name: '拿铁咖啡', calories: 120, gi: 38 },
  { id: 'mocha', name: '摩卡咖啡', calories: 230, gi: 45 },
  { id: 'cappuccino', name: '卡布奇诺', calories: 110, gi: 35 },
];

interface CoffeeSelectorProps {
  selectedCoffee: string;
  onSelect: (id: string) => void;
}

export function CoffeeSelector({ selectedCoffee, onSelect }: CoffeeSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      {COFFEE_TYPES.map((coffee) => (
        <button
          key={coffee.id}
          onClick={() => onSelect(coffee.id)}
          className={`p-4 rounded-xl text-left transition-all ${
            selectedCoffee === coffee.id
              ? 'bg-blue-100 border-2 border-blue-400'
              : 'bg-gray-50 border-2 border-transparent hover:bg-blue-50'
          }`}
        >
          <div className="font-medium text-gray-900">{coffee.name}</div>
          <div className="text-sm text-gray-600">
            {coffee.calories} 卡路里 | GI: {coffee.gi}
          </div>
        </button>
      ))}
    </div>
  );
}