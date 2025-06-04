import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-green-800/90 mix-blend-multiply" />
        <img 
          src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Healthy meal preparation" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Alimentação saudável com sabor e praticidade
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-lg">
            Marmitas nutritivas, balanceadas e deliciosas entregues na sua porta. 
            Seu caminho mais fácil para uma vida saudável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              as={Link} 
              to="/plans" 
              variant="primary" 
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
              className="bg-white text-green-600 hover:bg-gray-100"
            >
              Montar Meu Plano
            </Button>
            <Button 
              as={Link} 
              to="/products" 
              variant="outline" 
              size="lg"
              className="text-white border-white hover:bg-white/10"
            >
              Ver Cardápio
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-white text-2xl font-bold">100%</p>
              <p className="text-white/80 text-sm">Natural</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-white text-2xl font-bold">7 dias</p>
              <p className="text-white/80 text-sm">por semana</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <p className="text-white text-2xl font-bold">15%</p>
              <p className="text-white/80 text-sm">de desconto</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;