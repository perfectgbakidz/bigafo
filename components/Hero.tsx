import React from 'react';

// The candidate's transparent image, provided by the user.
const CANDIDATE_IMAGE_URL = "https://i.imgur.com/rDlcM5I.png";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative bg-mapoly-green text-white flex items-center overflow-hidden min-h-[85vh] md:min-h-[90vh]"
    >
      {/* Background Image and Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ backgroundImage: `url('https://i.imgur.com/vv7e0S0.jpeg')` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center py-12 md:py-0">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight mb-4">
            <span className="text-mapoly-gold">Temitope Afolabi (Big Afo)</span> FOR SU PRESIDENT
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl font-light mb-8">
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
            alt="Campaign Candidate Temitope Afolabi (Big Afo)" 
            className="h-auto w-3/4 max-w-sm md:w-auto md:max-w-full md:h-[75vh] object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;