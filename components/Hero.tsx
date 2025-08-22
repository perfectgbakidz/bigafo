
import React from 'react';

// IMPORTANT: Replace this placeholder with the actual URL to your transparent image
const CANDIDATE_IMAGE_URL = "https://i.ibb.co/L6v36Jc/candidate-placeholder.png"; // Example transparent image placeholder

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-mapoly-green text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url('https://i.postimg.cc/tJ0G9JgR/IMG-20240720-WA0019.jpg')` }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-tight mb-4">
            <span className="text-mapoly-gold">Temitope Afolabi (Big Afo)</span> FOR SU PRESIDENT
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8">
            Leadership with Purpose. Progress for All.
          </p>
          <a
            href="#manifesto"
            className="bg-mapoly-gold text-mapoly-green font-bold py-3 px-8 rounded-full text-lg uppercase hover:bg-white transition duration-300 transform hover:scale-105"
          >
            My Vision
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img 
            src={CANDIDATE_IMAGE_URL} 
            alt="Campaign Candidate" 
            className="max-h-[70vh] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
