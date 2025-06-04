import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../types';
import { useCart } from '../../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="flex border rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Product Info */}
      <div className="flex-1 p-3">
        <div className="flex justify-between">
          <h3 className="font-medium text-gray-800 line-clamp-1">{product.name}</h3>
          <button 
            onClick={() => removeFromCart(product.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
        
        <p className="text-gray-500 text-sm line-clamp-1 mb-2">{product.shortDescription}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center border rounded-md">
            <button 
              onClick={handleDecrement}
              className="px-2 py-1 text-gray-500 hover:bg-gray-100"
            >
              <Minus size={14} />
            </button>
            <span className="px-2 py-1 text-center min-w-[30px]">{quantity}</span>
            <button 
              onClick={handleIncrement}
              className="px-2 py-1 text-gray-500 hover:bg-gray-100"
            >
              <Plus size={14} />
            </button>
          </div>
          
          <div className="text-right">
            <p className="font-medium text-gray-800">{formatPrice(product.price * quantity)}</p>
            <p className="text-xs text-gray-500">{formatPrice(product.price)} cada</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;