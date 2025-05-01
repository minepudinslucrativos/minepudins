import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
  stars: number;
  image: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: 'Juliana S.',
    location: 'Porto',
    quote: 'Cheguei em Portugal sem saber por onde começar. Com esse eBook, comecei a fazer e vender pudins logo na primeira semana. Já tenho clientes fixos e consigo pagar meu aluguel com essa renda!',
    stars: 5,
    image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Patrícia M.',
    location: 'Lisboa',
    quote: 'Nunca imaginei que conseguiria ganhar dinheiro com pudins, mas esse guia me deu a confiança e as ferramentas para começar. Em menos de dois meses, já tenho pedidos regulares!',
    stars: 5,
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    name: 'Larissa V.',
    location: 'Braga',
    quote: 'Com as dicas do guia, vendi todos os pudins na primeira semana! Hoje, faço entregas pelo Glovo e ganho uma renda extra que complementa a nossa receita.',
    stars: 5,
    image: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-amber-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja o que outras mulheres estão dizendo sobre o guia</h2>
          <p className="text-lg text-amber-100 max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com nosso guia de pudins
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-amber-400">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex text-amber-500 mb-3">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="fill-current" size={20} />
                          ))}
                        </div>
                        <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-amber-700">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-amber-600 hover:bg-amber-500 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-amber-600 hover:bg-amber-500 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${current === index ? 'bg-amber-400' : 'bg-amber-200'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;