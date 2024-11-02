import React from 'react';
import { Coffee } from 'lucide-react';

export function Header() {
  return (
    <div className="text-center pt-8 pb-6">
      <div className="relative">
        <div className="flex justify-center mb-4">
          <Coffee className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-2xl font-bold text-blue-900">瑞幸咖啡营养助手</h1>
        <p className="text-blue-600 mt-2">定制你的健康咖啡时刻</p>
      </div>
    </div>
  );
}