import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PurchaseButtonProps {
  small?: boolean;
}

const PurchaseButton: React.FC<PurchaseButtonProps> = ({ small = false }) => {
  return (
    <button 
      className={`
        ${small ? 'text-sm px-4 py-2' : 'text-lg px-8 py-4'} 
        bg-amber-500 hover:bg-amber-400 text-amber-900 font-bold 
        rounded-lg transition-all duration-300 transform hover:scale-105 
        flex items-center justify-center
        shadow-lg hover:shadow-xl
      `}
      onClick={() => {
        // Implement checkout or scroll to checkout section
        const offerSection = document.getElementById('offer');
        if (offerSection) {
          offerSection.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {small ? 'Comprar Agora' : 'Compre Agora e Receba Seu eBook Imediatamente!'}
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  );
};

export default PurchaseButton;