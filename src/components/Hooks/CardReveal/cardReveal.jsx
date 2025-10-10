import React from 'react';
import useScrollReveal from '../useScrollReveal';

// Importe o CSS se ainda não o fez globalmente
import './cardReveal.css'; 

function Card({ children }) {
  // Use o hook no seu componente
  const [ref, isVisible] = useScrollReveal();

  // Construa a string de classes dinamicamente
  const classes = `card reveal ${isVisible ? 'visible' : ''}`;

  return (
    // Anexe a ref ao elemento que você quer observar
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}

export default Card;