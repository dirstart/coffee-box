import React from 'react';
import { Coffee } from 'lucide-react';

interface NutritionInfo {
  gi: number;
  calories: number;
  protein: number;
  transFat: number;
  carbs: number;
  fat: number;
}

interface ProductCardProps {
  name: string;
  englishName: string;
  nutritionInfo: NutritionInfo;
  image?: string;
}

const NutritionCard: React.FC<ProductCardProps> = ({
  name,
  englishName,
  nutritionInfo,
  image
}) => {
  const getGIColor = (gi: number) => {
    if (gi <= 55) return 'text-green-600 bg-green-50';
    if (gi <= 70) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Coffee className="w-12 h-12 text-gray-300" />
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{englishName}</p>
          <div className="mt-3 grid grid-cols-6 gap-2 text-center">
            <div className={`text-sm font-medium px-2 py-1 rounded-lg ${getGIColor(nutritionInfo.gi)}`}>
              {nutritionInfo.gi}
            </div>
            {[
              nutritionInfo.calories,
              nutritionInfo.protein,
              nutritionInfo.transFat,
              nutritionInfo.carbs,
              nutritionInfo.fat
            ].map((value, index) => (
              <div key={index} className="text-sm text-gray-600">
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionCard;
