import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'low-carb',
    name: 'Low Carb',
    description: 'Refeições com baixo teor de carboidratos',
    image: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'vegetarian',
    name: 'Vegetariano',
    description: 'Pratos sem carne com proteínas vegetais',
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'protein',
    name: 'Rico em Proteína',
    description: 'Refeições com alto teor proteico',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 'detox',
    name: 'Detox',
    description: 'Opções leves e desintoxicantes',
    image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const CategoryList: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorias Populares</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossas opções para diferentes preferências e necessidades alimentares.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group"
            >
              <div className="rounded-lg overflow-hidden shadow-md bg-white border border-gray-100 transition-transform transform group-hover:-translate-y-1">
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm text-white/80">{category.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;