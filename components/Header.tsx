
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Benefícios' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#faq', label: 'Dúvidas' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white flex items-center gap-2">
          <i className="fa-solid fa-graduation-cap text-cyan-400"></i>
          <span>Marketing Pro</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">{link.label}</a>
          ))}
        </nav>
        <a href="#" className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105">
          Inscrever-se
        </a>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">{link.label}</a>
            ))}
            <a href="#" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105">
              Inscrever-se
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
