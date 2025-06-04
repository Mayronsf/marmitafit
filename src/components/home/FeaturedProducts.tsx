import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from '../products/ProductCard';
import products from '../../data/products';

const FeaturedProducts: React.FC = () => {
  // Get featured products or first 4 if none are marked featured
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Destaques da Semana</h2>
          <Link 
            to="/products" 
            className="flex items-center text-green-500 hover:text-green-600 font-medium"
          >
            Ver todos
            <ChevronRight size={20} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;