import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Marmita<span className="text-green-500">Fit</span></h3>
            <p className="text-gray-600 mb-4">
              Alimentação saudável e balanceada para seu dia a dia, com sabor e praticidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-green-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-600 hover:text-green-500">Produtos</Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-600 hover:text-green-500">Planos de Assinatura</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-green-500">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-green-500">Blog</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-green-500">Perguntas Frequentes</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-green-500 mt-1 mr-2" />
                <span className="text-gray-600">Av. Paulista, 1000, São Paulo - SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-green-500 mr-2" />
                <span className="text-gray-600">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-green-500 mr-2" />
                <span className="text-gray-600">contato@marmitafit.com.br</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Inscreva-se para receber dicas de alimentação e ofertas exclusivas.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
              />
              <button 
                type="submit" 
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} MarmitaFit. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-600 hover:text-green-500 text-sm">
                Termos de Uso
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-green-500 text-sm">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;