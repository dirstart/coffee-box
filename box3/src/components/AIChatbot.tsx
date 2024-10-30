import React, { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const commonQuestions = [
    '卡布奇诺和拿铁的区别是什么？',
    '喝咖啡会影响睡眠吗？',
    '每天最多可以喝几杯咖啡？'
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">咖啡智能助手</h2>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="text-blue-500" size={24} />
          <div>
            <h3 className="font-semibold text-gray-800">有问题？问我吧！</h3>
            <p className="text-sm text-gray-600">智能助手随时为您解答关于咖啡的各种疑问</p>
          </div>
        </div>

        <div className="space-y-4">
          {commonQuestions.map((question, index) => (
            <button
              key={index}
              className="block w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-gray-700"
              onClick={() => setMessage(question)}
            >
              {question}
            </button>
          ))}
        </div>

        <div className="mt-6 flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="输入您的问题..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            <Send size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default AIChatbot;