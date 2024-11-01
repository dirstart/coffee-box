import React from 'react';

interface NutritionInfo {
  label: string;
  value: string;
}

interface NutritionTableProps {
  title?: string;
  unit?: string;
}

export const NutritionTable: React.FC<NutritionTableProps> = ({
  title = "营养成分表",
  unit = "/100ml"
}) => {
  const leftColumns: NutritionInfo[] = [
    { label: "热量", value: "≈0 kcal" },
    { label: "脂肪", value: "≈0 g" },
    { label: "咖啡因", value: "≈20.8 mg" },
  ];

  const rightColumns: NutritionInfo[] = [
    { label: "蛋白质", value: "≈0.042 g" },
    { label: "碳水化合物", value: "≈0.6 g" },
    { label: "钠", value: "≈0 mg" },
    { label: "钙", value: "≈0 mg" },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">{title}</h2>
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-3 border-b border-r border-gray-200 text-blue-800 font-medium w-1/4">成分</th>
              <th className="p-3 border-b border-r border-gray-200 text-blue-800 font-medium w-1/4">含量{unit}</th>
              <th className="p-3 border-b border-r border-gray-200 text-blue-800 font-medium w-1/4">成分</th>
              <th className="p-3 border-b border-gray-200 text-blue-800 font-medium w-1/4">含量{unit}</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {Array.from({ length: Math.max(leftColumns.length, rightColumns.length) }).map((_, index) => (
              <tr key={index} className={index > 0 ? 'border-t border-gray-200' : ''}>
                {leftColumns[index] ? (
                  <>
                    <td className="p-3 border-r border-gray-200 font-medium">{leftColumns[index].label}</td>
                    <td className="p-3 border-r border-gray-200 text-center">{leftColumns[index].value}</td>
                  </>
                ) : (
                  <>
                    <td className="p-3 border-r border-gray-200"></td>
                    <td className="p-3 border-r border-gray-200"></td>
                  </>
                )}
                {rightColumns[index] ? (
                  <>
                    <td className="p-3 border-r border-gray-200 font-medium">{rightColumns[index].label}</td>
                    <td className="p-3 text-center">{rightColumns[index].value}</td>
                  </>
                ) : (
                  <>
                    <td className="p-3 border-r border-gray-200"></td>
                    <td className="p-3"></td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={4} className="p-3 bg-blue-50 border-t border-gray-200 text-blue-800 font-medium">
                反式脂肪酸 = 0 g
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};