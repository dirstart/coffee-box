import React from 'react';
import { Heart } from 'lucide-react';

interface ProductHeaderProps {
  title: string;
  favorite: boolean;
  onFavoriteClick: () => void;
}

export default function ProductHeader({ title, favorite, onFavoriteClick }: ProductHeaderProps) {
  return (
    <div className="relative h-64 bg-gradient-to-br from-amber-50 to-orange-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl"></div>
        <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-orange-200/10 rounded-full blur-3xl"></div>
      </div>

      {/* TOP1 标签 */}
      <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-amber-200/50 flex items-center gap-2">
        <span className="text-xs">TOP</span>
        <span className="font-bold">1</span>
      </div>

      {/* 商品图片 */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=400&q=80"
          alt={title}
          className="w-48 h-48 object-cover rounded-full shadow-2xl shadow-amber-200/50"
        />
      </div>

      {/* 收藏按钮 */}
      <button
        onClick={onFavoriteClick}
        className="absolute top-4 left-4 p-3 bg-white/80 backdrop-blur-md rounded-full hover:bg-white transition-all duration-300 group shadow-lg"
      >
        <Heart
          className={`w-5 h-5 transition-all duration-300 ${
            favorite 
              ? 'fill-red-500 stroke-red-500' 
              : 'stroke-gray-400 group-hover:stroke-red-400'
          }`}
        />
      </button>
    </div>
  );
}