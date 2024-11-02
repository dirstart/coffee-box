import React, { useState } from 'react';
import { Bot, Sparkles } from 'lucide-react';
import AIDialog from './AIDialog';

const AICoffeeQA: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string>();

  const handleQuestionClick = (question: string) => {
    setSelectedQuestion(question);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl relative overflow-hidden">
        {/* 背景渐变 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4080ff]/5 to-transparent" />
        
        {/* 主要内容 */}
        <div className="relative">
          {/* 头部 */}
          <div className="flex items-center space-x-3 p-6 border-b border-blue-50">
            <div className="p-2 bg-[#4080ff]/10 rounded-lg">
              <Bot className="w-5 h-5 text-[#4080ff]" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">AI咖啡问答</h3>
          </div>

          {/* 内容区域 */}
          <div className="p-4 space-y-4">
            <p className="text-sm text-gray-600">
              智能助手随时为您解答关于咖啡的各种疑问
            </p>

            {/* 问题列表 */}
            <div className="space-y-2">
              {[
                '卡布奇诺和拿铁的区别是什么？',
                '喝咖啡会影响睡眠吗？',
                '每天最多可以喝几杯咖啡？'
              ].map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="w-full text-left p-3 text-sm text-gray-600 hover:bg-[#4080ff]/5 rounded-xl transition-colors duration-200"
                >
                  {question}
                </button>
              ))}
            </div>

            {/* 输入框 */}
            <div className="relative">
              <input
                type="text"
                placeholder="输入您的问题..."
                className="w-full pl-4 pr-12 py-3 bg-[#4080ff]/5 backdrop-blur-sm rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#4080ff]/20 transition-all duration-300"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const input = e.target as HTMLInputElement;
                    handleQuestionClick(input.value);
                    input.value = '';
                  }
                }}
              />
              <button 
                onClick={() => setIsDialogOpen(true)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#4080ff] text-white rounded-lg hover:bg-[#3575ff] transition-all duration-300"
              >
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AIDialog 
        isOpen={isDialogOpen}
        onClose={() => {
          setIsDialogOpen(false);
          setSelectedQuestion(undefined);
        }}
        question={selectedQuestion}
      />
    </>
  );
};

export default AICoffeeQA;
