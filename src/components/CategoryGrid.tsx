import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Category {
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  products: any[];
}

interface CategoryGridProps {
  categories: Category[];
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categories }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId: string) => {
    // Placeholder for navigation
    console.log(`Navigating to category: ${categoryId}`);
  };

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {categories.map((category) => (
        <button
          key={category.categoryId}
          onClick={() => handleCategoryClick(category.categoryId)}
          className="group flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="relative mb-3">
            <div className="absolute inset-0 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={category.categoryIcon}
              alt={category.categoryName}
              className="w-12 h-12 object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <span className="text-sm text-gray-700 text-center font-medium group-hover:text-[#4080ff] transition-colors duration-300">
            {category.categoryName}
          </span>
        </button>
      ))}
    </div>
  );
};

export default CategoryGrid;
