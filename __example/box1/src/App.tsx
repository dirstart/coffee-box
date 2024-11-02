import React, { useState } from 'react';
import { Header } from './components/Header';
import { CoffeeSelector } from './components/CoffeeSelector';
import { NutritionInfo } from './components/NutritionInfo';
import { HealthTips } from './components/HealthTips';

function App() {
  const [selectedCoffee, setSelectedCoffee] = useState('americano');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Header />
        
        <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">选择你的咖啡</h2>
            <CoffeeSelector
              selectedCoffee={selectedCoffee}
              onSelect={setSelectedCoffee}
            />
          </div>

          <NutritionInfo coffeeType={selectedCoffee} />
          <HealthTips coffeeType={selectedCoffee} />
        </div>

        <div className="text-center text-xs text-gray-500 pb-6">
          * 营养数据基于标准杯型(350ml)，实际数值可能略有差异
        </div>
      </div>
    </div>
  );
}

export default App;