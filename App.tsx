
import React from 'react';
import { ServiceCard } from './components/ServiceCard';
import { WhatsAppButton } from './components/Button';
import { ADDRESSES } from './constants';

const App: React.FC = () => {
  const heroPhotoUrl = "https://drive.google.com/thumbnail?id=1ilzh99eJK0Dq30cl0Rw-gnI88MCtR9UZ&sz=w2000";

  return (
    <div className="min-h-screen flex flex-col bg-ice">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-navy text-white overflow-hidden border-b border-gold/20">
        {/* Mobile-Only Experience Badge (Subtle and Elegant) */}
        <div className="md:hidden w-full flex justify-center pt-6 pb-2 animate-fade-in">
          <div className="px-4 py-1.5 border border-gold/40 rounded-full flex items-center space-x-2 bg-gold/5 backdrop-blur-sm">
            <span className="text-[9px] uppercase tracking-[0.3em] font-bold text-gold">35 Anos de Excelência Jurídica</span>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-1/4 h-full bg-gold/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 py-8 md:py-20 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 animate-fade-in text-center md:text-left order-2 md:order-1">
            <div className="hidden md:inline-flex items-center space-x-2 bg-gold/20 border border-gold/30 px-4 py-2 rounded-full mb-2">
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
              <span className="text-gold font-bold text-[10px] md:text-xs tracking-widest uppercase">
                Banzer Advocacia | Excelência Jurídica há 35 Anos
              </span>
            </div>
            
            <h1 className="font-title text-4xl md:text-5xl lg:text-7xl font-black leading-[1.1]">
              <span className="block mb-1 md:mb-2">Regularização de</span>
              <span className="text-gold">Imóveis</span> e Inventários
            </h1>
            
            <p className="text-base md:text-xl text-ice/70 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Segurança jurídica e tranquilidade absoluta para o seu patrimônio. Atendimento premium focado em agilidade e resultados concretos.
            </p>
            
            <div className="flex flex-col items-center md:items-start space-y-5 pt-4">
              <WhatsAppButton className="!px-10 py-5 text-sm w-full sm:w-auto shadow-gold/20" />
              
              <div className="space-y-2">
                <p className="text-gold/90 text-xs md:text-sm font-semibold flex items-center justify-center md:justify-start">
                  <span className="inline-flex items-center justify-center w-5 h-5 bg-gold/10 rounded-full mr-2 text-[10px]">✓</span>
                  Resposta rápida em horário comercial • Sigilo total garantido
                </p>
                <p className="text-ice/40 text-[10px] md:text-[11px] uppercase tracking-widest text-center md:text-left font-medium">
                  Atendimento de Segunda a Sexta, das 9h às 18h
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end relative order-1 md:order-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="relative w-full max-w-[240px] md:max-w-[360px] aspect-[3/4] bg-navy rounded-sm overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)] border border-gold/20 group">
              <img 
                src={heroPhotoUrl} 
                alt="Dr. Hermes Banzer" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                loading="eager"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                <p className="font-title text-lg md:text-xl text-gold font-bold">Banzer Advocacia</p>
                <p className="text-ice/50 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold">OAB/SP 109.692</p>
              </div>
            </div>
            
            {/* Experience Badge (Desktop Only) */}
            <div className="hidden lg:flex absolute -bottom-6 -left-10 bg-white p-6 shadow-2xl items-center space-x-4 border-l-4 border-gold">
              <div className="text-navy font-title text-5xl font-black">35</div>
              <div className="text-[10px] text-navy/60 leading-tight uppercase font-bold tracking-tighter">
                Anos de<br/>Experiência<br/>Comprovada
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIFFERENTIALS */}
      <section className="py-20 md:py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            
            <div className="space-y-12">
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
                    Identificamos o caminho mais rápido e seguro para a regularização do seu imóvel ou conclusão do seu inventário.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-5">
                <div className="flex-shrink-0 bg-gold/5 p-4 rounded-full text-gold transition-colors group-hover:bg-gold group-hover:text-white shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-title text-2xl font-bold text-navy mb-2">Segurança Jurídica</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Atuação pautada pelo respeito absoluto aos trâmites legais, garantindo que o seu direito seja inquestionável.
                  </p>
                </div>
              </div>

              <div className="group flex items-start space-x-5">
                <div className="flex-shrink-0 bg-gold/5 p-4 rounded-full text-gold transition-colors group-hover:bg-gold group-hover:text-white shadow-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-title text-2xl font-bold text-navy mb-2">Agilidade Extrajudicial</h3>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                    Dominamos procedimentos em cartórios e órgãos públicos, permitindo soluções velozes fora da morosidade do Judiciário.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-gray-100">
                <div className="text-center">
                  <p className="font-title text-2xl md:text-4xl text-gold font-black">35+</p>
                  <p className="text-[9px] md:text-xs text-gray-400 uppercase tracking-widest font-bold mt-2">Anos de Atuação</p>
                </div>
                <div className="text-center">
                  <p className="font-title text-2xl md:text-4xl text-gold font-black">2k+</p>
                  <p className="text-[9px] md:text-xs text-gray-400 uppercase tracking-widest font-bold mt-2">Casos Resolvidos</p>
                </div>
                <div className="text-center">
                  <p className="font-title text-2xl md:text-4xl text-gold font-black">98%</p>
                  <p className="text-[9px] md:text-xs text-gray-400 uppercase tracking-widest font-bold mt-2">Satisfação</p>
                </div>
              </div>
            </div>

            <div className="bg-navy p-8 md:p-14 rounded-sm relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 -mr-16 -mt-16 rounded-full opacity-30"></div>
              <h2 className="font-title text-2xl md:text-4xl text-white font-bold mb-8 italic leading-tight text-center md:text-left">
                "A sua tranquilidade patrimonial é a nossa maior entrega estratégica."
              </h2>
              <p className="text-ice/60 leading-relaxed mb-10 text-base md:text-lg text-center md:text-left">
                Transformamos processos complexos em soluções simples e seguras para sua família ou empresa.
              </p>
              <div className="space-y-5">
                <WhatsAppButton className="w-full !py-5 shadow-xl" />
                <div className="space-y-1">
                  <p className="text-gold/80 text-[10px] text-center font-bold uppercase tracking-widest">
                    ✓ Resposta rápida em horário comercial • Sigilo total garantido
                  </p>
                  <p className="text-ice/30 text-[9px] text-center uppercase tracking-[0.2em]">
                    Atendimento: Seg a Sex, 9h às 18h
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="servicos" className="py-24 bg-ice">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-title text-4xl font-bold text-navy mb-4">Especialidades Banzer</h2>
          <div className="h-1 w-20 bg-gold mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              title="Regularização Imobiliária"
              description="Saneamento de pendências documentais, escrituras e registros para garantir a plena propriedade."
              theme="gold"
              items={["Usucapião Extrajudicial", "Retificação de Matrícula", "Escrituras"]}
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <ServiceCard 
              title="Direito do Agronegócio"
              description="Consultoria especializada para produtores rurais e regularização de glebas e propriedades produtivas."
              theme="green"
              items={["Georreferenciamento", "Contratos Agrários", "Gestão Fundiária"]}
              icon={
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
            />
            <ServiceCard 
              title="Inventários e Partilhas"
              description="Condução ágil de partilha de bens, visando harmonia familiar e máxima eficiência tributária."
              theme="original"
              items={["Inventário em Cartório", "Planejamento Sucessório", "Holding"]}
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
      <section className="py-24 bg-white text-center border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-title text-4xl text-navy font-bold mb-6">Proteja seu Patrimônio Hoje</h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Não deixe para amanhã a segurança do que você levou uma vida para construir. Fale agora com nossa equipe de especialistas.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <WhatsAppButton className="!bg-navy hover:!bg-navy/90 !px-12 py-6 shadow-2xl transition-all" />
            
            <div className="space-y-2">
              <p className="text-navy/80 text-sm font-bold flex items-center justify-center">
                <span className="text-gold mr-2 text-base">✓</span> 
                Resposta rápida em horário comercial • Sigilo total garantido
              </p>
              <p className="text-gray-400 text-[11px] uppercase tracking-[0.3em] font-medium">
                Atendimento de Segunda a Sexta, das 9h às 18h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-navy text-white pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 pb-16 border-b border-white/10">
            <div className="space-y-6">
              <h3 className="font-title text-2xl font-bold text-gold">Banzer Advocacia</h3>
              <p className="text-ice/50 text-sm leading-relaxed max-w-xs">
                Mais de três décadas dedicadas à excelência jurídica em Regularização de Imóveis e Inventários.
              </p>
              <div className="pt-2">
                <span className="text-[10px] uppercase tracking-widest text-gold font-bold block mb-1">Inscrição</span>
                <span className="text-ice/80 text-sm">OAB/SP 109.692</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white/40">Contatos Oficiais</h4>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3 text-ice/80 text-sm hover:text-gold transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hermes@banzer.adv.br">hermes@banzer.adv.br</a>
                </li>
                <li className="pt-2">
                  <WhatsAppButton className="!bg-gold/10 !text-gold !border !border-gold/30 !py-3 hover:!bg-gold hover:!text-white w-full md:w-auto text-[10px] shadow-none" />
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
            <p className="uppercase tracking-widest font-semibold">Compromisso com o Direito e a Verdade</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
