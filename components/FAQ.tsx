
import React, { useState } from 'react';
import type { FAQItem } from '../types';

interface FAQProps {
  content: FAQItem[];
}

const FAQAccordionItem: React.FC<{ item: FAQItem, isOpen: boolean, onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b-2 border-slate-700">
      <button
        onClick={onClick}
        className="w-full text-left py-6 px-4 flex justify-between items-center focus:outline-none"
      >
        <span className="text-xl font-semibold text-white">{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <i className="fa-solid fa-chevron-down text-cyan-400"></i>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 px-4 text-gray-300">{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC<FAQProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-400">Ainda tem dúvidas? A gente responde.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {content.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
