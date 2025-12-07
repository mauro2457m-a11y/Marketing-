
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fab fa-facebook-f text-2xl"></i></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fab fa-instagram text-2xl"></i></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><i className="fab fa-youtube text-2xl"></i></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Marketing Pro. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Feito com <i className="fa-solid fa-heart text-red-500"></i> e React.</p>
      </div>
    </footer>
  );
};

export default Footer;
