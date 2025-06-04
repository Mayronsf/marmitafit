import React, { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import plans from '../data/plans';
import { SubscriptionPlan } from '../types';

const PlansPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };
  
  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };
  
  const calculateTotalPrice = (plan: SubscriptionPlan) => {
    return plan.pricePerMeal * plan.meals;
  };
  
  const calculateSavings = (plan: SubscriptionPlan) => {
    const regularPricePerMeal = 24.90; // Standard price per meal
    const regularTotal = regularPricePerMeal * plan.meals;
    const planTotal = plan.pricePerMeal * plan.meals;
    return regularTotal - planTotal;
  };
  
  const calculateSavingsPercentage = (plan: SubscriptionPlan) => {
    const regularPricePerMeal = 24.90; // Standard price per meal
    return ((regularPricePerMeal - plan.pricePerMeal) / regularPricePerMeal) * 100;
  };
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Planos de Assinatura</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Economize tempo e dinheiro com nossos planos de assinatura. 
          Receba marmitas saudáveis e deliciosas diretamente na sua porta.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map(plan => (
          <div 
            key={plan.id}
            className={`border rounded-xl overflow-hidden transition-all duration-200 ${
              selectedPlan === plan.id 
                ? 'border-green-500 shadow-lg scale-105 bg-white' 
                : 'border-gray-200 hover:border-green-200 hover:shadow bg-gray-50 hover:bg-white'
            }`}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">{formatPrice(plan.pricePerMeal)}</span>
                <span className="text-gray-500"> / por refeição</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Total de {plan.meals} refeições {plan.frequency === 'weekly' ? 'por semana' : plan.frequency === 'biweekly' ? 'a cada duas semanas' : 'por mês'}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Economia de {calculateSavingsPercentage(plan).toFixed(0)}% por refeição</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Você economiza {formatPrice(calculateSavings(plan))} no total</span>
                </li>
                {plan.frequency === 'monthly' && (
                  <li className="flex items-start">
                    <CheckCircle2 size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Frete grátis em todas as entregas</span>
                  </li>
                )}
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Personalização de cardápio</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 size={20} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span>Cancele ou pause a qualquer momento</span>
                </li>
              </ul>
              
              <div className="flex flex-col space-y-2">
                <Button 
                  variant={selectedPlan === plan.id ? 'primary' : 'outline'}
                  fullWidth
                  size="lg"
                  onClick={() => handleSelectPlan(plan.id)}
                >
                  {selectedPlan === plan.id ? 'Plano Selecionado' : 'Selecionar Plano'}
                </Button>
                
                <p className="text-center text-gray-500 text-sm">
                  Total: {formatPrice(calculateTotalPrice(plan))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedPlan && (
        <div className="bg-green-50 border border-green-100 rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Personalize seu plano</h2>
          <p className="text-center text-gray-600 mb-6">
            Selecione suas preferências alimentares e restrições para montarmos um cardápio perfeito para você.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Preferências Alimentares</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Low Carb', 'Rico em Proteína', 'Vegetariano', 'Vegano', 'Detox', 'Tradicional'].map(pref => (
                  <label key={pref} className="flex items-center">
                    <input type="checkbox" className="rounded text-green-500 focus:ring-green-500 mr-2" />
                    <span>{pref}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Restrições Alimentares</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {['Sem Glúten', 'Sem Lactose', 'Sem Açúcar', 'Baixo Sódio', 'Sem Frutos do Mar', 'Sem Amendoim'].map(rest => (
                  <label key={rest} className="flex items-center">
                    <input type="checkbox" className="rounded text-green-500 focus:ring-green-500 mr-2" />
                    <span>{rest}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Frequência de Entrega</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {['Uma vez por semana', 'Duas vezes por semana', 'Três vezes por semana'].map(freq => (
                  <label key={freq} className="flex items-center">
                    <input type="radio" name="frequency" className="text-green-500 focus:ring-green-500 mr-2" />
                    <span>{freq}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                variant="primary" 
                size="lg"
                fullWidth
                icon={<ArrowRight size={20} />}
                iconPosition="right"
              >
                Continuar para o Checkout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlansPage;