import React, { useState } from 'react';
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react';
import { ProductCategory, ProductTag } from '../../types';
import Button from '../ui/Button';

interface FilterOptions {
  categories: ProductCategory[];
  tags: ProductTag[];
  priceRange: [number, number];
  calorieRange: [number, number];
  sortBy: string;
}

interface ProductFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  initialFilters?: Partial<FilterOptions>;
  minPrice?: number;
  maxPrice?: number;
  minCalories?: number;
  maxCalories?: number;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  onFilterChange,
  initialFilters,
  minPrice = 0,
  maxPrice = 100,
  minCalories = 0,
  maxCalories = 1000
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    categories: initialFilters?.categories || [],
    tags: initialFilters?.tags || [],
    priceRange: initialFilters?.priceRange || [minPrice, maxPrice],
    calorieRange: initialFilters?.calorieRange || [minCalories, maxCalories],
    sortBy: initialFilters?.sortBy || 'featured'
  });

  const categoryOptions: Array<{ value: ProductCategory; label: string }> = [
    { value: 'low-carb', label: 'Low Carb' },
    { value: 'vegetarian', label: 'Vegetariano' },
    { value: 'vegan', label: 'Vegano' },
    { value: 'protein', label: 'Rico em Proteína' },
    { value: 'detox', label: 'Detox' },
    { value: 'gluten-free', label: 'Sem Glúten' }
  ];

  const tagOptions: Array<{ value: ProductTag; label: string }> = [
    { value: 'bestseller', label: 'Mais Vendidos' },
    { value: 'new', label: 'Novidades' },
    { value: 'sugar-free', label: 'Sem Açúcar' },
    { value: 'dairy-free', label: 'Sem Lactose' },
    { value: 'gluten-free', label: 'Sem Glúten' },
    { value: 'low-sodium', label: 'Baixo Sódio' },
    { value: 'keto-friendly', label: 'Keto' },
    { value: 'high-protein', label: 'Alto Proteico' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Destaques' },
    { value: 'price-asc', label: 'Menor Preço' },
    { value: 'price-desc', label: 'Maior Preço' },
    { value: 'newest', label: 'Mais Recentes' },
    { value: 'calories-asc', label: 'Menos Calorias' },
    { value: 'calories-desc', label: 'Mais Calorias' }
  ];

  const handleCategoryChange = (category: ProductCategory) => {
    const updatedCategories = filters.categories.includes(category)
      ? filters.categories.filter(c => c !== category)
      : [...filters.categories, category];
    
    const updatedFilters = { ...filters, categories: updatedCategories };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleTagChange = (tag: ProductTag) => {
    const updatedTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    
    const updatedFilters = { ...filters, tags: updatedTags };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedFilters = { ...filters, sortBy: e.target.value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    const updatedRange = [...filters.priceRange] as [number, number];
    updatedRange[index] = value;
    
    const updatedFilters = { ...filters, priceRange: updatedRange };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const handleCalorieChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = parseInt(e.target.value);
    const updatedRange = [...filters.calorieRange] as [number, number];
    updatedRange[index] = value;
    
    const updatedFilters = { ...filters, calorieRange: updatedRange };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      categories: [],
      tags: [],
      priceRange: [minPrice, maxPrice],
      calorieRange: [minCalories, maxCalories],
      sortBy: 'featured'
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.categories.length) count += 1;
    if (filters.tags.length) count += 1;
    if (filters.priceRange[0] > minPrice || filters.priceRange[1] < maxPrice) count += 1;
    if (filters.calorieRange[0] > minCalories || filters.calorieRange[1] < maxCalories) count += 1;
    return count;
  };

  return (
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm" 
            icon={<SlidersHorizontal size={16} />}
            onClick={toggleFilters}
          >
            Filtros
            {getActiveFilterCount() > 0 && (
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                {getActiveFilterCount()}
              </span>
            )}
          </Button>
          
          {getActiveFilterCount() > 0 && (
            <Button 
              variant="ghost" 
              size="sm" 
              icon={<X size={16} />}
              onClick={resetFilters}
            >
              Limpar Filtros
            </Button>
          )}
        </div>
        
        <div className="flex items-center">
          <label htmlFor="sort" className="text-sm text-gray-500 mr-2">Ordenar por:</label>
          <select
            id="sort"
            value={filters.sortBy}
            onChange={handleSortChange}
            className="border-gray-300 rounded-md text-sm focus:ring-green-500 focus:border-green-500"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {isOpen && (
        <div className="p-4 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Categories */}
            <div>
              <h3 className="font-medium mb-2 flex items-center">
                Categorias
                <ChevronDown size={16} className="ml-1" />
              </h3>
              <div className="space-y-1">
                {categoryOptions.map(category => (
                  <label key={category.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category.value)}
                      onChange={() => handleCategoryChange(category.value)}
                      className="rounded text-green-500 focus:ring-green-500 mr-2"
                    />
                    <span className="text-sm">{category.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Tags */}
            <div>
              <h3 className="font-medium mb-2 flex items-center">
                Características
                <ChevronDown size={16} className="ml-1" />
              </h3>
              <div className="space-y-1">
                {tagOptions.map(tag => (
                  <label key={tag.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.tags.includes(tag.value)}
                      onChange={() => handleTagChange(tag.value)}
                      className="rounded text-green-500 focus:ring-green-500 mr-2"
                    />
                    <span className="text-sm">{tag.label}</span>
                  </label>
                ))}
              </div>
            </div>
            
            {/* Price Range */}
            <div>
              <h3 className="font-medium mb-2 flex items-center">
                Faixa de Preço
                <ChevronDown size={16} className="ml-1" />
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>R$ {filters.priceRange[0]}</span>
                  <span>R$ {filters.priceRange[1]}</span>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceChange(e, 0)}
                    className="w-1/2"
                  />
                  <input
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange(e, 1)}
                    className="w-1/2"
                  />
                </div>
              </div>
            </div>
            
            {/* Calorie Range */}
            <div>
              <h3 className="font-medium mb-2 flex items-center">
                Faixa de Calorias
                <ChevronDown size={16} className="ml-1" />
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{filters.calorieRange[0]} kcal</span>
                  <span>{filters.calorieRange[1]} kcal</span>
                </div>
                <div className="flex space-x-2">
                  <input
                    type="range"
                    min={minCalories}
                    max={maxCalories}
                    value={filters.calorieRange[0]}
                    onChange={(e) => handleCalorieChange(e, 0)}
                    className="w-1/2"
                  />
                  <input
                    type="range"
                    min={minCalories}
                    max={maxCalories}
                    value={filters.calorieRange[1]}
                    onChange={(e) => handleCalorieChange(e, 1)}
                    className="w-1/2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;