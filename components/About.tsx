
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-mapoly-green mb-4">
            Public Declaration of Intent
            </h2>
            <div className="w-24 h-1 bg-mapoly-gold mx-auto mb-8"></div>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-8">
          <div>
            <p className="mb-4">
                At a time when student leadership demands clarity of vision, proven service, and inclusive engagement, I, <strong>Temitope Afolabi</strong>, popularly known as <strong>Big Afo</strong>, publicly express my interest in contesting for the office of the <strong>President, Students’ Union Government (SUG), Moshood Abiola Polytechnic, Abeokuta.</strong>
            </p>
            <p>
                This aspiration stems not from mere ambition, but from a heartfelt commitment to building a union that is responsive, people-driven, and results-oriented. I believe that with unity, innovation, and accountable leadership, we can transform our Students’ Union into a hub of progress and opportunity for every MAPOLY student.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-mapoly-green mb-4 text-center">My Experience in Student Leadership</h3>
            <p className="mb-4 text-center">
              During my National Diploma (ND) program, I served under Team Probity as the <strong>Social Director</strong> of the Students’ Union (2022/2023 session), under the leadership of Comrade Sen. Adelola Hezekiah (Easy). This position gave me the opportunity to coordinate campus-wide events and promote unity among students.
            </p>
            <p className="mb-4 text-center">In addition to that, I have served in several other leadership roles across student organizations, including:</p>
            <ul className="list-disc list-inside max-w-md mx-auto space-y-2">
                <li><strong>Program and Project Coordinator (EV2)</strong> – Junior Chamber International (JCI)</li>
                <li><strong>Vice President I</strong> – Remo Students’ Association</li>
                <li><strong>Captain</strong> – Tourism Students’ Association, MAPOLY</li>
            </ul>
            <p className="mt-4 text-center">
                These roles have broadened my capacity to lead excellently, manage projects, and respond to the real needs of the student body.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
