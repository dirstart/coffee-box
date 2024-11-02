import React from 'react';

interface NutritionInfo {
  label: string;
  value: string | number;
  unit?: string;
}

interface NutritionTableProps {
  title?: string;
  baseUnit?: string;
  nutritionData?: {
    calories: number;
    protein: number;
    fat: number;
    transFat: number;
    carbs: number;
    caffeine: number;
    sodium: number;
    calcium: number;
  };
}

const NutritionTable: React.FC<NutritionTableProps> = ({
  title = "营养成分表",
  baseUnit = "/100ml",
  nutritionData = {
    calories: 130,
    protein: 6.8,
    fat: 7.1,
    transFat: 0,
    carbs: 10.2,
    caffeine: 95,
    sodium: 120,
    calcium: 150
  }
}) => {
  const nutritionItems = [
    { label: "热量", value: nutritionData.calories, unit: "kcal" },
    { label: "蛋白质", value: nutritionData.protein, unit: "g" },
    { label: "脂肪", value: nutritionData.fat, unit: "g" },
    { label: "碳水化合物", value: nutritionData.carbs, unit: "g" },
    { label: "咖啡因", value: nutritionData.caffeine, unit: "mg" },
    { label: "钠", value: nutritionData.sodium, unit: "mg" },
    { label: "钙", value: nutritionData.calcium, unit: "mg" },
  ];

  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="p-2 bg-gradient-to-r from-[#4080ff]/5 to-[#3575ff]/5 border-b border-gray-200">
          <span className="text-xs text-gray-600">营养成分含量{baseUnit}</span>
        </div>
        <div className="grid grid-cols-2 gap-px bg-gray-200">
          {nutritionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-2 sm:p-3 flex justify-between items-center"
            >
              <span className="text-[11px] sm:text-sm text-gray-600 font-medium">
                {item.label}
              </span>
              <span className="text-[11px] sm:text-sm text-gray-900">
                {item.value} {item.unit}
              </span>
            </div>
          ))}
        </div>
        <div className="p-2 bg-gradient-to-r from-[#4080ff]/5 to-[#3575ff]/5 border-t border-gray-200 text-center">
          <span className="text-[11px] sm:text-sm text-gray-700 font-medium">
            反式脂肪酸 = {nutritionData.transFat} g
          </span>
        </div>
      </div>
    </div>
  );
};

export default NutritionTable;
