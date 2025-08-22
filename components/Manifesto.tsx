
import React from 'react';

interface ManifestoPointProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ManifestoPoint: React.FC<ManifestoPointProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full">
    <div className="text-mapoly-gold mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-mapoly-green mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AdvocacyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const WelfareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const OpportunitiesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const SocialIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const LeadershipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;

const manifestoData = [
    {
        icon: <AdvocacyIcon />,
        title: "Advocacy and Accountability",
        description: "Restore trust in the Union with open communication and transparent operations, becoming a reliable voice for all students (SDG 16: Peace, Justice, and Strong Institutions)."
    },
    {
        icon: <WelfareIcon />,
        title: "Functional Welfarism",
        description: "Prioritize student well-being by improving access to healthcare, securing transportation, and ensuring conducive hostel conditions (SDG 3: Good Health and Well-being)."
    },
    {
        icon: <OpportunitiesIcon />,
        title: "Opportunities for Development",
        description: "Create avenues for growth through trainings, workshops, and enterprise programs to equip students for life beyond campus (SDG 4: Quality Education & SDG 8: Economic Growth)."
    },
    {
        icon: <SocialIcon />,
        title: "Vibrant Social and Sporting Life",
        description: "Rejuvenate campus life through inclusive events, cultural activities, and sports development to foster a connected student community (SDG 10: Reduced Inequalities)."
    },
    {
        icon: <LeadershipIcon />,
        title: "Effective and Inclusive Leadership",
        description: "Foster a union where every student feels heard and represented through teamwork, decentralization, and responsive leadership (SDG 16: Inclusive Institutions)."
    },
];

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 bg-mapoly-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <img src="https://i.imgur.com/te7TqnX.png" alt="AFO Vision 2025" className="mx-auto h-32 w-32 md:h-48 md:w-48 object-contain mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-mapoly-green mb-4">
            AFO Vision 2025: Five-Point Agenda
          </h2>
          <div className="w-24 h-1 bg-mapoly-gold mx-auto"></div>
          <p className="max-w-3xl mx-auto mt-4 text-gray-600">
             A student-centered development framework that aligns with Students Oriented and Sustainable Development Goals (SDGs) and seeks to create meaningful impact on campus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {manifestoData.slice(0, 3).map((item, index) => (
            <ManifestoPoint key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 lg:max-w-4xl lg:mx-auto">
             {manifestoData.slice(3).map((item, index) => (
                <div key={index+3} className="lg:flex lg:justify-center">
                     <div className="lg:w-full">
                        <ManifestoPoint icon={item.icon} title={item.title} description={item.description} />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
