
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialsProps {
  content: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Histórias de Sucesso</h2>
            <p className="text-lg text-gray-400">Veja o que nossos alunos estão dizendo.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.map((testimonial, index) => (
            <div key={index} className="bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col">
              <div className="flex-grow">
                <i className="fa-solid fa-quote-left text-cyan-400 text-3xl mb-4"></i>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center mt-auto">
                <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-400" />
                <div>
                  <p className="font-bold text-lg text-white">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
