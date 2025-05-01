import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqItems: FAQItemProps[] = [
  {
    question: 'Como faço o pagamento?',
    answer: 'Você pode pagar com cartão de crédito ou outros meios de pagamento online. O processo é simples e seguro!'
  },
  {
    question: 'Posso acessar o eBook em qualquer dispositivo?',
    answer: 'Sim! O eBook está disponível para download imediato, e você pode acessar de qualquer dispositivo (smartphone, tablet ou computador).'
  },
  {
    question: 'O que acontece após eu comprar?',
    answer: 'Assim que a compra for confirmada, você receberá um link para download do eBook e os bônus, que estarão disponíveis para você imediatamente.'
  },
  {
    question: 'Preciso ter experiência em culinária?',
    answer: 'Não! O guia foi criado pensando em iniciantes. Todas as receitas e instruções são detalhadas e fáceis de seguir, mesmo para quem nunca cozinhou antes.'
  },
  {
    question: 'O guia funciona para outras regiões além de Portugal?',
    answer: 'O guia foi desenvolvido especificamente para o mercado português, com informações sobre preços, ingredientes e plataformas de venda locais. No entanto, as receitas e estratégias básicas podem ser adaptadas para outros países.'
  },
  {
    question: 'Quanto tempo leva para começar a vender?',
    answer: 'Com as estratégias do guia, você pode começar a vender seus primeiros pudins em menos de uma semana! Muitos dos nossos clientes conseguiram fazer suas primeiras vendas já nos primeiros dias.'
  }
];

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-amber-200 py-4">
      <button 
        className="w-full text-left flex justify-between items-center focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-amber-900 group-hover:text-amber-700">{question}</span>
        {isOpen ? 
          <ChevronUp className="h-5 w-5 text-amber-600" /> : 
          <ChevronDown className="h-5 w-5 text-amber-600" />
        }
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}
      >
        <p className="text-gray-700 pl-1">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-16 bg-amber-50" id="faq">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
              Ainda tem dúvidas?
            </h2>
            <p className="text-lg text-gray-700">
              Veja algumas perguntas frequentes sobre o nosso guia de pudins lucrativos
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            {faqItems.map((item, index) => (
              <FAQItem 
                key={index} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
          </div>
          
          <div className="text-center mt-10">
            <p className="text-lg text-gray-700 mb-6">
              Não encontrou a resposta que procurava? Entre em contato conosco!
            </p>
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-amber-600 hover:bg-amber-500 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;