import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';
import Button from '../components/ui/Button';

interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface PaymentInfo {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState<'cart' | 'shipping' | 'payment' | 'confirmation'>('cart');
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  });
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  
  const shipping = 12.90;
  const total = cartTotal + shipping;
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };
  
  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentStep('confirmation');
    }, 2000);
  };
  
  const handleConfirmOrder = () => {
    clearCart();
    navigate('/');
  };
  
  const handleShippingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentInfo(prev => ({ ...prev, [name]: value }));
  };
  
  if (cart.length === 0 && currentStep === 'cart') {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
        <p className="mb-6">Adicione alguns produtos antes de prosseguir para o checkout.</p>
        <Button 
          variant="primary"
          onClick={() => navigate('/products')}
        >
          Ver Produtos
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-10 text-center">Checkout</h1>
      
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-center">
          <div className={`relative flex flex-col items-center ${currentStep === 'cart' ? 'text-green-500' : 'text-gray-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep === 'cart' ? 'border-green-500 bg-green-100' : 'border-gray-300'}`}>
              1
            </div>
            <span className="mt-2">Carrinho</span>
          </div>
          <div className={`w-20 h-1 ${currentStep === 'cart' ? 'bg-gray-300' : 'bg-green-500'}`}></div>
          
          <div className={`relative flex flex-col items-center ${currentStep === 'shipping' ? 'text-green-500' : currentStep === 'payment' || currentStep === 'confirmation' ? 'text-green-500' : 'text-gray-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep === 'shipping' ? 'border-green-500 bg-green-100' : currentStep === 'payment' || currentStep === 'confirmation' ? 'border-green-500 bg-green-100' : 'border-gray-300'}`}>
              2
            </div>
            <span className="mt-2">Entrega</span>
          </div>
          <div className={`w-20 h-1 ${currentStep === 'cart' || currentStep === 'shipping' ? 'bg-gray-300' : 'bg-green-500'}`}></div>
          
          <div className={`relative flex flex-col items-center ${currentStep === 'payment' ? 'text-green-500' : currentStep === 'confirmation' ? 'text-green-500' : 'text-gray-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep === 'payment' ? 'border-green-500 bg-green-100' : currentStep === 'confirmation' ? 'border-green-500 bg-green-100' : 'border-gray-300'}`}>
              3
            </div>
            <span className="mt-2">Pagamento</span>
          </div>
          <div className={`w-20 h-1 ${currentStep === 'cart' || currentStep === 'shipping' || currentStep === 'payment' ? 'bg-gray-300' : 'bg-green-500'}`}></div>
          
          <div className={`relative flex flex-col items-center ${currentStep === 'confirmation' ? 'text-green-500' : 'text-gray-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep === 'confirmation' ? 'border-green-500 bg-green-100' : 'border-gray-300'}`}>
              4
            </div>
            <span className="mt-2">Confirmação</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {currentStep === 'cart' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Seu Carrinho</h2>
              
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.product.id} className="flex border rounded-lg overflow-hidden p-4">
                    <div className="w-24 h-24 flex-shrink-0">
                      <img 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    
                    <div className="flex-1 ml-4">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                        <p className="font-medium">{formatPrice(item.product.price * item.quantity)}</p>
                      </div>
                      
                      <p className="text-gray-500 text-sm">{item.product.shortDescription}</p>
                      
                      <div className="mt-2 flex items-center">
                        <span className="text-gray-500 text-sm">Quantidade: {item.quantity}</span>
                        <span className="mx-2 text-gray-300">|</span>
                        <span className="text-gray-500 text-sm">{formatPrice(item.product.price)} cada</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button 
                  variant="primary"
                  onClick={() => setCurrentStep('shipping')}
                >
                  Continuar para Entrega
                </Button>
              </div>
            </div>
          )}
          
          {currentStep === 'shipping' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Informações de Entrega</h2>
              
              <form onSubmit={handleShippingSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="md:col-span-2">
                    <label htmlFor="fullName" className="block text-gray-700 mb-1">Nome Completo</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={shippingInfo.fullName}
                      onChange={handleShippingChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={shippingInfo.email}
                      onChange={handleShippingChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-1">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={shippingInfo.phone}
                      onChange={handleShippingChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-gray-700 mb-1">Endereço</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={shippingInfo.address}
                      onChange={handleShippingChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="city" className="block text-gray-700 mb-1">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={shippingInfo.city}
                      onChange={handleShippingChange}
                      required
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="state" className="block text-gray-700 mb-1">Estado</label>
                      <select
                        id="state"
                        name="state"
                        value={shippingInfo.state}
                        onChange={(e) => setShippingInfo(prev => ({ ...prev, state: e.target.value }))}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      >
                        <option value="">Selecione</option>
                        <option value="SP">São Paulo</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="ES">Espírito Santo</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="zipCode" className="block text-gray-700 mb-1">CEP</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={shippingInfo.zipCode}
                        onChange={handleShippingChange}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-8">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentStep('cart')}
                  >
                    Voltar para o Carrinho
                  </Button>
                  
                  <Button 
                    variant="primary"
                    type="submit"
                  >
                    Continuar para Pagamento
                  </Button>
                </div>
              </form>
            </div>
          )}
          
          {currentStep === 'payment' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Informações de Pagamento</h2>
              
              <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <CreditCard size={24} className="text-green-500 mr-2" />
                  <h3 className="font-medium">Cartão de Crédito</h3>
                </div>
                
                <form onSubmit={handlePaymentSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-gray-700 mb-1">Número do Cartão</label>
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={paymentInfo.cardNumber}
                        onChange={handlePaymentChange}
                        placeholder="0000 0000 0000 0000"
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="cardHolder" className="block text-gray-700 mb-1">Nome no Cartão</label>
                      <input
                        type="text"
                        id="cardHolder"
                        name="cardHolder"
                        value={paymentInfo.cardHolder}
                        onChange={handlePaymentChange}
                        required
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-gray-700 mb-1">Data de Expiração</label>
                        <input
                          type="text"
                          id="expiryDate"
                          name="expiryDate"
                          value={paymentInfo.expiryDate}
                          onChange={handlePaymentChange}
                          placeholder="MM/AA"
                          required
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cvv" className="block text-gray-700 mb-1">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={paymentInfo.cvv}
                          onChange={handlePaymentChange}
                          placeholder="123"
                          required
                          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-8">
                    <Button 
                      variant="outline"
                      onClick={() => setCurrentStep('shipping')}
                      disabled={isProcessing}
                    >
                      Voltar para Entrega
                    </Button>
                    
                    <Button 
                      variant="primary"
                      type="submit"
                      disabled={isProcessing}
                    >
                      {isProcessing ? 'Processando...' : 'Finalizar Pedido'}
                    </Button>
                  </div>
                </form>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="flex items-start">
                  <ShieldCheck size={24} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    Seus dados de pagamento são protegidos com criptografia de ponta a ponta. 
                    Nós não armazenamos os dados do seu cartão.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 'confirmation' && (
            <div className="text-center py-8">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={40} className="text-green-500" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Pedido Confirmado!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Seu pedido foi realizado com sucesso. Você receberá um email de confirmação em breve com os detalhes do seu pedido.
              </p>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 max-w-md mx-auto mb-8">
                <h3 className="font-medium mb-4 text-left">Resumo do Pedido</h3>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Número do Pedido:</span>
                  <span className="font-medium">MF{Math.floor(Math.random() * 1000000)}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Data:</span>
                  <span className="font-medium">{new Date().toLocaleDateString('pt-BR')}</span>
                </div>
                
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Total:</span>
                  <span className="font-medium">{formatPrice(total)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Entrega estimada:</span>
                  <span className="font-medium">
                    {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('pt-BR')}
                  </span>
                </div>
              </div>
              
              <Button 
                variant="primary"
                onClick={handleConfirmOrder}
              >
                Voltar para a Loja
              </Button>
            </div>
          )}
        </div>
        
        {/* Order Summary */}
        {(currentStep === 'cart' || currentStep === 'shipping' || currentStep === 'payment') && (
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
              
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between">
                    <div className="flex items-start">
                      <span className="text-gray-500 mr-1">{item.quantity}x</span>
                      <span className="text-gray-800">{item.product.name}</span>
                    </div>
                    <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Frete</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                
                <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>
              
              {currentStep === 'shipping' && (
                <div className="mt-6 flex items-center bg-green-50 p-3 rounded border border-green-200">
                  <Truck size={20} className="text-green-500 mr-2 flex-shrink-0" />
                  <p className="text-sm text-gray-600">
                    Entrega estimada em 2-3 dias úteis após a confirmação do pedido.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;