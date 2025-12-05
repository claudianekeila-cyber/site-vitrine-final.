import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import { SectionId } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection(SectionId.HERO)}>
          <div className="bg-terra-950 p-2 rounded-lg text-peach-200">
            <MapPin size={24} />
          </div>
          <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-terra-950' : 'text-terra-950'}`}>
            Vitrine<span className="text-orange-600">Digital</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection(SectionId.SERVICES)} className="text-stone-600 hover:text-terra-950 font-medium transition-colors">Serviços</button>
          <button onClick={() => scrollToSection(SectionId.AUDIT)} className="text-stone-600 hover:text-terra-950 font-medium transition-colors">Auditoria IA</button>
          <button onClick={() => scrollToSection(SectionId.TESTIMONIALS)} className="text-stone-600 hover:text-terra-950 font-medium transition-colors">Casos de Sucesso</button>
          <button 
            onClick={() => scrollToSection(SectionId.CONTACT)}
            className="bg-terra-950 text-peach-50 px-6 py-2 rounded-full font-semibold hover:bg-terra-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-terra-950">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          <button onClick={() => scrollToSection(SectionId.SERVICES)} className="text-left text-stone-700 py-2 border-b border-gray-100">Serviços</button>
          <button onClick={() => scrollToSection(SectionId.AUDIT)} className="text-left text-stone-700 py-2 border-b border-gray-100">Auditoria IA</button>
          <button onClick={() => scrollToSection(SectionId.TESTIMONIALS)} className="text-left text-stone-700 py-2 border-b border-gray-100">Casos de Sucesso</button>
          <button onClick={() => scrollToSection(SectionId.CONTACT)} className="bg-terra-950 text-white py-3 rounded-lg text-center font-bold">Fale Conosco</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;