import React from 'react';
import { Leaf, Users, Utensils, Heart, Award, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre a Marmita<span className="text-green-500">Fit</span></h1>
            <p className="text-xl text-gray-600 mb-8">
              Somos apaixonados por alimentação saudável e acreditamos que comida 
              nutritiva deve ser deliciosa, conveniente e acessível para todos.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-4">
                A MarmitaFit nasceu em 2020 da paixão de três amigos nutricionistas e chefs que 
                compartilhavam o mesmo sonho: tornar a alimentação saudável acessível, saborosa e prática 
                para pessoas com rotinas agitadas.
              </p>
              <p className="text-gray-600 mb-4">
                Após anos trabalhando em restaurantes e clínicas, percebemos que muitas pessoas queriam 
                melhorar seus hábitos alimentares, mas não tinham tempo para preparar refeições nutritivas 
                todos os dias.
              </p>
              <p className="text-gray-600">
                Assim surgiu a MarmitaFit - com a missão de entregar saúde e sabor na porta da sua casa, 
                sem complicações. Hoje, servimos mais de 10.000 clientes mensalmente e continuamos crescendo, 
                sempre com o mesmo compromisso de qualidade e excelência em cada refeição.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Time da MarmitaFit" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Values */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acreditamos que alimentação saudável é mais do que uma escolha - é um estilo de vida. 
              Nossos valores refletem nosso compromisso com você e com o planeta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Leaf size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustentabilidade</h3>
              <p className="text-gray-600">
                Usamos embalagens biodegradáveis e priorizamos ingredientes locais para reduzir nossa 
                pegada ambiental e apoiar produtores da região.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Utensils size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Qualidade</h3>
              <p className="text-gray-600">
                Selecionamos apenas ingredientes frescos e da melhor qualidade. Nossas refeições são 
                preparadas diariamente por chefs experientes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Saúde</h3>
              <p className="text-gray-600">
                Todas as nossas refeições são desenvolvidas com acompanhamento nutricional para garantir 
                o equilíbrio perfeito entre sabor e nutrição.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our Team */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Por trás de cada marmita existe uma equipe dedicada a criar experiências gastronômicas saudáveis e deliciosas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Chef Ana Paula" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Ana Paula Santos</h3>
              <p className="text-green-600 mb-2">Chef Executiva</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Formada em gastronomia com especialização em culinária funcional e 12 anos de experiência.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://img.freepik.com/fotos-gratis/retrato-de-um-medico-homem-feliz-vestido-de-uniforme_171337-119.jpg" 
                  alt="Nutricionista Pedro" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Pedro Oliveira</h3>
              <p className="text-green-600 mb-2">Nutricionista Chefe</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Mestre em nutrição esportiva e responsável pelo desenvolvimento de todos os nossos cardápios.
              </p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mb-4">
                <img 
                  src="https://ba.agenciasebrae.com.br/wp-content/uploads/sites/6/2024/01/iStock-1459178010_p12298_cover_image_resized.jpg" 
                  alt="Camila Gestora" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Camila Mendes</h3>
              <p className="text-green-600 mb-2">Diretora de Operações</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Especialista em gestão de negócios sustentáveis e apaixonada por transformar vidas através da alimentação.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <p>Clientes Satisfeitos</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500k+</div>
              <p>Marmitas Entregues</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p>Opções no Cardápio</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>Ingredientes Naturais</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Por que escolher a MarmitaFit?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos muito mais do que apenas comida saudável. Conheça os diferenciais que fazem da MarmitaFit a melhor escolha.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award size={24} className="text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Qualidade Premium</h3>
              <p className="text-gray-600">
                Utilizamos apenas ingredientes frescos e orgânicos. Nossas refeições são preparadas diariamente 
                para garantir o máximo de sabor e nutrientes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Users size={24} className="text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Equipe Especializada</h3>
              <p className="text-gray-600">
                Nossa equipe é formada por chefs experientes e nutricionistas especializados, 
                garantindo o equilíbrio perfeito entre sabor e nutrição.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock size={24} className="text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Praticidade</h3>
              <p className="text-gray-600">
                Economize tempo com nossas refeições prontas para consumo. Basta aquecer e aproveitar 
                uma refeição saudável e deliciosa em minutos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;