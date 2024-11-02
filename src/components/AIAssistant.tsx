// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Bot, Sparkles } from 'lucide-react';

// const AIAssistant: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="space-y-6">
//       {/* AI 定制按钮 */}
//       <button
//         onClick={() => navigate('/assistant')}
//         className="w-full bg-gradient-to-r from-[#4080ff] to-[#3575ff] text-white rounded-xl p-4 flex items-center justify-between hover:shadow-lg transition-all duration-300"
//       >
//         <div className="flex items-center space-x-3">
//           <div className="p-2 bg-white/10 rounded-lg">
//             <Bot className="w-5 h-5" />
//           </div>
//           <span className="font-medium">AI咖啡定制</span>
//         </div>
//         <Sparkles className="w-5 h-5 text-white/80" />
//       </button>

//       {/* AI 问答区块 */}
//       <div className="bg-white rounded-xl shadow-sm p-4 space-y-4">
//         <div className="flex items-center justify-between">
//           <h3 className="text-lg font-medium text-gray-800">有问题？问我吧！</h3>
//           <div className="p-1.5 bg-blue-50 rounded-lg">
//             <Bot className="w-4 h-4 text-[#4080ff]" />
//           </div>
//         </div>
        
//         <p className="text-sm text-gray-500">
//           智能助手随时为您解答关于咖啡的各种疑问
//         </p>

//         {/* 常见问题列表 */}
//         <div className="space-y-2">
//           {['卡布奇诺和拿铁的区别是什么？', '喝咖啡会影响睡眠吗？', '每天最多可以喝几杯咖啡？'].map((question, index) => (
//             <button
//               key={index}
//               className="w-full text-left p-2 text-sm text-gray-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
//             >
//               {question}
//             </button>
//           ))}
//         </div>

//         {/* 输入框 */}
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="输入您的问题..."
//             className="w-full pl-4 pr-12 py-2.5 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4080ff]/20"
//           />
//           <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-[#4080ff] text-white rounded-lg hover:bg-[#3575ff] transition-colors">
//             <Sparkles className="w-4 h-4" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AIAssistant;



import React from 'react';
import AICoffeeQA from './AICoffeeQA';
import AICoffeeCustomization from './AICoffeeCustomization';

const AIAssistant: React.FC = () => {
  return (
    <div className="space-y-6 relative">
      <AICoffeeQA />
      <AICoffeeCustomization />
    </div>
  );
};

export default AIAssistant;
