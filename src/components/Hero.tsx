import React, { useEffect, useState } from 'react';
import { ChefHat, ArrowRight } from 'lucide-react';
import PurchaseButton from './PurchaseButton';

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav 
        className={`
          fixed w-full z-50 transition-all duration-300 
          ${scrolled ? 'bg-amber-900/90 backdrop-blur-sm shadow-lg py-2' : 'bg-transparent py-4'}
        `}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center text-white">
            <ChefHat className="h-8 w-8 mr-2" />
            <span className="font-bold text-xl">Pudins Lucrativos</span>
          </div>
          <PurchaseButton small={true} />
        </div>
      </nav>

      {/* Hero Content */}
      <div className="w-full min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 flex items-center">
        <div className="container mx-auto px-4 md:px-6 h-screen flex items-center">
          <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-left">
              <div className="inline-flex items-center space-x-2 bg-amber-400/20 text-amber-300 font-medium px-4 py-1.5 rounded-full mb-6">
                <span className="animate-pulse">●</span>
                <span>Nova Oportunidade em Portugal</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Transforme Suas Receitas em Renda
              </h1>
              
              <h2 className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
                Aprenda a fazer e vender pudins deliciosos e lucrativos, 
                mesmo sem experiência na cozinha. Comece a gerar renda 
                em Portugal hoje mesmo!
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <PurchaseButton />
              </div>
            </div>

            {/* Right Column - TikTok Video */}
            <div className="relative w-full aspect-[9/16] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400/20">
              <iframe
                src="https://www.tiktok.com/embed/v2/7466921914712345861"
                className="absolute top-0 left-0 w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;