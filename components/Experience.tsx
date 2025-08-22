
import React from 'react';

const leadershipRoles = [
  {
    role: "Social Director",
    organization: "Students’ Union (2022/2023 session)"
  },
  {
    role: "Program and Project Coordinator (EV2)",
    organization: "Junior Chamber International (JCI)"
  },
  {
    role: "Vice President I",
    organization: "Remo Students’ Association"
  },
  {
    role: "Captain",
    organization: "Tourism Students’ Association, MAPOLY"
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-mapoly-light">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-center">
            <img src="https://i.imgur.com/RXcLlgp.png" alt="Leadership Experience" className="mx-auto h-32 w-32 md:h-48 md:w-48 object-contain mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-mapoly-green mb-4">
            My Experience in Student Leadership
            </h2>
            <div className="w-24 h-1 bg-mapoly-gold mx-auto mb-8"></div>
            
            <p className="mb-10">
            During my National Diploma (ND) program, I served under Team Probity as the <strong>Social Director</strong> of the Students’ Union (2022/2023 session), under the leadership of Comrade Sen. Adelola Hezekiah (Easy). This position, along with my other roles, gave me the opportunity to coordinate campus-wide events, promote unity among students, and serve our community.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              {leadershipRoles.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-mapoly-green">{item.role}</h3>
                  <p className="text-gray-600 mt-1">{item.organization}</p>
                </div>
              ))}
            </div>
            
            <p className="mt-10">
                These roles have broadened my capacity to lead excellently, manage projects, and respond to the real needs of the student body.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
