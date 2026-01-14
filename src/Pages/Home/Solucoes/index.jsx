import React from 'react';
import './Solucoes.css'
import IconSistema from '../../../assets/sistema-icon.svg'
import ScrollReveal from "../../../components/Hooks/ScrollReveal";
import ScrollRevealGroup from "../../../components/Hooks/ScrollRevealGroup";
import { svg } from 'framer-motion/m';

const solutions = [

  {
    icon: (
      <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 21L7.18762 18.9912C4.55966 17.1141 3 14.0834 3 10.8538L3 5.75432C3 5.30784 3.29598 4.91546 3.72528 4.7928L9.72528 3.07852C9.90483 3.02721 10.0952 3.02721 10.2747 3.07852L16.2747 4.7928C16.704 4.91546 17 5.30784 17 5.75432V7.50002M19 15V13C19 11.8955 18.1046 11 17 11C15.8954 11 15 11.8955 15 13V15M19 15H15M19 15C20.1046 15 21 15.8955 21 17V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V17C13 15.8955 13.8954 15 15 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    title: 'Segurança Eletrônica',
    description: 'Proteja seu patrimônio com sistemas de segurança de ponta. Oferecemos monitoramento por câmeras, alarmes inteligentes.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Informática',
    description: 'Garanta a eficiência da sua infraestrutura de TI. Realizamos manutenção de computadores, notebooks, entre outros...',
  },
  {
    icon: (
      <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M15 4L13 6L15 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M19 4L21 6L19 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M12 16V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M8 20H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    ),
    title: 'Trinity ERP',
    description: 'Centralize a gestão da sua empresa e tome decisões mais inteligentes. Nosso ERP integra financeiro, fiscal, estoque e vendas.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: 'Landing Pages',
    description: 'Páginas de alta conversão com design atraente e otimizadas para resultados. Perfeitas para campanhas e lançamentos.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Sites Institucionais',
    description: 'Presença digital profissional para sua empresa. Sites responsivos e modernos que transmitem credibilidade.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
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