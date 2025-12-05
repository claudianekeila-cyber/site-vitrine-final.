import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AuditTool from './components/AuditTool';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-peach-50 selection:bg-orange-200 selection:text-terra-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AuditTool />
        
        {/* Simple Social Proof / Numbers Section */}
        <section className="bg-terra-950 text-peach-100 py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-around text-center gap-8">
            <div>
              <div className="text-4xl font-bold mb-2 text-white">450%</div>
              <div className="text-sm uppercase tracking-widest text-orange-200/80">Aumento Médio em Ligações</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">Top 3</div>
              <div className="text-sm uppercase tracking-widest text-orange-200/80">Posição Alvo no Google</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-white">24/7</div>
              <div className="text-sm uppercase tracking-widest text-orange-200/80">Sua Vitrine Ativa</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;