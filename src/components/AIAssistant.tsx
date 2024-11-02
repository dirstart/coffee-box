import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Sparkles } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const navigate = useNavigate();

  const handleAIClick = () => {
    navigate('/assistant'); // 跳转到助手页面
  };

  return (
    <button
      onClick={handleAIClick}
      className="group w-full bg-gradient-to-r from-[#4080ff] to-[#3575ff] text-white rounded-xl p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center space-x-3">
        <div className="p-2.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors duration-300">
          <Bot className="w-6 h-6" />
        </div>
        <span className="text-lg font-medium tracking-wide">智能咖啡推荐</span>
      </div>
      <div className="flex items-center space-x-2 text-sm text-blue-100/90">
        <Sparkles className="w-4 h-4" />
        <span>尽享健康与活力，定制您的幸运时刻！</span>
        <Sparkles className="w-4 h-4" />
      </div>
    </button>
  );
};

export default AIAssistant;
