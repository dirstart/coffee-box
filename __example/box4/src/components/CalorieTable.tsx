import React from 'react';

interface CalorieTableProps {
  title?: string;
  unit?: string;
  size?: string;
}

export const CalorieTable: React.FC<CalorieTableProps> = ({
  title = "产品热量表",
  unit = "kcal",
  size = "中杯"
}) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">{title}</h2>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-lg">
        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-b border-gray-200">
          <span className="text-lg font-semibold text-blue-800">
            {size}
          </span>
          <span className="text-sm text-blue-600 ml-2">
            (热量单位: {unit})
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-4 px-6 border-b-2 border-r border-gray-200 font-semibold text-gray-700 w-24"></th>
                <th className="py-4 px-6 border-b-2 border-r border-gray-200 font-semibold text-gray-700">
                  <div>不另加加糖</div>
                  <div className="text-xs text-gray-500 mt-1">No Sugar</div>
                </th>
                <th className="py-4 px-6 border-b-2 border-r border-gray-200 font-semibold text-gray-700">
                  <div>微糖</div>
                  <div className="text-xs text-gray-500 mt-1">Less Sweet</div>
                </th>
                <th className="py-4 px-6 border-b-2 border-r border-gray-200 font-semibold text-gray-700">
                  <div>半糖</div>
                  <div className="text-xs text-gray-500 mt-1">Half Sweet</div>
                </th>
                <th className="py-4 px-6 border-b-2 border-r border-gray-200 font-semibold text-gray-700">
                  <div>少糖</div>
                  <div className="text-xs text-gray-500 mt-1">Light Sweet</div>
                </th>
                <th className="py-4 px-6 border-b-2 border-gray-200 font-semibold text-gray-700">
                  <div>标准糖</div>
                  <div className="text-xs text-gray-500 mt-1">Regular</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-r border-gray-200 bg-gray-50 font-medium">
                  <div>冷</div>
                  <div className="text-xs text-gray-500">Cold</div>
                </td>
                <td className="py-4 px-6 border-r border-gray-200 text-center font-medium">0</td>
                <td className="py-4 px-6 border-r border-gray-200 text-center font-medium">103</td>
                <td className="py-4 px-6 border-r border-gray-200 text-center font-medium">119</td>
                <td className="py-4 px-6 border-r border-gray-200 text-center font-medium">123</td>
                <td className="py-4 px-6 text-center font-medium">137</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 border-r border-gray-200 bg-gray-50 font-medium">
                  <div>热</div>
                  <div className="text-xs text-gray-500">Hot</div>
                </td>
                <td className="py-4 px-6 border-r border-gray-200 text-center font-medium">0</td>
                <td className="py-4 px-6 border-r border-gray-200 text-center font-medium">97</td>
                <td className="py-4 px-6 border-r border-gray-200 text-center font-medium">113</td>
                <td className="py-4 px-6 border-r border-gray-200 text-center font-medium">125</td>
                <td className="py-4 px-6 text-center font-medium">137</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};