import { SubscriptionPlan } from '../types';

const plans: SubscriptionPlan[] = [
  {
    id: '1',
    name: 'Plano Semanal',
    description: 'Receba 7 marmitas saudáveis por semana, uma para cada dia, com sabores variados e balanceados.',
    meals: 7,
    pricePerMeal: 24.90,
    frequency: 'weekly',
    active: true
  },
  {
    id: '2',
    name: 'Plano Quinzenal',
    description: 'Receba 14 marmitas saudáveis a cada duas semanas, com economia de 10% em cada refeição.',
    meals: 14,
    pricePerMeal: 22.41, // 10% off
    frequency: 'biweekly',
    active: true
  },
  {
    id: '3',
    name: 'Plano Mensal',
    description: 'Receba 30 marmitas saudáveis por mês, com economia de 15% em cada refeição e frete grátis.',
    meals: 30,
    pricePerMeal: 21.17, // 15% off
    frequency: 'monthly',
    active: true
  }
];

export default plans;