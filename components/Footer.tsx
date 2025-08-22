
import React from 'react';

// IMPORTANT: Replace these placeholders with actual logo URLs
const MAPOLY_LOGO_URL = "https://www.mapoly.edu.ng/wp-content/uploads/2022/02/cropped-MAPOLY-LOGO-1-1.png";
const TEAM_LOGO_URL = "https://i.postimg.cc/wMPbV7f4/AFO-VISION-2025-1.png";
const SU_LOGO_URL = "https://picsum.photos/seed/sulogo/100/100";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-4 border-mapoly-gold">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center justify-center space-x-6">
            <img src={MAPOLY_LOGO_URL} alt="MAPOLY Logo" className="h-16 w-16 object-contain" />
            <img src={TEAM_LOGO_URL} alt="Team Logo" className="h-16 w-16 object-contain" />
            <img src={SU_LOGO_URL} alt="Student Union Logo" className="h-16 w-16 object-contain" />
          </div>
          <div className="text-center md:text-right">
            <p className="font-semibold text-mapoly-green text-lg">
              VOTE Temitope Afolabi (Big Afo) FOR SU PRESIDENT
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
