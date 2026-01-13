import React, { useState, useEffect } from 'react';
import './Content.css'
import vectorpeople from '../../../assets/vector-people-work-logo2.svg'
import ScrollReveal from '../../../components/Hooks/ScrollReveal'
import ScrollRevealGroup from '../../../components/Hooks/ScrollRevealGroup'

const Content = () => {
  return (
    <div className="menu-content">
      {/* TEXTO — stagger vertical */}
      <ScrollRevealGroup stagger={0.18}>
        <div className="itens-text">

          <ScrollReveal animation="fade">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Criando experiências digitais
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide" direction="up">
            <div className="menu-text-title">
              Alcance seus objetivos com nossas soluções em
              <span className="destaque"> informática</span>,
              <span className="destaque"> segurança eletrônica</span> e
              <span className="destaque"> automatização empresarial</span>.
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide" direction="up">
            <div className="menu-text-subtitle">
              Na Trinity, oferecemos
              <span className="destaque"> soluções</span> em manutenção de computadores,
              segurança para sua residência ou empresa e automação comercial com excelência.
            </div>
          </ScrollReveal>

          <ScrollReveal
            animation="slide"
            direction="up"
            transitionType="spring"
          >
            <div className="buttons-text">
              <a href="#solucao1" className="button-solucao">Soluções</a>
              <a href="#contato1" className="button-faleconosco">Fale Conosco</a>
            </div>
          </ScrollReveal>

        </div>
      </ScrollRevealGroup>

      {/* IMAGEM — entrada lateral suave */}
      <ScrollRevealGroup stagger={0}>
        <ScrollReveal
          animation="slide"
          direction="left"
        >
          <div className="menu-img">
            <img src={vectorpeople} alt="Ilustração de pessoas trabalhando" />
          </div>
        </ScrollReveal>
      </ScrollRevealGroup>
    </div>
  );
};

export default Content;
