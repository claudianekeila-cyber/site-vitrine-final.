import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight, Store } from 'lucide-react';
import { SectionId, AuditResult } from '../types';
import { generateQuickAudit } from '../services/geminiService';

const AuditTool: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [niche, setNiche] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !niche) return;

    setLoading(true);
    setResult(null);
    
    // Artificial delay for UX perception of "analysis" if API is too fast, 
    // but mostly relying on Gemini response time.
    try {
      const data = await generateQuickAudit(businessName, niche);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={SectionId.AUDIT} className="py-20 bg-stone-900 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900 via-stone-900 to-black"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-orange-400 font-medium tracking-wider text-sm uppercase mb-2 block">Tecnologia Exclusiva</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simulador de Potencial com <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-peach-300">Inteligência Artificial</span>
          </h2>
          <p className="text-stone-400 text-lg">
            Descubra o que está faltando no seu perfil do Google agora mesmo. É gratuito.
          </p>
        </div>

        <div className="bg-stone-800/50 border border-stone-700 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-2xl">
          {!result ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-stone-300 text-sm font-medium ml-1">Nome do Negócio</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Ex: Pizzaria do João"
                      className="w-full bg-stone-900/80 border border-stone-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-stone-600"
                      required
                    />
                    <Store className="absolute right-4 top-3.5 text-stone-500" size={18} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-stone-300 text-sm font-medium ml-1">Ramo de Atuação</label>
                  <input 
                    type="text" 
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    placeholder="Ex: Odontologia, Mecânica..."
                    className="w-full bg-stone-900/80 border border-stone-600 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all placeholder-stone-600"
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-terra-800 hover:from-orange-500 hover:to-terra-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.01] shadow-lg flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Analisando seu nicho...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={20} className="text-yellow-200" />
                    <span>Gerar Diagnóstico Rápido</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="animate-fade-in">
              <div className="border-b border-stone-700 pb-6 mb-6">
                 <h3 className="text-2xl font-bold text-white mb-2">Diagnóstico para: <span className="text-orange-400">{businessName}</span></h3>
                 <p className="text-stone-400 text-sm italic">Baseado nas melhores práticas para: {niche}</p>
              </div>

              <div className="space-y-6">
                <div>
                   <h4 className="text-peach-200 font-semibold mb-3 flex items-center gap-2">
                     <Sparkles size={16} />
                     Oportunidades Identificadas:
                   </h4>
                   <ul className="space-y-3">
                     {result.checklist.map((item, index) => (
                       <li key={index} className="flex items-start gap-3 text-stone-300 bg-stone-900/50 p-3 rounded-lg border border-stone-700/50">
                         <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-900/50 text-orange-400 flex items-center justify-center text-xs font-bold border border-orange-800">
                           {index + 1}
                         </span>
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>

                <div className="bg-gradient-to-r from-terra-950 to-stone-900 p-4 rounded-xl border border-terra-900/50">
                   <p className="text-orange-100 font-medium text-center">"{result.summary}"</p>
                </div>

                <div className="pt-4 flex justify-center">
                   <button 
                    onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})}
                    className="text-white hover:text-orange-300 font-semibold flex items-center gap-2 transition-colors border-b border-orange-500 pb-1"
                   >
                     Quero aplicar essas melhorias com a Vitrine Digital <ArrowRight size={16} />
                   </button>
                </div>
                
                <button 
                  onClick={() => setResult(null)} 
                  className="text-stone-500 text-xs hover:text-stone-300 underline block mx-auto mt-4"
                >
                  Fazer nova simulação
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center">
           <p className="text-stone-500 text-xs uppercase tracking-widest">Powered by Google Gemini AI</p>
        </div>
      </div>
    </section>
  );
};

export default AuditTool;