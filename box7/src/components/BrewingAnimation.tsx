import React from 'react';
import { Coffee } from 'lucide-react';

export function BrewingAnimation() {
  return (
    <div className="relative w-full h-48 bg-luckin-50 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <Coffee className="w-16 h-16 text-luckin-300 animate-bounce" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-luckin-400 rounded-full animate-ping" />
          
          {/* Steam animation */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex space-x-1">
            <div className="w-1 h-6 bg-luckin-200 rounded-full animate-steam-1" />
            <div className="w-1 h-8 bg-luckin-200 rounded-full animate-steam-2 delay-150" />
            <div className="w-1 h-6 bg-luckin-200 rounded-full animate-steam-3 delay-300" />
          </div>
        </div>
      </div>
      
      {/* Liquid filling animation */}
      <div className="absolute bottom-0 left-0 right-0 bg-luckin-400 animate-fill-up" />
    </div>
  );
}