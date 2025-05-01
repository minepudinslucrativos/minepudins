import React from 'react';
import { ChefHat, Instagram, Facebook, Mail } from 'lucide-react';
import PurchaseButton from './PurchaseButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-amber-900 text-amber-100 pt-16 pb-8" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Urgency Banner */}
          <div className="bg-amber-800 rounded-lg p-6 mb-12 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Oferta Especial por Tempo Limitado!</h3>
              <p className="mb-6">
                Aproveite esta oferta enquanto ainda está disponível! 
                A promoção termina em breve! Não deixe para depois, 
                comece agora a sua jornada empreendedora em Portugal!
              </p>
              <div className="inline-block">
                <PurchaseButton />
              </div>
            </div>
          </div>
          
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <ChefHat className="h-6 w-6 mr-2" />
                <span className="font-bold text-xl">Pudins Lucrativos</span>
              </div>
              <p className="max-w-xs text-amber-200 mb-4">
                Comece hoje a sua jornada de sucesso em Portugal com um simples pudim!
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-amber-300 transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-amber-300 transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-amber-300 transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#benefits" className="hover:text-amber-300 transition-colors duration-300">Benefícios</a>
                </li>
                <li>
                  <a href="#offer" className="hover:text-amber-300 transition-colors duration-300">Oferta Especial</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-amber-300 transition-colors duration-300">Perguntas Frequentes</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contato@pudinslucrativos.com" className="hover:text-amber-300 transition-colors duration-300">
                    contato@pudinslucrativos.com
                  </a>
                </li>
                <li>
                  <a href="tel:+351900000000" className="hover:text-amber-300 transition-colors duration-300">
                    +351 900 000 000
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-amber-800 pt-8 text-center text-amber-300 text-sm">
            <p>&copy; {currentYear} Pudins Lucrativos. Todos os direitos reservados.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-amber-100 transition-colors duration-300">Termos de Uso</a>
              <a href="#" className="hover:text-amber-100 transition-colors duration-300">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;