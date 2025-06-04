import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { useCart } from '../../contexts/CartContext';
import CartDrawer from '../cart/CartDrawer';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-green-500 text-2xl font-bold">Marmita<span className="text-orange-500">Fit</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-green-500 font-medium">Home</Link>
            <Link to="/products" className="text-gray-700 hover:text-green-500 font-medium">Produtos</Link>
            <Link to="/plans" className="text-gray-700 hover:text-green-500 font-medium">Planos</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-500 font-medium">Sobre Nós</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/account">
              <Button variant="ghost" icon={<User size={20} />}>
                Conta
              </Button>
            </Link>
            <button 
              onClick={toggleCart}
              className="relative p-2 text-gray-700 hover:text-green-500 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleCart}
              className="relative p-2 mr-2 text-gray-700 hover:text-green-500 transition-colors"
            >
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-green-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
              <nav className="flex flex-col space-y-3">
                <Link to="/" className="text-gray-700 hover:text-green-500 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/products" className="text-gray-700 hover:text-green-500 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Produtos</Link>
                <Link to="/plans" className="text-gray-700 hover:text-green-500 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Planos</Link>
                <Link to="/about" className="text-gray-700 hover:text-green-500 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
                <Link to="/account" className="text-gray-700 hover:text-green-500 font-medium py-2" onClick={() => setIsMenuOpen(false)}>Minha Conta</Link>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Space placeholder to prevent content from being hidden under the fixed header */}
      <div className={`h-16 ${isScrolled ? 'md:h-16' : 'md:h-20'}`}></div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;