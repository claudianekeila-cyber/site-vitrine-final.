import React from 'react';
import { ArrowRight, CheckCircle, MessageCircle, Star, Quote } from 'lucide-react';
import { SectionId } from '../types';

const Hero: React.FC = () => {
  const scrollToAudit = () => {
    document.getElementById(SectionId.AUDIT)?.scrollIntoView({ behavior: 'smooth' });
  };

  const testimonials = [
    {
      name: "Marcos Oliveira",
      role: "Dono da Oficina Premium",
      text: "Meu telefone tocava pouco. A Vitrine organizou meu perfil e em 20 dias meu faturamento aumentou 40%.",
      stars: 5
    },
    {
      name: "Dra. Fernanda Costa",
      role: "Clínica Sorriso & Face",
      text: "Eu não aparecia nem na segunda página do Google. Hoje sou a primeira opção do bairro. Trabalho impecável!",
      stars: 5
    },
    {
      name: "Restaurante Sabor Real",
      role: "Gestão Familiar",
      text: "As fotos que eles orientaram mudaram tudo. O movimento no almoço dobrou só com o Google Maps.",
      stars: 5
    },
    {
      name: "Pedro Alencar",
      role: "Advocacia Trabalhista",
      text: "Passaram a autoridade que meu escritório precisava. O Google virou minha principal fonte de clientes qualificados.",
      stars: 5
    }
  ];

  return (
    <section id={SectionId.HERO} className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-peach-200 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-stone-200 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-peach-200">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-terra-950 tracking-wide uppercase">Especialistas em SEO Local</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-stone-900">
              Sua Empresa Não Pode Ser <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-terra-900">Invisível</span>.
            </h1>
            
            <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
              Transformamos perfis do Google em máquinas de vendas. Aumente suas ligações, visitas e faturamento com a <span className="font-bold text-terra-950">Metodologia Vitrine Digital</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToAudit}
                className="flex items-center justify-center space-x-2 bg-terra-950 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-terra-900 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <span>Análise Gratuita com IA</span>
                <ArrowRight size={20} />
              </button>
              
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white text-stone-800 border border-stone-200 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-50 hover:border-green-200 hover:text-green-800 transition-all shadow-md group"
              >
                <MessageCircle size={20} className="text-green-600 group-hover:text-green-700" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>

            <div className="pt-6 flex items-center gap-6 text-sm font-medium text-stone-500">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-600" />
                <span>+100 Empresas Atendidas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-600" />
                <span>Resultados em 30 dias</span>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonials Grid */}
          <div className="flex flex-col items-center">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
               {testimonials.map((t, index) => (
                 <div 
                    key={index} 
                    className="bg-white p-5 rounded-2xl shadow-lg border border-peach-100 hover:border-orange-200 transition-all hover:-translate-y-1 duration-300"
                 >
                   <div className="flex justify-between items-start mb-3">
                     <div className="flex gap-0.5 text-yellow-400">
                       {[...Array(t.stars)].map((_, i) => (
                         <Star key={i} size={14} fill="currentColor" />
                       ))}
                     </div>
                     <Quote size={16} className="text-peach-300" />
                   </div>
                   <p className="text-stone-600 text-sm leading-relaxed mb-4 font-medium">
                     "{t.text}"
                   </p>
                   <div className="flex items-center gap-3 border-t border-stone-100 pt-3">
                     <div className="w-8 h-8 rounded-full bg-terra-950 text-white flex items-center justify-center text-xs font-bold">
                       {t.name.charAt(0)}
                     </div>
                     <div>
                       <p className="text-xs font-bold text-stone-900">{t.name}</p>
                       <p className="text-[10px] text-stone-500 uppercase tracking-wide">{t.role}</p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
             
             {/* Badge - Social Proof (Centered below grid) */}
             <div className="mt-6 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-4 border border-peach-100 transform hover:scale-105 transition-transform duration-300">
                <div className="bg-yellow-400 p-2 rounded-full text-white shadow-sm">
                  <Star size={18} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-stone-800 text-sm leading-tight">Avaliações dos Clientes</span>
                  <div className="flex gap-0.5 text-yellow-400 mt-0.5">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;