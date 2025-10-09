import React from 'react';

interface Category {
  name: string;
  count?: number;
}

interface DocumentCategoriesProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (cat: string) => void;
}

const DocumentCategories: React.FC<DocumentCategoriesProps> = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex gap-2 flex-wrap mb-4">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onCategoryChange(cat.name)}
          className={`px-4 py-2 rounded text-sm border ${
            activeCategory === cat.name
              ? 'bg-orange-100 text-orange-600 border-orange-200'
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
          }`}
        >
          {cat.name} {cat.count && `(${cat.count})`}
        </button>
      ))}
    </div>
  );
};

export default DocumentCategories;
