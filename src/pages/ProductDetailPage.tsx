import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Heart, ShoppingCart, Plus, Minus, Star } from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import ProductCard from '../components/products/ProductCard';
import { useCart } from '../contexts/CartContext';
import products from '../data/products';
import { ProductTag } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Find product by ID
  const product = products.find(p => p.id === id);
  
  // If product not found, return error state
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
        <p className="mb-6">O produto que você está procurando não está disponível.</p>
        <Button 
          variant="primary"
          onClick={() => navigate('/products')}
        >
          Ver Todos os Produtos
        </Button>
      </div>
    );
  }
  
  // Get related products (same category, exclude current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  // Handlers
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
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
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb navigation */}
      <div className="flex items-center mb-6">
        <button 
          onClick={() => navigate('/products')}
          className="flex items-center text-gray-500 hover:text-green-500 transition-colors"
        >
          <ChevronLeft size={20} className="mr-1" />
          Voltar para Produtos
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={product.images[activeImageIndex]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-2">
              {product.images.map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                    index === activeImageIndex ? 'border-green-500' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - imagem ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div>
          <div className="flex flex-wrap gap-2 mb-2">
            {product.tags.map((tag, index) => (
              <div key={index}>{getTagBadge(tag)}</div>
            ))}
          </div>
          
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-gray-500 ml-2">(24 avaliações)</span>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-semibold mb-2">Informações Nutricionais</h3>
            <div className="grid grid-cols-5 gap-4 text-center">
              <div>
                <p className="text-gray-500 text-sm">Calorias</p>
                <p className="font-semibold">{product.nutritionalInfo.calories} kcal</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Proteínas</p>
                <p className="font-semibold">{product.nutritionalInfo.protein}g</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Carboidratos</p>
                <p className="font-semibold">{product.nutritionalInfo.carbs}g</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Gorduras</p>
                <p className="font-semibold">{product.nutritionalInfo.fat}g</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Fibras</p>
                <p className="font-semibold">{product.nutritionalInfo.fiber || 0}g</p>
              </div>
            </div>
          </div>
          
          <h3 className="font-semibold mb-2">Ingredientes</h3>
          <ul className="list-disc list-inside mb-6 grid grid-cols-2 gap-1">
            {product.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>
          
          <div className="border-t border-gray-200 pt-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <div className="text-3xl font-bold text-gray-900">
                {formatPrice(product.price)}
              </div>
              
              <div className="flex items-center border rounded-md">
                <button 
                  onClick={decrementQuantity}
                  className="px-3 py-2 text-gray-500 hover:bg-gray-100"
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 text-center min-w-[40px]">{quantity}</span>
                <button 
                  onClick={incrementQuantity}
                  className="px-3 py-2 text-gray-500 hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ShoppingCart size={20} />}
                fullWidth
                onClick={handleAddToCart}
              >
                Adicionar ao Carrinho
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                icon={<Heart size={20} />}
                className="sm:flex-none"
              >
                Favoritar
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;