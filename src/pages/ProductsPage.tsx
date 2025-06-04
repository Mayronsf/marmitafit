import React, { useState, useEffect } from 'react';
import ProductFilter from '../components/products/ProductFilter';
import ProductCard from '../components/products/ProductCard';
import products from '../data/products';
import { Product, ProductCategory, ProductTag } from '../types';

const ProductsPage: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [filterOptions, setFilterOptions] = useState({
    categories: [] as ProductCategory[],
    tags: [] as ProductTag[],
    priceRange: [0, 50] as [number, number],
    calorieRange: [0, 600] as [number, number],
    sortBy: 'featured'
  });
  
  // Apply filters whenever filter options change
  useEffect(() => {
    let result = [...products];
    
    // Filter by categories
    if (filterOptions.categories.length > 0) {
      result = result.filter(product => 
        filterOptions.categories.includes(product.category)
      );
    }
    
    // Filter by tags
    if (filterOptions.tags.length > 0) {
      result = result.filter(product => 
        product.tags.some(tag => filterOptions.tags.includes(tag))
      );
    }
    
    // Filter by price range
    result = result.filter(product => 
      product.price >= filterOptions.priceRange[0] && 
      product.price <= filterOptions.priceRange[1]
    );
    
    // Filter by calorie range
    result = result.filter(product => 
      product.nutritionalInfo.calories >= filterOptions.calorieRange[0] && 
      product.nutritionalInfo.calories <= filterOptions.calorieRange[1]
    );
    
    // Sort products
    switch (filterOptions.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (a.tags.includes('new') ? -1 : 1));
        break;
      case 'calories-asc':
        result.sort((a, b) => a.nutritionalInfo.calories - b.nutritionalInfo.calories);
        break;
      case 'calories-desc':
        result.sort((a, b) => b.nutritionalInfo.calories - a.nutritionalInfo.calories);
        break;
      case 'featured':
      default:
        result.sort((a, b) => (a.featured ? -1 : 1));
        break;
    }
    
    setFilteredProducts(result);
  }, [filterOptions]);
  
  const handleFilterChange = (newFilters: any) => {
    setFilterOptions(newFilters);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Nossos Produtos</h1>
      
      <ProductFilter 
        onFilterChange={handleFilterChange}
        initialFilters={filterOptions}
        minPrice={0}
        maxPrice={50}
        minCalories={0}
        maxCalories={600}
      />
      
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">Nenhum produto encontrado com os filtros selecionados.</p>
          <p className="text-gray-500 mt-2">Tente ajustar seus filtros para ver mais opções.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;