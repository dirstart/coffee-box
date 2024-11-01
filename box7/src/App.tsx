import React, { useState, useCallback } from 'react';
import { TextQA } from './components/TextQA';
import { VisualQA } from './components/VisualQA';
import { CoffeeDetails } from './components/CoffeeRecommendation';
import { RandomCoffee } from './components/RandomCoffee';
import { CoffeeRecommendation } from './types';
import { Bot, Sparkles } from 'lucide-react';

export function App() {
  const [mode, setMode] = useState<'text' | 'visual' | 'random' | null>(null);
  const [recommendation, setRecommendation] = useState<CoffeeRecommendation | null>(null);

  const handleBack = useCallback(() => {
    // If we're showing a recommendation, go back to the questionnaire
    if (recommendation) {
      setRecommendation(null);
    } 
    // If we're in a mode but no recommendation, go back to mode selection
    else if (mode) {
      setMode(null);
    }
  }, [recommendation, mode]);

  const handleRecommendation = useCallback((rec: CoffeeRecommendation) => {
    setRecommendation(rec);
  }, []);

  const handleModeSelect = useCallback((selectedMode: 'text' | 'visual' | 'random') => {
    setMode(selectedMode);
    setRecommendation(null);
  }, []);

  // Show recommendation screen
  if (recommendation) {
    return (
      <div className="min-h-screen bg-luckin-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <CoffeeDetails 
            recommendation={recommendation} 
            onBack={handleBack}
          />
        </div>
      </div>
    );
  }

  // Show mode selection screen
  if (!mode) {
    return (
      <div className="min-h-screen bg-luckin-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-luckin-500 p-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-full">
                  <Bot className="w-6 h-6 text-luckin-500" />
                </div>
                <h1 className="text-xl font-bold text-white">咖啡营养助手</h1>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-6 space-y-4">
                <p className="text-luckin-600 bg-luckin-50 p-4 rounded-lg">
                  你好！我是你的咖啡顾问，让我来帮你找到最适合的咖啡。
                </p>
                <div className="flex items-center justify-center space-x-2 text-luckin-500">
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
                  className="w-full bg-luckin-500 text-white py-3 rounded-lg font-medium hover:bg-luckin-600 transition-colors"
                >
                  文字问答
                </button>
                <button
                  onClick={() => handleModeSelect('visual')}
                  className="w-full bg-luckin-100 text-luckin-700 py-3 rounded-lg font-medium hover:bg-luckin-200 transition-colors"
                >
                  图形问答
                </button>

                <button
                  onClick={() => handleModeSelect('visual')}
                  className="w-full bg-luckin-50 text-luckin-700 py-3 rounded-lg font-medium hover:bg-luckin-200 transition-colors"
                >
                  语音问答
                </button>
                <button
                  onClick={() => handleModeSelect('random')}
                  className="w-full border-2 border-luckin-200 text-luckin-600 py-3 rounded-lg font-medium hover:bg-luckin-50 transition-colors"
                >
                  随机推荐
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show questionnaire screens
  return (
    <div className="min-h-screen bg-luckin-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
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
      </div>
    </div>
  );
}
