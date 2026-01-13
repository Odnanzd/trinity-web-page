import React from 'react';
import './Solucoes.css'
import ScrollReveal from "../../../components/Hooks/ScrollReveal";
import ScrollRevealGroup from "../../../components/Hooks/ScrollRevealGroup";

const solutions = [
  
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Web Apps',
    description: 'Aplicações web personalizadas para automatizar processos e melhorar a produtividade do seu negócio.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Interfaces intuitivas e experiências de usuário memoráveis. Design centrado no usuário que encanta.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10"/>
        <path d="M12 20V4"/>
        <path d="M6 20v-6"/>
      </svg>
    ),
    title: 'SEO & Performance',
    description: 'Otimização para mecanismos de busca e performance. Seu site rápido e bem posicionado no Google.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    title: 'Landing Pages',
    description: 'Páginas de alta conversão com design atraente e otimizadas para resultados. Perfeitas para campanhas e lançamentos.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Sites Institucionais',
    description: 'Presença digital profissional para sua empresa. Sites responsivos e modernos que transmitem credibilidade.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: 'E-commerce',
    description: 'Lojas virtuais completas com checkout seguro, gestão de produtos e integração com gateways de pagamento.',
  }
  
];

const Solucoes = () => {
  return (
    <section className="section solutions" id="solutions">
      <div className="container-stats">

        {/* HEADER */}
        <ScrollRevealGroup stagger={0.15}>
          <div className="section-header">
            <ScrollReveal animation="fade">
              <span className="section-subtitle">O que fazemos</span>
            </ScrollReveal>

            <ScrollReveal animation="slide" direction="up">
              <h2 className="section-title">Nossas Soluções</h2>
            </ScrollReveal>

            <ScrollReveal animation="slide" direction="up">
              <p className="section-description">
                Oferecemos serviços completos de desenvolvimento web,
                do design à implementação.
              </p>
            </ScrollReveal>
          </div>
        </ScrollRevealGroup>

        {/* GRID */}
        <ScrollRevealGroup stagger={0.18}>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <ScrollReveal key={index} animation="slide" direction="up">
                <div className="solution-card">
                  <div className="solution-icon">{solution.icon}</div>
                  <h3 className="solution-title">{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollRevealGroup>

      </div>
    </section>
  );
};

export default Solucoes;