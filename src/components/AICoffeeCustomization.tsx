import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Coffee, Sparkles } from 'lucide-react';

const AICoffeeCustomization: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/assistant')}
      className="w-full bg-gradient-to-br from-[#4080ff] via-[#3575ff] to-[#4080ff] text-white rounded-xl p-4 flex items-center justify-between group relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1000&auto=format&fit=crop')] opacity-20 bg-cover bg-center transition-opacity duration-500 group-hover:opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#4080ff] via-[#3575ff] to-[#4080ff] opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.15),transparent_50%)]" />
      
      <div className="flex items-center space-x-3 relative z-10">
        <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 relative">
          <div className="absolute inset-0 bg-white/5 rounded-lg blur" />
          <Coffee className="w-5 h-5" />
        </div>
        <div className="space-y-0.5">
          <span className="font-medium text-base block">AI咖啡定制</span>
          <span className="text-xs text-blue-100">专属你的健康咖啡方案</span>
        </div>
      </div>
      
      <div className="relative z-10">
        <Sparkles className="w-5 h-5 text-white/90 group-hover:scale-125 transition-transform duration-500" />
      </div>
    </button>
  );
};

export default AICoffeeCustomization;
