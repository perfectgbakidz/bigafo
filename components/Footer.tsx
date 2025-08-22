
import React from 'react';

// IMPORTANT: Replace these placeholders with actual logo URLs
const MAPOLY_LOGO_URL = "https://i.imgur.com/J2esTQx.png"; // Updated MAPOLY Logo
const TEAM_LOGO_URL = "https://i.imgur.com/EVVtFJD.png";
const SU_LOGO_URL = "https://i.imgur.com/N8BCRaf.png"; // Updated SUG Logo

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-mapoly-gold">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center justify-center space-x-6">
            <img src={MAPOLY_LOGO_URL} alt="MAPOLY Logo" className="h-16 w-16 object-contain" />
            <img src={TEAM_LOGO_URL} alt="Team AFO Vision 2025 Logo" className="h-16 w-16 object-contain" />
            <img src={SU_LOGO_URL} alt="Student Union Logo" className="h-16 w-16 object-contain" />
          </div>
          <div className="text-center md:text-right">
            <p className="font-semibold text-mapoly-green text-lg">
              VOTE Temitope Afolabi (Big Afo) FOR SUG PRESIDENT
            </p>
            <p className="text-gray-600 text-sm mt-1">
              &copy; {currentYear} Temitope Afolabi (Big Afo) Campaign Team. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
