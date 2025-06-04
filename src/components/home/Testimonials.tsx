import React from 'react';
import { Star } from 'lucide-react';
import testimonials from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={`${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra por que centenas de pessoas confiam na MarmitaFit para sua alimentação diária.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-green-50 border border-green-100 rounded-lg p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Faça parte da família MarmitaFit</h3>
          <p className="text-gray-600 mb-6">
            Junte-se a milhares de clientes satisfeitos e transforme sua rotina alimentar com 
            praticidade e sabor.
          </p>
          <div className="inline-flex flex-wrap justify-center gap-2">
            <a 
              href="#" 
              className="bg-white text-green-600 hover:bg-green-600 hover:text-white border border-green-600 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Iniciar Agora
            </a>
            <a 
              href="#" 
              className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-3 rounded-md font-medium transition-colors"
            >
              Ver Avaliações
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;