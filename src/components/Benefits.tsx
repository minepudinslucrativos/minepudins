import React, { useEffect, useState } from 'react';
import { ChefHat, DollarSign, Package, PieChart } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`
        bg-white rounded-lg p-6 shadow-lg 
        transform transition-all duration-700 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      <div className="bg-amber-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-amber-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-amber-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-amber-50" id="benefits">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">O que você vai aprender no guia?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Descubra como transformar simples pudins em uma fonte de renda constante em Portugal, 
            mesmo sem experiência prévia em culinária ou vendas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Benefit 
            icon={<ChefHat className="h-8 w-8" />}
            title="Pudins Irresistíveis"
            description="Aprenda todas as receitas para fazer pudins deliciosos e com aparência impecável que vão conquistar seus clientes."
            delay={100}
          />
          <Benefit 
            icon={<DollarSign className="h-8 w-8" />}
            title="Estratégias de Venda"
            description="Use plataformas como WhatsApp, OLX, Glovo e Bolt Food para vender seus pudins e alcançar um público maior em Portugal."
            delay={300}
          />
          <Benefit 
            icon={<Package className="h-8 w-8" />}
            title="Embalagem Profissional"
            description="Descubra como embalar seus pudins de forma segura e atraente para que eles cheguem ao cliente com qualidade e apresentação impecáveis."
            delay={500}
          />
          <Benefit 
            icon={<PieChart className="h-8 w-8" />}
            title="Precificação Lucrativa"
            description="Calcule corretamente os preços, para que você obtenha um bom lucro sem errar na margem de preço."
            delay={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;