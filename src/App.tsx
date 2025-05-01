import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <Benefits />
      <Testimonials />
      <Offer />
      <Guarantee />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;