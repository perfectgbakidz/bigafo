
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Declaration from './components/Declaration';
import Experience from './components/Experience';
import Manifesto from './components/Manifesto';
import FlyerGenerator from './components/FlyerGenerator';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-mapoly-light min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Declaration />
        <Experience />
        <Manifesto />
        <FlyerGenerator />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;