
import React from 'react';
import { ServiceCard } from './components/ServiceCard';
import { WhatsAppButton } from './components/Button';
import { ADDRESSES } from './constants';

const App: React.FC = () => {
  // URL da foto para o head em altíssima qualidade (sz=w2000)
  const heroPhotoUrl = "https://drive.google.com/thumbnail?id=1i_bqhovGwivkh-PLGbvNMgVSMkzuzPV3&sz=w2000";

  return (
    <div className="min-h-screen flex flex-col bg-ice">
      {/* 1. HERO SECTION (Attention) */}
      <section className="relative min-h-[85vh] flex items-center bg-navy text-white overflow-hidden">
        {/* Elemento Decorativo de Fundo */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 py-12 md:py-16 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center space-x-2 bg-gold/20 border border-gold/30 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-gold font-bold text-[10px] md:text-xs tracking-widest uppercase">
                Banzer Advocacia | Excelência Jurídica há 35 Anos
              </span>
            </div>
            
            <h1 className="font-title text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1]">
              <span className="block mb-2">Regularização de</span>
              <span className="text-gold">Imóveis</span> e Inventários
            </h1>
            
            <p className="text-lg md:text-xl text-ice/70 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Segurança jurídica e tranquilidade absoluta para o seu patrimônio. Atendimento premium focado em agilidade e resultados concretos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <WhatsAppButton className="!px-10 py-5 text-sm" />
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end relative order-1 md:order-2">
            {/* Foto agora visível em dispositivos móveis (removido hidden) */}
            <div className="relative w-full max-w-[260px] md:max-w-[300px] aspect-[3/4] bg-navy rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gold/20">
              <img 
                src={heroPhotoUrl} 
                alt="Dr. Hermes Banzer" 
                className="w-full h-full object-cover object-top transition-all duration-1000 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-title text-lg md:text-xl text-gold font-bold">Banzer Advocacia</p>
                <p className="text-ice/50 text-[10px] uppercase tracking-[0.2em]">OAB/SP 109.692</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIFERENCIAIS SECTION (Conforme Screenshot fornecido) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            <div className="space-y-12">
              {/* Item 1: Olhar Clínico */}
              <div className="group flex items-start space-x-5">
                <div className="flex-shrink-0 bg-gold/5 p-4 rounded-full text-gold transition-colors group-hover:bg-gold group-hover:text-white shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-title text-2xl font-bold text-navy mb-2">Olhar Clínico</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Identificamos o caminho mais rápido (e menos custoso) para a regularização do seu imóvel ou conclusão do seu inventário.
                  </p>
                </div>
              </div>

              {/* Item 2: Segurança Institucional */}
              <div className="group flex items-start space-x-5">
                <div className="flex-shrink-0 bg-gold/5 p-4 rounded-full text-gold transition-colors group-hover:bg-gold group-hover:text-white shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-title text-2xl font-bold text-navy mb-2">Segurança Institucional</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Uma atuação pautada pela ética e pelo respeito absoluto aos trâmites legais, garantindo que o seu direito seja inquestionável.
                  </p>
                </div>
              </div>

              {/* Item 3: Agilidade Estratégica */}
              <div className="group flex items-start space-x-5">
                <div className="flex-shrink-0 bg-gold/5 p-4 rounded-full text-gold transition-colors group-hover:bg-gold group-hover:text-white shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-title text-2xl font-bold text-navy mb-2">Agilidade Estratégica</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Dominamos os processos extrajudiciais em cartórios, permitindo soluções muito mais velozes do que o ritmo lento do Judiciário.
                  </p>
                </div>
              </div>

              {/* Estatísticas do Screenshot */}
              <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-100">
                <div className="text-center">
                  <p className="font-title text-4xl text-gold font-black">35+</p>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold mt-2">Anos de Atuação</p>
                </div>
                <div className="text-center">
                  <p className="font-title text-4xl text-gold font-black">2k+</p>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold mt-2">Casos Resolvidos</p>
                </div>
                <div className="text-center">
                  <p className="font-title text-4xl text-gold font-black">98%</p>
                  <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold mt-2">Satisfação</p>
                </div>
              </div>
            </div>

            <div className="bg-navy p-10 md:p-14 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -mr-16 -mt-16 rounded-full"></div>
              <h2 className="font-title text-3xl md:text-4xl text-white font-bold mb-8 italic leading-tight text-center md:text-left">
                "A sua tranquilidade patrimonial é a nossa maior entrega estratégica."
              </h2>
              <p className="text-ice/60 leading-relaxed mb-10 text-lg text-center md:text-left">
                Com mais de três décadas de experiência, transformamos processos complexos em soluções simples e seguras para sua família ou empresa.
              </p>
              <WhatsAppButton className="w-full !py-5" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (Interest) */}
      <section id="servicos" className="py-24 bg-ice">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-title text-4xl font-bold text-navy mb-4">Nossas Especialidades</h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Regularização Imobiliária"
              description="Saneamento de pendências documentais, escrituras e registros para garantir a plena propriedade."
              theme="gold"
              items={["Usucapião Extrajudicial", "Retificação de Matrícula", "Desmembramentos"]}
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <ServiceCard 
              title="Direito do Agronegócio"
              description="Consultoria jurídica especializada para produtores rurais e regularização de grandes glebas."
              theme="green"
              items={["Georreferenciamento", "Contratos Agrários", "Crédito Rural"]}
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />
            <ServiceCard 
              title="Inventários e Sucessão"
              description="Condução ética e ágil de partilha de bens, visando harmonia familiar e economia tributária."
              theme="original"
              items={["Holding Familiar", "Inventário em Cartório", "Testamentos"]}
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-title text-4xl text-navy font-bold mb-6">Proteja seu Patrimônio Hoje</h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Não deixe para amanhã a segurança do que você levou uma vida para construir. Fale agora com nossa equipe especializada.
          </p>
          <WhatsAppButton className="!bg-navy hover:!bg-navy/90 !px-12 py-6" />
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-navy text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 pb-16 border-b border-white/10">
            <div className="space-y-6">
              <h3 className="font-title text-2xl font-bold text-gold">Banzer Advocacia</h3>
              <p className="text-ice/50 text-sm leading-relaxed max-w-xs">
                35 anos dedicados à excelência jurídica em Regularização de Imóveis, Direito Agrário e Inventários.
              </p>
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-1">Inscrição</span>
                <span className="text-ice/80 text-sm">OAB/SP 109.692</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white/40">Contatos</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-ice/80 text-sm hover:text-gold transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hermes@banzer.adv.br">hermes@banzer.adv.br</a>
                </li>
                <li className="pt-2">
                  <WhatsAppButton className="!bg-gold/10 !text-gold !border !border-gold/30 !py-3 hover:!bg-gold hover:!text-white w-full md:w-auto text-xs" />
                </li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white/40">Nossas Unidades</h4>
              <div className="space-y-8">
                {ADDRESSES.map((addr, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-gold font-bold text-xs uppercase tracking-wider">{addr.city}</p>
                    <p className="text-ice/60 text-sm">{addr.location}</p>
                    <p className="text-ice/30 text-[10px]">{addr.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-ice/20 text-[10px] gap-4">
            <p>&copy; {new Date().getFullYear()} Banzer Advocacia. Todos os direitos reservados.</p>
            <p className="uppercase tracking-widest">Compromisso com o Direito e a Verdade</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
