import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-9xl font-bold text-gray-200">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Página não encontrada</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        A página que você está procurando parece não existir. Pode ter sido movida ou excluída.
      </p>
      <div className="flex justify-center space-x-4">
        <Button 
          variant="primary"
          onClick={() => navigate('/')}
        >
          Voltar ao Início
        </Button>
        <Button 
          variant="outline"
          onClick={() => navigate('/products')}
        >
          Ver Produtos
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;