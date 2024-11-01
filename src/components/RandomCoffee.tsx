import React, { useState } from 'react';
import { ArrowLeft, Coffee, Loader2 } from 'lucide-react';
import { CoffeeRecommendation } from '../types';
import { coffeeRecommendations } from '../data/coffeeData';
import { BrewingAnimation } from './BrewingAnimation';

interface Props {
  onRecommendation: (rec: CoffeeRecommendation) => void;
  onBack: () => void;
}

export function RandomCoffee({ onRecommendation, onBack }: Props) {
  const [loading, setLoading] = useState(false);

  const getRandomCoffee = () => {
    setLoading(true);
    
    // Simulate API delay for better UX
    setTimeout(() => {
      const caffeineOptions = Object.keys(coffeeRecommendations);
      const randomCaffeine = caffeineOptions[Math.floor(Math.random() * caffeineOptions.length)];
      
      const temperatureOptions = Object.keys(coffeeRecommendations[randomCaffeine]);
      const randomTemp = temperatureOptions[Math.floor(Math.random() * temperatureOptions.length)];
      
      const recommendation = coffeeRecommendations[randomCaffeine][randomTemp];
      onRecommendation(recommendation);
    }, 2500);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-luckin-500 p-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-lg font-semibold text-white">随机推荐</h2>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <p className="text-luckin-600 bg-luckin-50 p-4 rounded-lg">
            让我随机为你挑选一款咖啡，也许你会发现新的最爱！
          </p>
        </div>

        {loading && (
          <div className="mb-6">
            <BrewingAnimation />
          </div>
        )}

        <button
          onClick={getRandomCoffee}
          disabled={loading}
          className="w-full bg-luckin-500 text-white py-4 rounded-lg font-medium hover:bg-luckin-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>正在为您精心准备...</span>
            </>
          ) : (
            <>
              <Coffee className="w-5 h-5" />
              <span>随机一杯</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}