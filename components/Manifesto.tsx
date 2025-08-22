import React from 'react';

interface ManifestoPointProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ManifestoPoint: React.FC<ManifestoPointProps> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
    <div className="text-mapoly-gold mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-mapoly-green mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WelfareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const OpportunitiesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const LeadershipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
const PragmatismIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;

const manifestoData = [
    {
        icon: <LeadershipIcon />,
        title: "Accountability",
        description: "I believe leadership should be about real actions, not empty promises. I will work with transparency, and every step I take will be open for student scrutiny. You deserve a leader who doesn’t just talk — but one who listens, plans, and delivers practical results.",
    },
     {
        icon: <PragmatismIcon />,
        title: "Pragmatism",
        description: "I promise to approach and tackle problems faced by the students' populace with flexibility while putting in consideration the students' interest and request."
    },
    {
        icon: <WelfareIcon />,
        title: "Functional Welfarism",
        description: "Student welfare is not a luxury — it’s a right. From hostel conditions to campus safety and mental health awareness, my administration will push for functional structures that truly serve the needs of every student. I’m here to ensure no one is left behind."
    },
    {
        icon: <OpportunitiesIcon />,
        title: "Opportunity Development",
        description: "MAPOLY is full of talented and visionary youths. I will work to create skill-based programs, workshops, tech exposure, and entrepreneurial platforms that help us not just graduate, but succeed beyond school. You deserve access, and I will fight for that access."
    }
];

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 bg-mapoly-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <img src="https://i.imgur.com/te7TqnX.png" alt="AFO Vision 2025" className="mx-auto h-32 w-32 md:h-48 md:w-48 object-contain mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-mapoly-green mb-4">
            AFO Vision 2025: My Commitment
          </h2>
          <div className="w-24 h-1 bg-mapoly-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {manifestoData.map((item, index) => (
            <ManifestoPoint 
                key={index} 
                icon={item.icon} 
                title={item.title} 
                description={item.description}
            />
          ))}
        </div>
         <div className="text-center mt-16 max-w-3xl mx-auto">
            <p className="text-2xl font-semibold text-gray-800 italic leading-relaxed">
                "This is not just about me. It’s about us. Let’s write a new chapter where student government truly works for students."
            </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;