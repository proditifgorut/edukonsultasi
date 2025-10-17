import { useState } from 'react';
import { GraduationCap, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Layanan', href: '#services' },
    { name: 'Mengapa Kami', href: '#features' },
    { name: 'Harga', href: '#pricing' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-brand-blue" />
            <span className="text-xl font-bold text-gray-900">EduTech Consultant</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-600 hover:text-brand-blue font-medium transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
             <a href="#pricing" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
              Mulai
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-blue hover:bg-gray-100">
                {link.name}
              </a>
            ))}
          </div>
          <div className="p-4 border-t">
             <a href="#pricing" onClick={() => setIsOpen(false)} className="w-full text-center bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-6 rounded-full transition-colors">
              Mulai
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
