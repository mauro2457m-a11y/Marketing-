
import React from 'react';
import type { Feature } from '../types';

interface FeaturesProps {
  content: Feature[];
}

const Features: React.FC<FeaturesProps> = ({ content }) => {
  return (
    <section id="features" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">O que você vai aprender?</h2>
            <p className="text-lg text-gray-400">Um curso completo para transformar sua carreira.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.map((feature, index) => (
            <div key={index} className="bg-slate-900 p-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="text-cyan-400 text-5xl mb-6 inline-block">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
