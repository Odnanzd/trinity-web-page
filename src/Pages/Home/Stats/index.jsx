import React from 'react';
import './Stats.css'
import ScrollReveal from '../../../components/Hooks/ScrollReveal';
import ScrollRevealGroup from '../../../components/Hooks/ScrollRevealGroup'

const stats = [
  { number: '50+', label: 'Projetos Entregues' },
  { number: '40+', label: 'Clientes Satisfeitos' },
  { number: '5', label: 'Anos de Experiência' },
  { number: '100%', label: 'Satisfação' },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="container">
        <ScrollRevealGroup stagger={0.2}>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={index}
                animation="slide"
                direction="up"
              >
                <div className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollRevealGroup>
      </div>
    </section>
  );
};

export default Stats;