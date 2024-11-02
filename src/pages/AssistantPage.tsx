import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bot, Sparkles, Send } from 'lucide-react';
import { TextQA } from '../components/TextQA';
import { VisualQA } from '../components/VisualQA';
import { CoffeeDetails } from '../components/CoffeeRecommendation';
import { RandomCoffee } from '../components/RandomCoffee';
import { CoffeeRecommendation } from '../types';
import AIChat from '../components/AiChat';

const AssistantPage: React.FC = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<'text' | 'visual' | 'random' | null>(null);
  const [recommendation, setRecommendation] = useState<CoffeeRecommendation | null>(null);

  const handleBack = useCallback(() => {
    if (recommendation) {
      setRecommendation(null);
    } else if (mode) {
      setMode(null);
    } else {
      navigate(-1);
    }
  }, [recommendation, mode, navigate]);

  const handleRecommendation = useCallback((rec: CoffeeRecommendation) => {
    setRecommendation(rec);
  }, []);

  const handleModeSelect = useCallback((selectedMode: 'text' | 'visual' | 'random') => {
    setMode(selectedMode);
    setRecommendation(null);
  }, []);

  const renderContent = () => {
    if (recommendation) {
      return (
        <CoffeeDetails 
          recommendation={recommendation} 
          onBack={handleBack}
        />
      );
    }

    if (!mode) {
      return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#4080ff] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleBack}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                  aria-label="返回"
                >
                  <ArrowLeft className="w-4 h-4 text-white" />
                </button>
                <h1 className="text-xl font-bold text-white">咖啡营养助手</h1>
              </div>
              <div className="bg-white p-2 rounded-full">
                <Bot className="w-6 h-6 text-[#4080ff]" />
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6 space-y-4">
              <p className="text-[#4080ff] bg-blue-50 p-4 rounded-lg">
                你好！我是你的咖啡顾问，让我来帮你找到最适合的咖啡。
              </p>
              <div className="flex items-center justify-center space-x-2 text-[#4080ff]">
                <Sparkles className="w-5 h-5" />
                <p className="text-center font-medium">
                  尽享健康与活力，定制您的幸运时刻！
                </p>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => handleModeSelect('text')}
                className="w-full bg-[#4080ff] text-white py-3 rounded-lg font-medium hover:bg-[#3575ff] transition-colors"
              >
                文字问答
              </button>
              <button
                onClick={() => handleModeSelect('visual')}
                className="w-full bg-blue-100 text-[#4080ff] py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors"
              >
                图形问答
              </button>
              <button
                onClick={() => handleModeSelect('visual')}
                className="w-full bg-blue-50 text-[#4080ff] py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors"
              >
                语音问答
              </button>
              <button
                onClick={() => handleModeSelect('random')}
                className="w-full border-2 border-blue-200 text-[#4080ff] py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                随机推荐
              </button>
              <AIChat />
            </div>
          </div>

        </div>
      );
    }

    return (
      <>
        {mode === 'text' && (
          <TextQA 
            onRecommendation={handleRecommendation} 
            onBack={handleBack}
          />
        )}
        {mode === 'visual' && (
          <VisualQA 
            onRecommendation={handleRecommendation} 
            onBack={handleBack}
          />
        )}
        {mode === 'random' && (
          <RandomCoffee
            onRecommendation={handleRecommendation}
            onBack={handleBack}
          />
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4080ff]/5 to-white">
      <div className="max-w-md mx-auto">
        {/* Main Content */}
        <div className="p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AssistantPage;
