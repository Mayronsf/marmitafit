import React from 'react';
import { Utensils, Truck, ThumbsUp } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Como Funciona</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nosso processo é simples e prático, projetado para facilitar seu dia a dia com alimentação saudável.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Utensils size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Escolha seu plano</h3>
            <p className="text-gray-600">
              Selecione entre nossos planos semanais, quinzenais ou mensais, de acordo com suas necessidades.
              Personalize com suas preferências alimentares.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Receba em casa</h3>
            <p className="text-gray-600">
              Entregamos suas marmitas nos dias combinados, sempre frescas e bem acondicionadas, prontas para 
              serem refrigeradas ou consumidas.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ThumbsUp size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Aproveite</h3>
            <p className="text-gray-600">
              Aqueça sua refeição em apenas alguns minutos e desfrute de uma alimentação saudável, saborosa 
              e balanceada sem esforço.
            </p>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Economize tempo e mantenha a saúde</h3>
              <p className="text-gray-600 mb-4">
                Com a MarmitaFit, você economiza o tempo de planejar cardápios, fazer compras 
                e cozinhar, sem abrir mão de uma alimentação saudável e equilibrada.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                  <span>Mais de 50 opções no cardápio rotativo</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                  <span>Ingredientes frescos e selecionados</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                  <span>Embalagens sustentáveis e práticas</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-green-100 text-green-600 p-1 rounded-full mr-2">✓</span>
                  <span>Nutricionistas à disposição para dúvidas</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <img 
                src="https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Pessoa feliz com marmita saudável" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;