import React, { useState } from 'react';
import { User, Package, CreditCard, Heart, LogOut, Settings } from 'lucide-react';
import Button from '../components/ui/Button';

type TabType = 'profile' | 'orders' | 'subscriptions' | 'favorites' | 'settings';

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  
  // Mock user data
  const user = {
    name: 'Maria Silva',
    email: 'maria.silva@exemplo.com',
    phone: '(11) 99999-9999',
    addresses: [
      {
        id: '1',
        street: 'Av. Paulista',
        number: '1000',
        complement: 'Apto 123',
        neighborhood: 'Bela Vista',
        city: 'São Paulo',
        state: 'SP',
        zipCode: '01310-100',
        isDefault: true
      }
    ],
    orders: [
      {
        id: 'MF123456',
        date: '15/05/2023',
        total: 129.70,
        status: 'delivered',
        items: 4
      },
      {
        id: 'MF123457',
        date: '28/06/2023',
        total: 75.80,
        status: 'delivered',
        items: 2
      },
      {
        id: 'MF123458',
        date: '10/07/2023',
        total: 174.50,
        status: 'processing',
        items: 5
      }
    ],
    subscription: {
      plan: 'Plano Semanal',
      nextDelivery: '22/07/2023',
      status: 'active'
    }
  };
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };
  
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'delivered':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Entregue</span>;
      case 'processing':
        return <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Em Processamento</span>;
      case 'shipped':
        return <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">Enviado</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">{status}</span>;
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10">Minha Conta</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 bg-green-50 border-b border-green-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                  <span className="text-xl font-bold">{user.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => setActiveTab('profile')}
                    className={`flex items-center w-full px-4 py-2 rounded transition-colors ${
                      activeTab === 'profile' 
                        ? 'bg-green-100 text-green-700' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <User size={20} className="mr-3" />
                    <span>Meu Perfil</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('orders')}
                    className={`flex items-center w-full px-4 py-2 rounded transition-colors ${
                      activeTab === 'orders' 
                        ? 'bg-green-100 text-green-700' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Package size={20} className="mr-3" />
                    <span>Meus Pedidos</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('subscriptions')}
                    className={`flex items-center w-full px-4 py-2 rounded transition-colors ${
                      activeTab === 'subscriptions' 
                        ? 'bg-green-100 text-green-700' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <CreditCard size={20} className="mr-3" />
                    <span>Assinatura</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('favorites')}
                    className={`flex items-center w-full px-4 py-2 rounded transition-colors ${
                      activeTab === 'favorites' 
                        ? 'bg-green-100 text-green-700' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Heart size={20} className="mr-3" />
                    <span>Favoritos</span>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`flex items-center w-full px-4 py-2 rounded transition-colors ${
                      activeTab === 'settings' 
                        ? 'bg-green-100 text-green-700' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <Settings size={20} className="mr-3" />
                    <span>Configurações</span>
                  </button>
                </li>
                <li className="pt-2 border-t mt-2">
                  <button 
                    className="flex items-center w-full px-4 py-2 rounded text-red-600 hover:bg-red-50"
                  >
                    <LogOut size={20} className="mr-3" />
                    <span>Sair</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:col-span-3 bg-white rounded-lg shadow p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Informações Pessoais</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="name"
                      value={user.name}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={user.email}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      value={user.phone}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-gray-700 mb-1">Senha</label>
                    <input
                      type="password"
                      id="password"
                      value="********"
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2 mt-8">Endereços</h3>
                  
                  {user.addresses.map(address => (
                    <div key={address.id} className="border rounded-lg p-4 mb-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-medium">{address.street}, {address.number}</p>
                          {address.complement && <p className="text-gray-600">{address.complement}</p>}
                          <p className="text-gray-600">{address.neighborhood}</p>
                          <p className="text-gray-600">{address.city} - {address.state}, {address.zipCode}</p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800">Editar</button>
                          <button className="text-red-600 hover:text-red-800">Remover</button>
                        </div>
                      </div>
                      
                      {address.isDefault && (
                        <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full inline-block">
                          Endereço padrão
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <Button variant="outline" size="sm" className="mt-2">
                    Adicionar Novo Endereço
                  </Button>
                </div>
                
                <div className="pt-6 border-t">
                  <Button variant="primary">
                    Salvar Alterações
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Meus Pedidos</h2>
              
              {user.orders.length === 0 ? (
                <div className="text-center py-8">
                  <Package size={48} className="text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">Você ainda não realizou nenhum pedido.</p>
                  <Button variant="primary">Fazer Meu Primeiro Pedido</Button>
                </div>
              ) : (
                <div className="space-y-6">
                  {user.orders.map(order => (
                    <div key={order.id} className="border rounded-lg overflow-hidden">
                      <div className="bg-gray-50 p-4 border-b flex justify-between items-center">
                        <div>
                          <p className="font-medium">Pedido #{order.id}</p>
                          <p className="text-sm text-gray-500">Realizado em {order.date}</p>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          {getStatusLabel(order.status)}
                          <Button variant="outline" size="sm">
                            Ver Detalhes
                          </Button>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-600">Total do Pedido:</span>
                          <span className="font-medium">{formatPrice(order.total)}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Itens:</span>
                          <span>{order.items} produtos</span>
                        </div>
                        
                        {order.status === 'delivered' && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="mt-4"
                          >
                            Comprar Novamente
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Subscriptions Tab */}
          {activeTab === 'subscriptions' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Minha Assinatura</h2>
              
              {user.subscription ? (
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-green-50 p-6 border-b border-green-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold">{user.subscription.plan}</h3>
                        <p className="text-green-600 mt-1">
                          {user.subscription.status === 'active' ? 'Ativo' : 'Pausado'}
                        </p>
                      </div>
                      
                      <Button variant="outline">
                        {user.subscription.status === 'active' ? 'Pausar Assinatura' : 'Reativar Assinatura'}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-6">
                      <p className="text-gray-600 mb-1">Próxima Entrega:</p>
                      <p className="font-medium">{user.subscription.nextDelivery}</p>
                    </div>
                    
                    <h3 className="font-medium mb-4">Preferências do Plano</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 mb-1">Refeições por Semana:</p>
                        <div className="flex items-center space-x-2">
                          <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>5 refeições</option>
                            <option>7 refeições</option>
                            <option>10 refeições</option>
                          </select>
                          <Button variant="outline" size="sm">Atualizar</Button>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-600 mb-1">Preferências Alimentares:</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Low Carb</span>
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Rico em Proteína</span>
                        </div>
                        <Button variant="outline" size="sm">Editar Preferências</Button>
                      </div>
                      
                      <div>
                        <p className="text-gray-600 mb-1">Dia de Entrega:</p>
                        <div className="flex items-center space-x-2">
                          <select className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                            <option>Segunda-feira</option>
                            <option>Terça-feira</option>
                            <option>Quarta-feira</option>
                            <option>Quinta-feira</option>
                            <option>Sexta-feira</option>
                          </select>
                          <Button variant="outline" size="sm">Atualizar</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t mt-8 pt-6">
                      <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                        Cancelar Assinatura
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                  <CreditCard size={48} className="text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">Você ainda não possui uma assinatura</h3>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Assine um de nossos planos e receba marmitas saudáveis e deliciosas regularmente, 
                    com desconto e conveniência.
                  </p>
                  <Button variant="primary">Ver Planos Disponíveis</Button>
                </div>
              )}
            </div>
          )}
          
          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Meus Favoritos</h2>
              
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                <Heart size={48} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Sua lista de favoritos está vazia</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  Favorite seus produtos preferidos para acessá-los facilmente e receber notificações sobre promoções.
                </p>
                <Button variant="primary">Explorar Produtos</Button>
              </div>
            </div>
          )}
          
          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Configurações</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium mb-4">Notificações</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Notificações por Email</p>
                        <p className="text-sm text-gray-500">Receba emails sobre pedidos, promoções e novidades</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Notificações SMS</p>
                        <p className="text-sm text-gray-500">Receba SMS sobre status de entregas</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Newsletter Semanal</p>
                        <p className="text-sm text-gray-500">Receba dicas de nutrição e receitas saudáveis</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <h3 className="font-medium mb-4">Privacidade e Segurança</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Button variant="outline" size="sm">Alterar Senha</Button>
                    </div>
                    
                    <div>
                      <Button variant="outline" size="sm">Gerenciar Dispositivos Conectados</Button>
                    </div>
                    
                    <div>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                        Excluir Minha Conta
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t">
                  <Button variant="primary">Salvar Configurações</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;