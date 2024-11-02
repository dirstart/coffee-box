import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getProductTags } from '../data/productTags';
import { categoryProducts } from '../data/categoryProducts';

const CategoryPage: React.FC = () => {
  const { categoryId = '100025' } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const getCategoryName = (id: string): string => {
    const categoryNames: Record<string, string> = {
      '100025': '咖啡',
      '100008': '瑞纳冰',
      '100380': '生椰系列',
      '100266': '轻乳茶'
    };
    return categoryNames[id] || '商品';
  };

  const filteredProducts = useMemo(() => {
    const products = categoryProducts[categoryId] || [];
    if (!searchQuery) return products;
    return products.filter(product => 
      product.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [categoryId, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faff] to-white">
      {/* Header */}
      <div className="sticky top-0 z-30">
        {/* Navigation & Nutrition Header */}
        <div className="bg-gradient-to-r from-[#4080ff] to-[#3575ff]">
          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-center h-14 md:h-16">
              <button
                onClick={() => navigate(-1)}
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
              >
                <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <div className="ml-3 md:ml-4 flex-1 flex items-center gap-2 md:gap-4 overflow-x-auto py-2 scrollbar-hide">
                {['GI值', '热量', '蛋白质', '脂肪酸', '碳水', '脂肪'].map((header, index) => (
                  <div key={index} className="flex flex-col items-center flex-shrink-0">
                    <span className="text-xs md:text-sm font-medium text-white whitespace-nowrap">{header}</span>
                    <span className="text-[10px] md:text-xs text-blue-100">每100ml</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GI Value Legend */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 py-2">
            <div className="flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide">
              <div className="px-2 md:px-3 py-1 md:py-1.5 bg-green-50 text-green-700 rounded-full text-xs md:text-sm whitespace-nowrap">
                GI≤55 低GI
              </div>
              <div className="px-2 md:px-3 py-1 md:py-1.5 bg-yellow-50 text-yellow-700 rounded-full text-xs md:text-sm whitespace-nowrap">
                55≤GI≤70 中GI
              </div>
              <div className="px-2 md:px-3 py-1 md:py-1.5 bg-red-50 text-red-700 rounded-full text-xs md:text-sm whitespace-nowrap">
                GI＞70 高GI
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-2 md:py-3">
            <div className="relative">
              <input
                type="text"
                placeholder={`搜索${getCategoryName(categoryId)}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`w-full pl-10 md:pl-11 pr-10 md:pr-11 py-2 md:py-2.5 bg-[#4080ff]/5 rounded-xl text-sm outline-none transition-all duration-300 ${
                  isSearchFocused ? 'ring-2 ring-[#4080ff]/30 bg-white' : ''
                }`}
              />
              <div className={`absolute left-3 md:left-3.5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                isSearchFocused ? 'text-[#4080ff]' : 'text-gray-400'
              }`}>
                <Search className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 md:p-1.5 hover:bg-[#4080ff]/10 rounded-full transition-colors"
                >
                  <X className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-5xl mx-auto px-4 py-3 md:py-4">
        <motion.div 
          layout="position"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.productId}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1
                }}
                className="bg-white rounded-xl md:rounded-2xl p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex gap-3 md:gap-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-lg md:rounded-xl flex items-center justify-center overflow-hidden">
                    <img
                      src={product.thumbnailUrl}
                      alt={product.productName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900">
                      {product.productName}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 uppercase mt-0.5 md:mt-1">
                      {product.productName === '拿铁' ? 'CAFE LATTE' : 'COFFEE'}
                    </p>
                    
                    {/* Product Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {getProductTags(product.productId).map((tag) => (
                        <span
                          key={tag.id}
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${tag.backgroundColor} ${tag.color}`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>

                    <div className="mt-2 flex items-center gap-3 md:gap-4 text-sm md:text-base text-gray-900">
                      <span>35</span>
                      <span>130</span>
                      <span>6.8</span>
                      <span>0</span>
                      <span>10.2</span>
                      <span>7.1</span>
                    </div>
                    <button 
                      className="mt-2 md:mt-3 flex items-center text-xs md:text-sm text-[#4080ff] hover:text-[#3575ff] transition-colors"
                      onClick={() => navigate(`/product/${product.productId}`)}
                    >
                      <span>查看详情</span>
                      <ChevronRight className="w-3 h-3 md:w-4 md:h-4 ml-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoryPage;
