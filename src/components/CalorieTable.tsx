import React from 'react';

interface CalorieTableProps {
  title?: string;
  unit?: string;
  size?: string;
  coldCalories?: {
    noSugar: number;
    lessSugar: number;
    halfSugar: number;
    lightSugar: number;
    regular: number;
  };
  hotCalories?: {
    noSugar: number;
    lessSugar: number;
    halfSugar: number;
    lightSugar: number;
    regular: number;
  };
}

const CalorieTable: React.FC<CalorieTableProps> = ({
  title = "产品热量表",
  unit = "kcal",
  size = "中杯",
  coldCalories = {
    noSugar: 0,
    lessSugar: 103,
    halfSugar: 119,
    lightSugar: 123,
    regular: 137
  },
  hotCalories = {
    noSugar: 0,
    lessSugar: 97,
    halfSugar: 113,
    lightSugar: 125,
    regular: 137
  }
}) => {
  return (
    <div className="bg-white rounded-xl p-3 sm:p-4 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <div className="text-center p-2 bg-gradient-to-r from-[#4080ff]/5 to-[#3575ff]/5 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-700">
            {size}
          </span>
          <span className="text-xs text-gray-500 ml-2">
            (热量单位: {unit})
          </span>
        </div>
        <table className="w-full text-[11px] sm:text-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-1.5 sm:p-2 border-b border-r border-gray-200 font-medium text-gray-600 w-[12%]"></th>
              <th className="p-1.5 sm:p-2 border-b border-r border-gray-200 font-medium text-gray-600 w-[17.6%]">
                <div>不加糖</div>
                <div className="text-[10px] text-gray-400">No Sugar</div>
              </th>
              <th className="p-1.5 sm:p-2 border-b border-r border-gray-200 font-medium text-gray-600 w-[17.6%]">
                <div>微糖</div>
                <div className="text-[10px] text-gray-400">Less</div>
              </th>
              <th className="p-1.5 sm:p-2 border-b border-r border-gray-200 font-medium text-gray-600 w-[17.6%]">
                <div>半糖</div>
                <div className="text-[10px] text-gray-400">Half</div>
              </th>
              <th className="p-1.5 sm:p-2 border-b border-r border-gray-200 font-medium text-gray-600 w-[17.6%]">
                <div>少糖</div>
                <div className="text-[10px] text-gray-400">Light</div>
              </th>
              <th className="p-1.5 sm:p-2 border-b border-gray-200 font-medium text-gray-600 w-[17.6%]">
                <div>标准</div>
                <div className="text-[10px] text-gray-400">Regular</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-1.5 sm:p-2 border-r border-gray-200 bg-gray-50 font-medium">
                <div>冷</div>
                <div className="text-[10px] text-gray-400">Cold</div>
              </td>
              <td className="p-1.5 sm:p-2 border-r border-gray-200 text-center">{coldCalories.noSugar}</td>
              <td className="p-1.5 sm:p-2 border-r border-gray-200 text-center">{coldCalories.lessSugar}</td>
              <td className="p-1.5 sm:p-2 border-r border-gray-200 text-center">{coldCalories.halfSugar}</td>
              <td className="p-1.5 sm:p-2 border-r border-gray-200 text-center">{coldCalories.lightSugar}</td>
              <td className="p-1.5 sm:p-2 text-center">{coldCalories.regular}</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="p-1.5 sm:p-2 border-r border-gray-200 bg-gray-50 font-medium">
                <div>热</div>
                <div className="text-[10px] text-gray-400">Hot</div>
              </td>
              <td className="p-1.5 sm:p-2 border-r border-gray-200 text-center">{hotCalories.noSugar}</td>
              <td className="p-1.5 sm:p-2 border-r border-gray-200 text-center">{hotCalories.lessSugar}</td>
              <td className="p-1.5 sm:p-2 border-r border-gray-200 text-center">{hotCalories.halfSugar}</td>
              <td className="p-1.5 sm:p-2 border-r border-gray-200 text-center">{hotCalories.lightSugar}</td>
              <td className="p-1.5 sm:p-2 text-center">{hotCalories.regular}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CalorieTable;
