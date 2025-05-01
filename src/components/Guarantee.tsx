import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-amber-50 rounded-2xl p-8 md:p-12 border border-amber-200 shadow-lg relative overflow-hidden">
            <div className="absolute -top-10 -right-10 bg-amber-400 w-40 h-40 rounded-full opacity-20"></div>
            
            <div className="text-center mb-8 relative z-10">
              <div className="inline-block p-4 bg-white rounded-full shadow-lg mb-6">
                <ShieldCheck className="h-16 w-16 text-amber-600" />
              </div>
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Compra sem Riscos!</h2>
              <div className="w-16 h-1 bg-amber-500 mx-auto mb-6"></div>
            </div>
            
            <div className="text-center relative z-10">
              <p className="text-xl mb-6">
                Se você não estiver completamente satisfeito com o guia, oferecemos uma 
                <span className="font-bold text-amber-700"> garantia de devolução de dinheiro em até 7 dias!</span>
              </p>
              <p className="text-lg text-gray-700">
                Isso mesmo, você pode testar o eBook e, caso não esteja feliz, devolvemos seu 
                dinheiro sem perguntas.
              </p>
              
              <div className="mt-8 p-4 bg-white rounded-lg border border-amber-200 inline-block">
                <p className="font-semibold text-amber-800">
                  Sua satisfação é nossa prioridade!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;