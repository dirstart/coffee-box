import React, { useState } from 'react';
import { ArrowLeft, Bot, Coffee, Check } from 'lucide-react';
import { CoffeeRecommendation } from '../types';
import { coffeeRecommendations } from '../data/coffeeData';
import { useSelectionHistory } from '../hooks/useSelectionHistory';

interface Props {
  onRecommendation: (rec: CoffeeRecommendation) => void;
  onBack: () => void;
}

interface SliderOption {
  id: string;
  label: string;
  question: string;
  min: number;
  max: number;
  step: number;
  value: number;
}

export function VisualQA({ onRecommendation, onBack }: Props) {
  const [options, setOptions] = useState<SliderOption[]>([
    {
      id: 'energy',
      label: '能量需求',
      question: '今天需要多少能量呢？让我来为您调配',
      min: 0,
      max: 100,
      step: 1,
      value: 50
    },
    {
      id: 'sweet',
      label: '甜度偏好',
      question: '喜欢什么程度的甜度？',
      min: 0,
      max: 100,
      step: 1,
      value: 50
    },
    {
      id: 'temperature',
      label: '温度选择',
      question: '想要怎样的温度？让我来调整',
      min: 0,
      max: 100,
      step: 1,
      value: 50
    }
  ]);

  const [currentOption, setCurrentOption] = useState(0);
  const [thinking, setThinking] = useState(false);
  const [completedOptions, setCompletedOptions] = useState<string[]>([]);
  const { addSelection, completeSession } = useSelectionHistory();

  const handleSliderChange = (id: string, value: number) => {
    setOptions(prev => 
      prev.map(option => 
        option.id === id ? { ...option, value } : option
      )
    );
  };

  const getValueDescription = (id: string, value: number) => {
    switch (id) {
      case 'energy':
        if (value < 33) return '轻柔提神';
        if (value < 66) return '适中能量';
        return '强劲提神';
      case 'sweet':
        if (value < 33) return '微甜';
        if (value < 66) return '适中甜度';
        return '香甜';
      case 'temperature':
        if (value < 50) return '清爽冰饮';
        return '暖心热饮';
    }
  };

  const handleNext = () => {
    const currentOpt = options[currentOption];
    const valueDesc = getValueDescription(currentOpt.id, currentOpt.value);
    
    // Record selection
    addSelection({
      timestamp: new Date().toISOString(),
      questionId: currentOpt.id,
      question: currentOpt.question,
      answer: currentOpt.value.toString(),
      answerLabel: `${currentOpt.label}: ${valueDesc}`
    });

    setCompletedOptions([...completedOptions, currentOpt.id]);

    if (currentOption < options.length - 1) {
      setCurrentOption(prev => prev + 1);
    } else {
      setThinking(true);
      setTimeout(() => {
        const energyValue = options.find(opt => opt.id === 'energy')?.value || 50;
        let caffeine: string;
        if (energyValue < 33) {
          caffeine = "50mg";
        } else if (energyValue < 66) {
          caffeine = "100mg";
        } else {
          caffeine = "200mg";
        }

        const tempValue = options.find(opt => opt.id === 'temperature')?.value || 50;
        const temperature = tempValue > 50 ? 'hot' : 'cold';

        const recommendation = coffeeRecommendations[caffeine][temperature];
        completeSession(recommendation, 'visual');
        onRecommendation(recommendation);
      }, 2000);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-luckin-500 p-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-lg font-semibold text-white">咖啡师调配间</h2>
        </div>
      </div>

      <div className="p-6">
        {/* Previous Selections */}
        {completedOptions.length > 0 && (
          <div className="mb-6 space-y-3">
            {completedOptions.map((optionId) => {
              const option = options.find(opt => opt.id === optionId);
              if (!option) return null;
              const valueDesc = getValueDescription(option.id, option.value);
              return (
                <div key={option.id} className="flex items-center justify-between bg-luckin-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-luckin-500" />
                    <span className="text-luckin-700">{option.label}</span>
                  </div>
                  <span className="text-luckin-500 font-medium">{valueDesc}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Current Question */}
        <div className="flex items-start space-x-3 mb-6">
          <div className="bg-luckin-100 p-2 rounded-full">
            {thinking ? (
              <Coffee className="w-5 h-5 text-luckin-500 animate-bounce" />
            ) : (
              <Bot className="w-5 h-5 text-luckin-500" />
            )}
          </div>
          <div className="flex-1 bg-luckin-50 p-4 rounded-lg">
            <p className="text-luckin-700">
              {thinking 
                ? "让我根据您的选择来调配完美的一杯..." 
                : options[currentOption].question}
            </p>
            {thinking && (
              <div className="mt-2 flex space-x-1">
                <div className="w-2 h-2 bg-luckin-300 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-luckin-300 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-luckin-300 rounded-full animate-bounce delay-200" />
              </div>
            )}
          </div>
        </div>

        {!thinking && (
          <>
            <div className="space-y-6 mb-8">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-luckin-700 font-medium">
                    {options[currentOption].label}
                  </label>
                  <span className="text-luckin-500">
                    {getValueDescription(options[currentOption].id, options[currentOption].value)}
                  </span>
                </div>
                <input
                  type="range"
                  min={options[currentOption].min}
                  max={options[currentOption].max}
                  step={options[currentOption].step}
                  value={options[currentOption].value}
                  onChange={(e) => handleSliderChange(options[currentOption].id, Number(e.target.value))}
                  className="w-full h-2 bg-luckin-200 rounded-lg appearance-none cursor-pointer accent-luckin-500"
                />
                <div className="flex justify-between text-sm text-luckin-400">
                  <span>低</span>
                  <span>高</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-luckin-500 text-white py-3 rounded-lg font-medium hover:bg-luckin-600 transition-colors"
            >
              {currentOption < options.length - 1 ? '下一步' : '开始调配'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}