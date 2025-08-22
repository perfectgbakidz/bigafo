
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Manifesto from './components/Manifesto';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-mapoly-light min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Manifesto />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
