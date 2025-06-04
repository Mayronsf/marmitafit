export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  images: string[];
  category: ProductCategory;
  tags: ProductTag[];
  nutritionalInfo: NutritionalInfo;
  ingredients: string[];
  featured: boolean;
  inStock: boolean;
}

export interface NutritionalInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
}

export type ProductCategory = 
  | 'low-carb'
  | 'vegetarian'
  | 'vegan'
  | 'protein'
  | 'detox'
  | 'gluten-free';

export type ProductTag = 
  | 'bestseller'
  | 'new'
  | 'sugar-free'
  | 'dairy-free'
  | 'gluten-free'
  | 'low-sodium'
  | 'keto-friendly'
  | 'high-protein';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  addresses: Address[];
  dietaryPreferences?: ProductTag[];
  subscriptionPlan?: SubscriptionPlan;
}

export interface Address {
  id: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  isDefault: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  meals: number;
  pricePerMeal: number;
  frequency: 'weekly' | 'biweekly' | 'monthly';
  active: boolean;
  nextDelivery?: Date;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  address: Address;
  paymentMethod: string;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  text: string;
  rating: number;
}