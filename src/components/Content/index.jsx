import React, { useState, useEffect } from 'react';
import './Content.css'
import vectorpeoplework from '../../assets/vector-people-work2.svg'


const Content = () => {
    return (
        <div className="menu-content">
            <div className="itens-text">
                <div className="menu-text-title">
                    Alcance seus objetivos com nossas soluções em informática, segurança eletrônica e automatização empresarial.
                </div>
                <div className="menu-text-subtitle">
                    Na Trinity, nós temos a solução para seus problemas, realizamos manutenção no seu computador pessoal ou da sua empresa,
                    protegemos o que é mais importante: sua residência e/ou sua empresa e oferecemos o que há de melhor no mercado da automatização comercial.
                </div>
                <div className="buttons-text">
                    <div className="button-solucao">
                        Soluções
                    </div>
                    <div className="button-faleconosco">
                        Fale Conosco
                    </div>
                </div>
            </div>

            <div className="menu-img">
                <img src={vectorpeoplework} />
            </div>
        </div>
    );
}

export default Content
