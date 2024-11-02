import React from 'react';
import { Bot, Sparkles, X, Coffee, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AIDialogProps {
  isOpen: boolean;
  onClose: () => void;
  question?: string;
}

const AIDialog: React.FC<AIDialogProps> = ({ isOpen, onClose, question }) => {
  const navigate = useNavigate();
  
  if (!isOpen) return null;

  const handleCustomization = () => {
    navigate('/assistant');
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={onClose} />
      <div className="fixed inset-4 z-50 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(64,128,255,0.1),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(64,128,255,0.05),transparent_50%)]" />
        </div>

        <div className="h-full flex flex-col relative">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-blue-50">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#4080ff]/10 rounded-lg">
                <Bot className="w-5 h-5 text-[#4080ff]" />
              </div>
              <h3 className="text-lg font-medium text-gray-800">AI咖啡助手</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleCustomization}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#4080ff] text-white text-sm rounded-lg hover:bg-[#3575ff] transition-colors duration-300"
              >
                <Coffee className="w-4 h-4" />
                <span>定制我的咖啡</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-[#4080ff]/5 rounded-lg transition-colors duration-200"
                aria-label="关闭"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-auto p-6">
            <div className="space-y-6">
              <div className="bg-[#4080ff]/5 rounded-xl p-4 text-gray-600">
                {question || "您好！我是您的咖啡顾问，请问有什么可以帮您？"}
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-blue-50">
            <div className="relative">
              <input
                type="text"
                placeholder="输入您的问题..."
                defaultValue={question}
                className="w-full pl-4 pr-12 py-3 bg-[#4080ff]/5 backdrop-blur-sm rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4080ff]/20 transition-all duration-300"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#4080ff] text-white rounded-lg hover:bg-[#3575ff] transition-all duration-300">
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDialog;
