import React from 'react';
import { MapPin, Instagram, Linkedin, Mail } from 'lucide-react';
import { SectionId } from '../types';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <MapPin className="text-orange-500" size={24} />
              <span className="text-2xl font-bold">VitrineDigital</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Especialistas em posicionamento local. Ajudamos empresas reais a terem resultados reais através do Google.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-orange-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-orange-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-orange-400 transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-semibold">WhatsApp:</span>
                <span className="hover:text-white transition-colors cursor-pointer">(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-semibold">Email:</span>
                <span className="hover:text-white transition-colors cursor-pointer">contato@vitrinedigital.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 font-semibold">Endereço:</span>
                <span>Av. Paulista, 1000 - São Paulo, SP</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
             <h3 className="text-white font-bold text-lg mb-6">Pronto para crescer?</h3>
             <p className="mb-4 text-sm">Agende uma consultoria estratégica de 30 minutos.</p>
             <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-lg transition-colors shadow-lg">
               Solicitar Contato
             </button>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Vitrine Digital Marketing. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Termos de Uso</a>
            <a href="#" className="hover:text-stone-300">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;