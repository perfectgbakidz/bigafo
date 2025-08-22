import React, { useState } from 'react';

const MAPOLY_LOGO_URL = "https://i.imgur.com/J2esTQx.png";
const SU_LOGO_URL = "https://i.imgur.com/N8BCRaf.png";
const TEAM_LOGO_URL = "https://i.imgur.com/EVVtFJD.png";

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-700 hover:text-mapoly-green font-semibold transition duration-300">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={MAPOLY_LOGO_URL} alt="MAPOLY Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain"/>
          <img src={SU_LOGO_URL} alt="SUG Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain"/>
          <img src={TEAM_LOGO_URL} alt="Team AFO Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain"/>
          <span className="font-bold text-sm sm:text-base md:text-lg text-mapoly-green whitespace-nowrap">Big Afo SUG Campaign</span>
        </div>

        <nav className="hidden md:flex space-x-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#declaration">About</NavLink>
          <NavLink href="#manifesto">Manifesto</NavLink>
          <NavLink href="#gallery">Gallery</NavLink>
          <NavLink href="#connect">Connect</NavLink>
        </nav>

        <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
            </button>
        </div>
      </div>
       {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLink href="#home" >Home</NavLink>
            <NavLink href="#declaration">About</NavLink>
            <NavLink href="#manifesto">Manifesto</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#connect">Connect</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;