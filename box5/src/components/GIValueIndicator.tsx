import React, { useState } from 'react';

interface GIValueIndicatorProps {
  value?: number;
  isDragging?: boolean;
}

export const GIValueIndicator: React.FC<GIValueIndicatorProps> = ({ value = 0, isDragging = false }) => {
  const [hoveredSection, setHoveredSection] = useState<'low' | 'medium' | 'high' | null>(null);

  const getPosition = (val: number) => {
    return Math.min(Math.max((val / 100) * 100, 0), 100);
  };

  const getValueDescription = (val: number) => {
    if (val <= 55) return '血糖反应温和';
    if (val <= 70) return '血糖反应适中';
    return '血糖反应剧烈';
  };

  const getDescriptionColor = (val: number) => {
    if (val <= 55) return 'text-emerald-400';
    if (val <= 70) return 'text-amber-400';
    return 'text-rose-400';
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="flex items-baseline mb-8 group">
        <div className="text-4xl font-light text-slate-500 transition-all duration-300 group-hover:text-slate-600">
          GI值
        </div>
        <div className={`text-base ml-4 font-medium transition-all duration-300 ${getDescriptionColor(value)}`}>
          {getValueDescription(value)}
        </div>
      </div>
      
      <div className="relative h-4 mb-8">
        {/* Enhanced gradient background with subtle animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-50 via-amber-50 to-rose-50
                       before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent 
                       before:via-white/20 before:to-transparent before:rounded-full
                       after:absolute after:inset-0 after:bg-gradient-to-b after:from-white/10 
                       after:to-transparent after:rounded-full"></div>
        
        {/* Value bars with enhanced glass effect */}
        <div 
          className={`absolute w-[55%] h-full backdrop-blur-sm rounded-l-full 
                     transition-all duration-500 bg-gradient-to-r from-emerald-400/90 to-emerald-400/80
                     ${hoveredSection === 'low' || isDragging ? 'shadow-[0_0_30px_rgba(52,211,153,0.3)]' : ''}`}
          onMouseEnter={() => setHoveredSection('low')}
          onMouseLeave={() => setHoveredSection(null)}
        ></div>
        <div 
          className={`absolute left-[55%] w-[15%] h-full backdrop-blur-sm
                     transition-all duration-500 bg-gradient-to-r from-amber-400/90 to-amber-400/80
                     ${hoveredSection === 'medium' || isDragging ? 'shadow-[0_0_30px_rgba(251,191,36,0.3)]' : ''}`}
          onMouseEnter={() => setHoveredSection('medium')}
          onMouseLeave={() => setHoveredSection(null)}
        ></div>
        <div 
          className={`absolute left-[70%] w-[30%] h-full backdrop-blur-sm rounded-r-full
                     transition-all duration-500 bg-gradient-to-r from-rose-400/90 to-rose-400/80
                     ${hoveredSection === 'high' || isDragging ? 'shadow-[0_0_30px_rgba(251,113,133,0.3)]' : ''}`}
          onMouseEnter={() => setHoveredSection('high')}
          onMouseLeave={() => setHoveredSection(null)}
        ></div>
        
        {/* Enhanced indicator dot */}
        {value !== undefined && (
          <div className="absolute top-1/2 transition-all duration-300 ease-out"
               style={{ 
                 left: `${getPosition(value)}%`,
                 transform: 'translate(-50%, -50%)'
               }}>
            <div className="relative">
              {/* Dynamic glow effect */}
              <div className={`absolute -inset-2 rounded-full transition-all duration-300
                             ${isDragging ? 'bg-white/40 blur-md' : 'bg-white/20 blur-sm'}`}></div>
              
              {/* Conditional pulse animation */}
              {isDragging && (
                <div className="absolute -inset-4 rounded-full animate-ping"
                     style={{
                       backgroundColor: value <= 55 ? 'rgba(52,211,153,0.2)' :
                                      value <= 70 ? 'rgba(251,191,36,0.2)' :
                                      'rgba(251,113,133,0.2)'
                     }}></div>
              )}
              
              {/* Enhanced main dot */}
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br from-white to-white/90 
                             shadow-lg border-2 transition-all duration-300 
                             cursor-pointer origin-center
                             ${isDragging ? 'scale-125 shadow-xl' : 'hover:scale-110'}
                             active:scale-95`}
                   style={{
                     borderColor: value <= 55 ? 'rgb(52,211,153)' :
                                value <= 70 ? 'rgb(251,191,36)' :
                                'rgb(251,113,133)',
                     boxShadow: isDragging ? `0 0 20px ${
                       value <= 55 ? 'rgba(52,211,153,0.4)' :
                       value <= 70 ? 'rgba(251,191,36,0.4)' :
                       'rgba(251,113,133,0.4)'
                     }` : ''
                   }}></div>
              
              {/* Enhanced value label */}
              <div className={`absolute left-1/2 -translate-x-1/2 top-8
                             bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full
                             shadow-lg transition-all duration-300 origin-center
                             ${isDragging ? 'shadow-xl scale-110' : ''}`}>
                <span className="text-sm font-medium" 
                      style={{
                        color: value <= 55 ? 'rgb(52,211,153)' :
                               value <= 70 ? 'rgb(251,191,36)' :
                               'rgb(251,113,133)'
                      }}>{value}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between text-lg mt-8">
        <div className="group cursor-pointer">
          <div className="flex flex-col items-start transition-all duration-300 hover:-translate-y-1">
            <span className="text-emerald-400 font-medium group-hover:text-emerald-500 
                         transition-all duration-300 group-hover:scale-105">低GI</span>
            <span className="text-slate-400 text-sm group-hover:text-slate-500">0-55</span>
          </div>
          <div className="h-0.5 w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
        </div>
        <div className="group cursor-pointer">
          <div className="flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
            <span className="text-amber-400 font-medium group-hover:text-amber-500 
                         transition-all duration-300 group-hover:scale-105">中GI</span>
            <span className="text-slate-400 text-sm group-hover:text-slate-500">56-69</span>
          </div>
          <div className="h-0.5 w-0 bg-amber-400 transition-all duration-300 group-hover:w-full"></div>
        </div>
        <div className="group cursor-pointer">
          <div className="flex flex-col items-end transition-all duration-300 hover:-translate-y-1">
            <span className="text-rose-400 font-medium group-hover:text-rose-500 
                         transition-all duration-300 group-hover:scale-105">高GI</span>
            <span className="text-slate-400 text-sm group-hover:text-slate-500">70-100</span>
          </div>
          <div className="h-0.5 w-0 bg-rose-400 transition-all duration-300 group-hover:w-full"></div>
        </div>
      </div>
    </div>
  );
};