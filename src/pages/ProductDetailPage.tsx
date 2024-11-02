import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Coffee, Heart, Share2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProductTags } from '../data/productTags';
import FlavorProfile from '../components/FlavorProfile';
import CalorieTable from '../components/CalorieTable';
import NutritionTable from '../components/NutritionTable';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // 模拟商品数据
  const product = {
    name: "拿铁咖啡",
    englishName: "CAFE LATTE",
    image: "https://img05.luckincoffeecdn.com/group3/M00/5E/21/CtxgFGZ76i6AUN1MAAITQmZpPdU211.png",
    description: "醇厚浓郁的意式浓缩咖啡，搭配丝滑奶泡，经典比例完美调配。",
    nutrition: {
      gi: 35,
      calories: 130,
      protein: 6.8,
      transFat: 0,
      carbs: 10.2,
      fat: 7.1
    },
    recommendations: [
      { name: "榛果口味" },
      { name: "加浓" },
      { name: "燕麦奶" }
    ],
    flavorProfile: {
      data: [4, 3, 5, 2, 4],
      labels: ['醇厚度', '酸度', '甜度', '苦度', '香气'],
      notes: ['浓郁', '奶香', '丝滑']
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] to-white pb-20">
      {/* 顶部导航栏 */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* 商品主图 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-square rounded-2xl bg-white shadow-lg overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-8"
          />
        </motion.div>

        {/* 商品信息 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 space-y-4"
        >
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-sm text-gray-500 mt-1">{product.englishName}</p>
          </div>

          {/* 标签 */}
          <div className="flex flex-wrap gap-2">
            {getProductTags(productId || "117").map((tag) => (
              <span
                key={tag.id}
                className={`px-3 py-1 rounded-full text-sm ${tag.backgroundColor} ${tag.color}`}
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* 描述 */}
          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* 风味特征 */}
          <FlavorProfile 
            data={product.flavorProfile.data}
            labels={product.flavorProfile.labels}
            notes={product.flavorProfile.notes}
          />

          {/* 热量表 */}
          <CalorieTable />

          {/* 营养成分表 */}
          <NutritionTable />

          {/* 推荐搭配 */}
          <div className="bg-white rounded-xl p-4 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">推荐搭配</h2>
            <div className="space-y-3">
              {product.recommendations.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#4080ff]/10 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#4080ff]" />
                    </div>
                    <span className="text-gray-700">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 底部操作栏 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 p-4"
        >
          <div className="max-w-2xl mx-auto">
            <button className="w-full bg-gradient-to-r from-[#4080ff] to-[#3575ff] text-white rounded-xl py-3 font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2">
              <Coffee className="w-5 h-5" />
              <span>立即品鉴</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
