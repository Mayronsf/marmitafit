import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import Button from '../ui/Button';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { cart, cartTotal } = useCart();

  // Handle click outside to close
  const drawerRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen, onClose]);
  
  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Format price
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      
      {/* Drawer */}
      <div 
        ref={drawerRef}
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Seu Carrinho</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 h-[calc(100vh-170px)]">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag size={64} className="text-gray-300 mb-4" />
              <p className="text-gray-500 mb-2">Seu carrinho está vazio</p>
              <p className="text-gray-400 text-sm mb-6">Adicione alguns produtos para começar</p>
              <Button 
                variant="primary" 
                onClick={onClose}
                size="sm"
              >
                Ver Produtos
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
          )}
        </div>
        
        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="border-t p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Subtotal:</span>
              <span className="text-xl font-semibold">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-gray-500 text-xs mb-4">Frete e impostos calculados no checkout</p>
            <div className="space-y-2">
              <Button 
                variant="primary" 
                fullWidth
                as={Link}
                to="/checkout"
                onClick={onClose}
              >
                Finalizar Compra
              </Button>
              <Button 
                variant="outline" 
                fullWidth
                onClick={onClose}
              >
                Continuar Comprando
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;