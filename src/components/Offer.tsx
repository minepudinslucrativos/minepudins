import React from 'react';
import { CheckCircle, Gift } from 'lucide-react';
import PurchaseButton from './PurchaseButton';

const bonuses = [
  {
    title: 'Receitas de Salgados Lucrativos',
    description: 'Diversifique seu cardápio e aumente suas vendas com receitas simples e rentáveis.'
  },
  {
    title: 'Guia de Brigadeiros Gourmet',
    description: 'Aprenda a fazer brigadeiros gourmet, ideias perfeitas para vender individualmente ou em kits.'
  },
  {
    title: 'Sobremesas Geladas que Vendem',
    description: 'Uma receita refrescante para os dias quentes, para garantir que seus produtos se destaquem no mercado.'
  }
];

const Offer: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-100" id="offer">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Aproveite a Oferta Especial e Ganhe Bônus Exclusivos!
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Tudo que você precisa para começar seu negócio de pudins lucrativos em Portugal.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Product Image */}
            <div className="lg:w-2/5 relative">
              <div 
                className="h-full w-full bg-amber-700 flex items-center justify-center p-8"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/6431082/pexels-photo-6431082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay'
                }}
              >
                <div className="relative w-full max-w-sm mx-auto aspect-[3/4] bg-white rounded-lg shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="absolute -top-5 -left-5 bg-amber-500 text-amber-900 font-bold py-2 px-4 rounded-full transform rotate-12">
                    eBook
                  </div>
                  <div className="h-full w-full flex flex-col justify-between">
                    <div className="text-center p-4">
                      <h3 className="text-2xl font-bold text-amber-900 mb-2">
                        Guia Completo Para Vender Pudins Lucrativos em Portugal
                      </h3>
                      <div className="w-16 h-1 bg-amber-500 mx-auto my-4"></div>
                      <p className="text-gray-700">
                        Transforme simples receitas em uma fonte de renda!
                      </p>
                    </div>
                    <div 
                      className="w-full h-48 bg-cover bg-center rounded-lg"
                      style={{
                        backgroundImage: 'url(https://images.pexels.com/photos/6123641/pexels-photo-6123641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Offer Details */}
            <div className="lg:w-3/5 p-8 md:p-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-gray-500 line-through text-lg">R$49,90</span>
                  <span className="ml-2 text-3xl font-bold text-amber-900">R$19,90</span>
                </div>
                <div className="bg-amber-500 text-amber-900 font-bold py-1 px-3 rounded-full animate-pulse">
                  60% de desconto!
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">O que você vai receber:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Acesso instantâneo ao eBook completo com todas as receitas e estratégias</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Instruções passo a passo para fazer pudins perfeitos para venda</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Guias de precificação para maximizar seus lucros</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Dicas de embalagem para entrega profissional</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg mb-8 border-2 border-dashed border-amber-300">
                <div className="flex items-center mb-4">
                  <Gift className="h-8 w-8 text-amber-600 mr-3" />
                  <h3 className="text-xl font-bold text-amber-900">Bônus Gratuitos (Valor: €69)</h3>
                </div>
                <ul className="space-y-4">
                  {bonuses.map((bonus, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="font-semibold text-gray-800">{bonus.title}</span>
                      <span className="text-gray-600 text-sm">{bonus.description}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <PurchaseButton />
                <p className="mt-4 text-sm text-gray-600">
                  Oferta por tempo limitado. Acesso imediato após a compra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;