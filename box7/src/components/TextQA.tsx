import React, { useState } from 'react';
import { ArrowLeft, Check, Bot, Coffee } from 'lucide-react';
import { CoffeeRecommendation, UserSelection } from '../types';
import { coffeeRecommendations } from '../data/coffeeData';
import { useSelectionHistory } from '../hooks/useSelectionHistory';

interface Props {
  onRecommendation: (rec: CoffeeRecommendation) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 'time',
    text: "您好！我是小鹿咖啡师。现在精神状态如何呢？",
    options: [
      { id: 'energy-high', label: "需要提神醒脑", value: "200mg" },
      { id: 'energy-low', label: "想要轻松放松", value: "50mg" },
      { id: 'energy-medium', label: "保持日常状态", value: "100mg" },
      { id: 'energy-night', label: "晚上喝咖啡", value: "50mg" }
    ]
  },
  {
    id: 'mood',
    text: "今天的心情怎么样？我来为您挑选合适的口味",
    options: [
      { id: 'mood-sweet', label: "想要甜蜜慰藉", value: "sweet" },
      { id: 'mood-rich', label: "追求醇厚感", value: "rich" },
      { id: 'mood-fresh', label: "保持清爽心情", value: "fresh" },
      { id: 'mood-warm', label: "需要温暖怀抱", value: "warm" }
    ]
  },
  {
    id: 'temperature',
    text: "最后一个问题，您觉得现在适合喝什么温度的呢？",
    options: [
      { id: 'temp-hot-1', label: "温暖暖身心", value: "hot" },
      { id: 'temp-cold-1', label: "清凉提神", value: "cold" },
      { id: 'temp-cold-2', label: "丝滑冰爽", value: "cold" },
      { id: 'temp-hot-2', label: "回归经典热饮", value: "hot" }
    ]
  }
];

const messages = [
  "让我想想，这个搭配很适合您...",
  "正在为您调配完美咖啡...",
  "马上就为您准备好啦..."
];

export function TextQA({ onRecommendation, onBack }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [thinking, setThinking] = useState(false);
  const { addSelection, completeSession } = useSelectionHistory();

  const handleOptionSelect = (value: string) => {
    const currentQ = questions[currentQuestion];
    const selectedOption = currentQ.options.find(opt => opt.value === value);
    
    // Record selection
    addSelection({
      timestamp: new Date().toISOString(),
      questionId: currentQ.id,
      question: currentQ.text,
      answer: value,
      answerLabel: selectedOption?.label || value
    });

    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setThinking(true);
      setTimeout(() => {
        const caffeine = newAnswers[0];
        const temperature = newAnswers[2];
        
        const recommendation = caffeine in coffeeRecommendations
          ? coffeeRecommendations[caffeine][temperature]
          : coffeeRecommendations["100mg"][temperature];

        completeSession(recommendation, 'text');
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
          <h2 className="text-lg font-semibold text-white">与咖啡师对话</h2>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4 mb-6">
          {questions.slice(0, currentQuestion + 1).map((question, idx) => (
            <div key={`question-${question.id}`} className="flex items-start space-x-3">
              <div className="bg-luckin-100 p-2 rounded-full flex-shrink-0">
                {idx === currentQuestion ? (
                  <Bot className="w-5 h-5 text-luckin-500" />
                ) : (
                  <Coffee className="w-5 h-5 text-luckin-500" />
                )}
              </div>
              <div className="flex-1 bg-luckin-50 p-4 rounded-lg">
                <p className="text-luckin-700">{question.text}</p>
              </div>
            </div>
          ))}

          {answers.map((answer, idx) => (
            <div key={`answer-${idx}-${answer}`} className="flex items-start space-x-3 justify-end">
              <div className="flex-1 bg-luckin-500 p-4 rounded-lg">
                <p className="text-white">
                  {questions[idx].options.find(opt => opt.value === answer)?.label}
                </p>
              </div>
              <div className="w-9 h-9 bg-luckin-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-5 h-5 text-luckin-500" />
              </div>
            </div>
          ))}

          {thinking && (
            <div className="flex items-start space-x-3">
              <div className="bg-luckin-100 p-2 rounded-full">
                <Bot className="w-5 h-5 text-luckin-500" />
              </div>
              <div className="flex-1 bg-luckin-50 p-4 rounded-lg">
                <p className="text-luckin-700">
                  {messages[Math.floor(Math.random() * messages.length)]}
                </p>
                <div className="mt-2 flex space-x-1">
                  <div className="w-2 h-2 bg-luckin-300 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-luckin-300 rounded-full animate-bounce delay-100" />
                  <div className="w-2 h-2 bg-luckin-300 rounded-full animate-bounce delay-200" />
                </div>
              </div>
            </div>
          )}
        </div>

        {!thinking && currentQuestion < questions.length && (
          <div className="grid grid-cols-2 gap-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.value)}
                className="p-3 border-2 border-luckin-200 rounded-lg text-luckin-600 hover:bg-luckin-50 hover:border-luckin-300 transition-colors flex items-center justify-between group"
              >
                <span>{option.label}</span>
                <Check className="w-4 h-4 opacity-0 group-hover:opacity-50" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}