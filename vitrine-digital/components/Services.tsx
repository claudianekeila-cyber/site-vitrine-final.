import React from 'react';
import { Search, Map, Star, Smartphone, BarChart3, Camera } from 'lucide-react';
import { SectionId } from '../types';

const services = [
  {
    icon: <Map className="text-orange-500" size={32} />,
    title: "Otimização de Perfil",
    description: "Configuração completa do Google Meu Negócio para garantir que sua empresa seja encontrada primeiro."
  },
  {
    icon: <Star className="text-orange-500" size={32} />,
    title: "Gestão de Reputação",
    description: "Estratégias para conseguir mais avaliações 5 estrelas e respostas profissionais para todos os clientes."
  },
  {
    icon: <Search className="text-orange-500" size={32} />,
    title: "SEO Local Avançado",
    description: "Técnicas de palavras-chave locais para dominar as buscas na sua cidade e bairro."
  },
  {
    icon: <Camera className="text-orange-500" size={32} />,
    title: "Fotos Profissionais",
    description: "Orientação e curadoria de imagens que transmitem profissionalismo e atraem cliques."
  },
  {
    icon: <Smartphone className="text-orange-500" size={32} />,
    title: "Atualizações Semanais",
    description: "Postagens de ofertas, novidades e eventos para manter seu perfil ativo e relevante."
  },
  {
    icon: <BarChart3 className="text-orange-500" size={32} />,
    title: "Relatórios de Performance",
    description: "Dados claros sobre quantas pessoas ligaram ou pediram rota para sua empresa."
  }
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            A <span className="text-terra-950 underline decoration-orange-400 decoration-4 underline-offset-4">Vitrine Completa</span> para seu Negócio
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg">
            Não basta apenas ter uma ficha no Google. É preciso estratégia, constância e técnica para transformar visualizações em vendas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-peach-50/50 hover:bg-white border border-transparent hover:border-orange-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl cursor-default"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-stone-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;