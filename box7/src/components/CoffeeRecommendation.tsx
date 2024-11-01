import React from 'react';
import { ArrowLeft, Thermometer, Coffee, Flame } from 'lucide-react';
import { CoffeeRecommendation as CoffeeType } from '../types';
import { BrewingAnimation } from './BrewingAnimation';

interface Props {
  recommendation: CoffeeType;
  onBack: () => void;
}

export function CoffeeDetails({ recommendation, onBack }: Props) {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onBack();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img 
          src={recommendation.image} 
          alt={recommendation.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 p-2 bg-white/90 hover:bg-white rounded-full transition-colors shadow-lg z-10"
        >
          <ArrowLeft className="w-5 h-5 text-luckin-500" />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
          {recommendation.name}
        </h2>
      </div>
      
      <div className="p-6">
        <p className="text-luckin-600 mb-6">
          {recommendation.description}
        </p>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <Coffee className="w-5 h-5 text-luckin-500" />
            <span className="text-luckin-600">{recommendation.caffeine}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Flame className="w-5 h-5 text-luckin-500" />
            <span className="text-luckin-600">{recommendation.calories}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Thermometer className="w-5 h-5 text-luckin-500" />
            <span className="text-luckin-600">{recommendation.type}</span>
          </div>
        </div>

        <div className="text-center text-sm text-luckin-600">
          您的专属咖啡已为您准备就绪
        </div>
      </div>
    </div>
  );
}