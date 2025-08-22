
import React from 'react';

// An icon representing design/generation tools
const GeneratorIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-mapoly-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
);


const FlyerGenerator: React.FC = () => {
  return (
    <section id="support" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mx-auto bg-mapoly-gold/20 rounded-full h-32 w-32 flex items-center justify-center mb-6">
            <GeneratorIcon />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-mapoly-green mb-4">
            Show Your Support
          </h2>
          <p className="text-xl text-gray-700 mb-4">Personalized Campaign Flyer Generator</p>
          <div className="w-24 h-1 bg-mapoly-gold mx-auto mb-6"></div>

          <div className="bg-mapoly-light border-l-4 border-mapoly-green p-6 rounded-lg shadow-md inline-block">
            <p className="text-2xl md:text-3xl font-bold text-mapoly-green animate-pulse">
              Coming Soon!
            </p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            Soon, you'll be able to create your own personalized campaign flyer right here on the website. Upload your photo, add your name, and generate a custom design to share on social media and show your support for Big Afo!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlyerGenerator;
