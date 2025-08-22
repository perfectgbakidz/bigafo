
import React from 'react';

const Declaration: React.FC = () => {
  return (
    <section id="declaration" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
            <img src="https://i.imgur.com/NrvR8Hc.png" alt="Declaration of Intent" className="mx-auto h-32 w-32 md:h-48 md:w-48 object-contain mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-mapoly-green mb-4">
            Public Declaration of Intent
            </h2>
            <div className="w-24 h-1 bg-mapoly-gold mx-auto mb-8"></div>
        </div>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
            <p className="mb-4">
                At a time when student leadership demands clarity of vision, proven service, and inclusive engagement, I, <strong>Temitope Afolabi</strong>, popularly known as <strong>Big Afo</strong>, publicly express my interest in contesting for the office of the <strong>President, Students’ Union Government (SUG), Moshood Abiola Polytechnic, Abeokuta.</strong>
            </p>
            <p>
                This aspiration stems not from mere ambition, but from a heartfelt commitment to building a union that is responsive, people-driven, and results-oriented. I believe that with unity, innovation, and accountable leadership, we can transform our Students’ Union into a hub of progress and opportunity for every MAPOLY student.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Declaration;
