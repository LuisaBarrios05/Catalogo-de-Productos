import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Navbar = ({
  categories,
  onSearch,
  onFilterCategory,

}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    onFilterCategory(category);
  };

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-pink-50">
        <div className="text-2xl font-bold">🕯️Logo</div>
        <div className="flex items-center space-x-4 mx-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar velas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-3 py-2 border rounded-full"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 -translate-y-1/2"
            >
              <FaSearch />
            </button>
          </div>
        </div>
      </nav>

      {/* Filtros de Categoría */}
      <div className="flex justify-center space-x-4 p-4 bg-pink-100">
        {categories.length > 0 && categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryFilter(category)}
            className={`px-4 py-2 rounded-full ${selectedCategory === category.name
              ? 'bg-pink-500 text-white'
              : 'bg-pink-200'
              }`}
          >
            {category.name}
          </button>
        ))}
        <button
          onClick={() => handleCategoryFilter('')}
          className="px-4 py-2 rounded-full bg-pink-200"
        >
          Todas
        </button>
      </div>
    </div>
  );
};

export default Navbar;