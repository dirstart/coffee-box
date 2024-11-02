import React, { useState } from 'react';
import { GIValueIndicator } from './components/GIValueIndicator';

function App() {
  const [giValue, setGiValue] = useState(45);
  const [isDragging, setIsDragging] = useState(false);

  const getSliderColor = (value: number) => {
    if (value <= 55) return 'emerald';
    if (value <= 70) return 'amber';
    return 'rose';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 p-8">
      <GIValueIndicator value={giValue} isDragging={isDragging} />
      
      <div className="max-w-2xl mx-auto mt-12">
        <input
          type="range"
          min="0"
          max="100"
          value={giValue}
          onChange={(e) => setGiValue(Number(e.target.value))}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          className={`w-full h-2 bg-gradient-to-r from-emerald-100 via-amber-100 to-rose-100 
                     rounded-lg appearance-none cursor-pointer 
                     hover:from-emerald-200 hover:via-amber-200 hover:to-rose-200 
                     transition-all duration-200
                     [&::-webkit-slider-thumb]:appearance-none
                     [&::-webkit-slider-thumb]:w-5
                     [&::-webkit-slider-thumb]:h-5
                     [&::-webkit-slider-thumb]:rounded-full
                     [&::-webkit-slider-thumb]:bg-gradient-to-br
                     [&::-webkit-slider-thumb]:from-white
                     [&::-webkit-slider-thumb]:to-white/90
                     [&::-webkit-slider-thumb]:border-2
                     [&::-webkit-slider-thumb]:shadow-lg
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:transition-all
                     [&::-webkit-slider-thumb]:duration-200
                     [&::-webkit-slider-thumb]:hover:scale-110
                     [&::-webkit-slider-thumb]:active:scale-95
                     ${getSliderColor(giValue) === 'emerald' ? 
                       '[&::-webkit-slider-thumb]:border-emerald-400 [&::-webkit-slider-thumb]:hover:shadow-emerald-200/50' :
                       getSliderColor(giValue) === 'amber' ? 
                       '[&::-webkit-slider-thumb]:border-amber-400 [&::-webkit-slider-thumb]:hover:shadow-amber-200/50' :
                       '[&::-webkit-slider-thumb]:border-rose-400 [&::-webkit-slider-thumb]:hover:shadow-rose-200/50'}`}
        />
        <div className="text-center mt-4">
          <span className={`text-sm font-medium px-4 py-2 rounded-full 
                        transition-all duration-300 backdrop-blur-sm
                        ${getSliderColor(giValue) === 'emerald' ? 
                          'text-emerald-500 bg-emerald-50/80 shadow-emerald-100/50' :
                          getSliderColor(giValue) === 'amber' ? 
                          'text-amber-500 bg-amber-50/80 shadow-amber-100/50' :
                          'text-rose-500 bg-rose-50/80 shadow-rose-100/50'}`}>
            当前GI值: {giValue}
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;