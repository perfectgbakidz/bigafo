
import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from './IconComponents';

// IMPORTANT: Replace this with your actual WhatsApp group link
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/your_group_invite_code";

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-mapoly-gold transition duration-300">
        {children}
    </a>
)

const CTA: React.FC = () => {
  return (
    <section id="connect" className="py-20 bg-mapoly-green">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Support Big Afo for SUG President
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-8">
          This is more than a campaign; it is a vision of shared progress. A chance to redefine what leadership means in our union. Let’s lead with vision. Let’s serve with impact. Let’s build a better MAPOLY together.
        </p>
        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-mapoly-gold text-mapoly-green font-bold py-4 px-10 rounded-full text-xl uppercase hover:bg-white transition duration-300 transform hover:scale-105 inline-block mb-12"
        >
          Join Our WhatsApp Group
        </a>
        <div className="flex justify-center space-x-8">
            {/* IMPORTANT: Replace '#' with your actual social media links */}
            <SocialLink href="#"><FacebookIcon /></SocialLink>
            <SocialLink href="#"><TwitterIcon /></SocialLink>
            <SocialLink href="#"><InstagramIcon /></SocialLink>
        </div>
      </div>
    </section>
  );
};

export default CTA;
