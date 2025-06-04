import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product, ProductTag } from '../../types';
import Card, { CardImage, CardContent, CardFooter } from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useCart } from '../../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };
  
  const getTagBadge = (tag: ProductTag) => {
    switch (tag) {
      case 'bestseller':
        return <Badge variant="orange">Mais Vendido</Badge>;
      case 'new':
        return <Badge variant="blue">Novo</Badge>;
      case 'sugar-free':
        return <Badge variant="green">Sem Açúcar</Badge>;
      case 'dairy-free':
        return <Badge variant="green">Sem Lactose</Badge>;
      case 'gluten-free':
        return <Badge variant="green">Sem Glúten</Badge>;
      case 'low-sodium':
        return <Badge variant="green">Baixo Sódio</Badge>;
      case 'keto-friendly':
        return <Badge variant="green">Keto</Badge>;
      case 'high-protein':
        return <Badge variant="blue">Alto Proteico</Badge>;
      default:
        return null;
    }
  };
  
  return (
    <Card className="h-full flex flex-col transform transition-transform duration-300 hover:-translate-y-1">
      <Link to={`/products/${product.id}`} className="flex-grow">
        <div className="relative">
          <CardImage 
            src={product.images[0]} 
            alt={product.name} 
            aspectRatio="square"
          />
          <div className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-100">
            <Heart size={18} className="text-gray-400 hover:text-red-500 transition-colors" />
          </div>
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag, index) => (
              <div key={index}>{getTagBadge(tag)}</div>
            ))}
          </div>
        </div>
        
        <CardContent className="flex-grow">
          <div className="mb-1 flex items-center space-x-1">
            <Badge variant="gray">
              {product.category === 'low-carb' && 'Low Carb'}
              {product.category === 'vegetarian' && 'Vegetariano'}
              {product.category === 'vegan' && 'Vegano'}
              {product.category === 'protein' && 'Rico em Proteína'}
              {product.category === 'detox' && 'Detox'}
              {product.category === 'gluten-free' && 'Sem Glúten'}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium text-green-600">{product.nutritionalInfo.calories}</span>
              <span className="ml-1">kcal</span>
            </div>
          </div>
          
          <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-2 line-clamp-2">{product.shortDescription}</p>
          
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="text-center">
              <span className="text-xs text-gray-500 block">Proteína</span>
              <span className="font-medium text-sm">{product.nutritionalInfo.protein}g</span>
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-500 block">Carbos</span>
              <span className="font-medium text-sm">{product.nutritionalInfo.carbs}g</span>
            </div>
            <div className="text-center">
              <span className="text-xs text-gray-500 block">Gorduras</span>
              <span className="font-medium text-sm">{product.nutritionalInfo.fat}g</span>
            </div>
          </div>
        </CardContent>
      </Link>
      
      <CardFooter className="flex items-center justify-between">
        <div className="font-medium text-gray-900 text-lg">
          {formatPrice(product.price)}
        </div>
        <Button 
          size="sm" 
          variant="primary"
          icon={<ShoppingCart size={16} />}
          onClick={() => addToCart(product, 1)}
        >
          Adicionar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;