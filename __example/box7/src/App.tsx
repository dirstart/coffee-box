import React from 'react';
import CategoryGrid from './components/CategoryGrid';
import HealthTips from './components/HealthTips';
import AIAssistant from './components/AIAssistant';
import NutritionFacts from './components/NutritionFacts';
import { Coffee, Leaf, Waves } from 'lucide-react';

const categories = {
  "categories": [
    {
      "categoryId": "100025",
      "categoryName": "咖啡",
      "categoryIcon": "https://img05.luckincoffeecdn.com/group3/M00/BA/80/CtxgFGZHYEmAYO3bAAAODZWrTCM303.png",
      "products": []
    },
    {
      "categoryId": "100008",
      "categoryName": "瑞纳冰",
      "categoryIcon": "https://img01.luckincoffeecdn.com/group3/M00/BA/81/CtxgEmZHYEmAa-pJAAAQB0jscQc538.png",
      "products": []
    },
    {
      "categoryId": "100380",
      "categoryName": "生椰系列",
      "categoryIcon": "https://img03.luckincoffeecdn.com/group3/M00/2E/42/CtxgFGa45fCACCY8AAASfK7FI2M531.png",
      "products": []
    },
    {
      "categoryId": "100266",
      "categoryName": "轻乳茶",
      "categoryIcon": "https://img01.luckincoffeecdn.com/group3/M00/BA/80/CtxgFGZHYEmAHuTmAAARPbuZIi8501.png",
      "products": []
    },
    {
      "categoryId": "100011",
      "categoryName": "小食",
      "categoryIcon": "https://img03.luckincoffeecdn.com/group3/M00/BA/80/CtxgFGZHYEmAC6GBAAALr12PXJo373.png",
      "products": []
    },
    {
      "categoryId": "100999",
      "categoryName": "热饮",
      "categoryIcon": "https://img05.luckincoffeecdn.com/group3/M00/5E/37/CtxgFGZ77FyAK1qfAAIJ_l_C5E4909.png",
      "products": []
    }
  ]
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f7fa] to-white">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#4080ff] via-[#3575ff] to-[#4080ff] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4080ff]/90 via-[#3575ff]/90 to-[#4080ff]/90" />
        <Waves 
          className="absolute bottom-0 left-0 w-full h-24 text-white/5" 
          strokeWidth={0.5}
        />
        <div className="max-w-md mx-auto px-4 py-8 relative">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-lg" />
              <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-soft relative">
                <Coffee 
                  className="w-10 h-10 text-white" 
                  strokeWidth={1.5} 
                />
                <Leaf 
                  className="absolute -top-2 -right-2 w-6 h-6 text-white/80 rotate-45" 
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-white tracking-tight">咖啡健康助手</h1>
              <div className="text-sm text-blue-100 tracking-wider font-medium px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm inline-block">
                遇见专属你的健康咖啡
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        <CategoryGrid categories={categories.categories} />
        <NutritionFacts />
        <HealthTips />
        <AIAssistant />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-400">
        © 2024 咖啡健康助手
      </footer>
    </div>
  );
};

export default App;