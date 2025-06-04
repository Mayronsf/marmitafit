import { Product, ProductCategory, ProductTag } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Salmão Teriyaki Power',
    description: 'Filé de salmão premium grelhado com molho teriyaki caseiro, acompanhado de mix de legumes ao vapor e arroz integral. Rico em ômega-3 e proteínas de alta qualidade para uma refeição completa e nutritiva.',
    shortDescription: 'Salmão grelhado com teriyaki e arroz integral',
    price: 32.90,
    images: [
      'https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://feed.continente.pt/media/a0glr20i/salma-o-grelhado-com-molho-teriyaki-0079.jpg'
    ],
    category: 'protein',
    tags: ['bestseller', 'high-protein'],
    nutritionalInfo: {
      calories: 420,
      protein: 32,
      carbs: 35,
      fat: 18,
      fiber: 5
    },
    ingredients: ['Filé de salmão', 'Molho teriyaki', 'Arroz integral', 'Brócolis', 'Cenoura', 'Abobrinha', 'Azeite extra-virgem', 'Gengibre', 'Gergelim'],
    featured: true,
    inStock: true
  },
  {
    id: '2',
    name: 'Veggie Protein Bowl',
    description: 'Bowl vegetariano rico em proteínas com grão-de-bico, tofu defumado, quinoa, homus, legumes grelhados e molho tahine. Oferece equilíbrio perfeito entre sabor e nutrição, ideal para quem busca uma refeição vegetariana completa.',
    shortDescription: 'Bowl vegetariano com grão-de-bico, tofu e quinoa',
    price: 28.90,
    images: [
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/764925/pexels-photo-764925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'vegetarian',
    tags: ['high-protein', 'dairy-free'],
    nutritionalInfo: {
      calories: 380,
      protein: 22,
      carbs: 48,
      fat: 12,
      fiber: 8
    },
    ingredients: ['Grão-de-bico', 'Tofu defumado', 'Quinoa', 'Homus', 'Abobrinha grelhada', 'Berinjela', 'Pimentão', 'Tahine', 'Limão', 'Azeite'],
    featured: true,
    inStock: true
  },
  {
    id: '3',
    name: 'Frango Mediterrâneo Low Carb',
    description: 'Peito de frango marinado em ervas mediterrâneas, acompanhado de ratatouille de legumes e purê de couve-flor. Uma opção deliciosa e leve para quem busca reduzir o consumo de carboidratos sem abrir mão do sabor.',
    shortDescription: 'Frango com ervas e ratatouille de legumes',
    price: 26.90,
    images: [
      'https://www.mundoboaforma.com.br/wp-content/uploads/2021/05/frango-com-legumes.jpg',
      'https://fricassedefrango.com.br/wp-content/uploads/2024/12/receita-de-frango-low-carb.jpg'
    ],
    category: 'low-carb',
    tags: ['keto-friendly', 'gluten-free'],
    nutritionalInfo: {
      calories: 320,
      protein: 38,
      carbs: 12,
      fat: 14,
      fiber: 6
    },
    ingredients: ['Peito de frango', 'Abobrinha', 'Berinjela', 'Pimentão', 'Tomate', 'Couve-flor', 'Alho', 'Azeite de oliva', 'Ervas mediterrâneas', 'Sal marinho'],
    featured: false,
    inStock: true
  },
  {
    id: '4',
    name: 'Bowl Detox Verde',
    description: 'Bowl detox repleto de vegetais verdes, proteína de ervilha, abacate, sementes e molho de limão com ervas. Ideal para desintoxicar o organismo e fornecer nutrientes essenciais para o bem-estar diário.',
    shortDescription: 'Mix de vegetais verdes com proteína vegetal',
    price: 24.90,
    images: [
      'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://litoralmania.com.br/wp-content/uploads/2024/09/shutterstock_1310133010-1-1024x683-1.jpg'
    ],
    category: 'detox',
    tags: ['vegan', 'gluten-free', 'sugar-free'],
    nutritionalInfo: {
      calories: 290,
      protein: 18,
      carbs: 24,
      fat: 16,
      fiber: 10
    },
    ingredients: ['Couve', 'Espinafre', 'Brócolis', 'Proteína de ervilha', 'Abacate', 'Pepino', 'Sementes de abóbora', 'Sementes de girassol', 'Limão', 'Ervas frescas'],
    featured: false,
    inStock: true
  },
  {
    id: '5',
    name: 'Strogonoff Fit de Frango',
    description: 'Versão saudável do clássico strogonoff, feito com peito de frango, cogumelos, iogurte natural (sem creme de leite) e arroz integral. Sabor tradicional com menos calorias e gorduras saturadas.',
    shortDescription: 'Strogonoff leve com iogurte e arroz integral',
    price: 25.90,
    images: [
      'https://www.receiteria.com.br/wp-content/uploads/strogonoff-de-frango-fit.jpg',
      'https://cdn.oceanserver.com.br/lojas/naturallis/uploads_produto/naturallis-33-60f99cedc4653.jpg'
    ],
    category: 'protein',
    tags: ['low-sodium', 'sugar-free'],
    nutritionalInfo: {
      calories: 360,
      protein: 34,
      carbs: 42,
      fat: 8,
      fiber: 4
    },
    ingredients: ['Peito de frango', 'Cogumelos paris', 'Cebola', 'Alho', 'Iogurte natural', 'Mostarda', 'Arroz integral', 'Salsinha', 'Páprica defumada'],
    featured: true,
    inStock: true
  },
  {
    id: '6',
    name: 'Moqueca Vegana',
    description: 'Moqueca vegana com palmito, banana da terra, legumes, leite de coco e azeite de dendê, acompanhada de arroz integral. Sabores autênticos da culinária brasileira em uma versão totalmente vegetal.',
    shortDescription: 'Moqueca de palmito e banana da terra com leite de coco',
    price: 27.90,
    images: [
      'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'vegan',
    tags: ['new', 'dairy-free'],
    nutritionalInfo: {
      calories: 340,
      protein: 12,
      carbs: 46,
      fat: 16,
      fiber: 9
    },
    ingredients: ['Palmito', 'Banana da terra', 'Pimentão', 'Tomate', 'Cebola', 'Alho', 'Leite de coco', 'Azeite de dendê', 'Coentro', 'Arroz integral'],
    featured: false,
    inStock: true
  },
  {
    id: '7',
    name: 'Omelete Proteico',
    description: 'Omelete recheado com peito de peru, queijo cottage, espinafre e tomate cereja, acompanhado de mix de folhas verdes. Rico em proteínas e baixo em carboidratos, ideal para o café da manhã ou almoço leve.',
    shortDescription: 'Omelete com peito de peru, queijo cottage e vegetais',
    price: 22.90,
    images: [
      'https://img.cybercook.com.br/receitas/105/omelete-classica-1.jpeg',
      'https://receitasmondial.com.br/wp-content/uploads/2024/09/omelete-cremoso-de-palmito-mondial.jpg'
    ],
    category: 'low-carb',
    tags: ['high-protein', 'keto-friendly', 'gluten-free'],
    nutritionalInfo: {
      calories: 280,
      protein: 32,
      carbs: 6,
      fat: 16,
      fiber: 2
    },
    ingredients: ['Ovos', 'Peito de peru', 'Queijo cottage', 'Espinafre', 'Tomate cereja', 'Azeite de oliva', 'Mix de folhas verdes', 'Ervas frescas'],
    featured: false,
    inStock: true
  },
  {
    id: '8',
    name: 'Risoto de Quinoa com Legumes',
    description: 'Risoto preparado com quinoa em vez de arroz, enriquecido com legumes frescos, ervilhas, aspargos e finalizado com queijo parmesão. Uma alternativa nutritiva ao risoto tradicional, rica em proteínas vegetais.',
    shortDescription: 'Risoto de quinoa com legumes e queijo parmesão',
    price: 26.90,
    images: [
      'https://canaldareceita.com.br/wp-content/uploads/2025/03/Risoto-de-Quinoa-com-Legumes-Assados-1200x900.jpg',
      'https://www.oitedi.com.br/_next/image?url=https%3A%2F%2Ftedi-production.s3.amazonaws.com%2Fcooking_recipes%2Ffood_description%2F469d0c1e83c47ee51f22539ff0e74acabf3e2a80.png&w=1080&q=70'
    ],
    category: 'vegetarian',
    tags: ['high-protein', 'gluten-free'],
    nutritionalInfo: {
      calories: 350,
      protein: 16,
      carbs: 42,
      fat: 14,
      fiber: 7
    },
    ingredients: ['Quinoa', 'Abobrinha', 'Cenoura', 'Ervilhas', 'Aspargos', 'Cebola', 'Alho', 'Caldo vegetal', 'Queijo parmesão', 'Vinho branco', 'Salsinha'],
    featured: true,
    inStock: true
  }
];

export default products;