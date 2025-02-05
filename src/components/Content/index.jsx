import React, { useState, useEffect } from 'react';
import './Content.css'
import vectorpeoplework from '../../assets/vector-people-work2.svg'
import vectorpeople from '../../assets/vector-people-work-logo2.svg'

const Content = () => {
    return (
        <div className="menu-content">
            <div className="itens-text">
                <div className="menu-text-title">
                    Alcance seus objetivos com nossas soluções em <span class="destaque">informática</span>,
                     <span class="destaque"> segurança eletrônica</span> e <span class="destaque">automatização empresarial</span>.
                </div>
                <div className="menu-text-subtitle">
                    Na Trinity, oferecemos <span class="destaque"> soluções</span> em manutenção de computadores, segurança para sua residência ou empresa e automação comercial com excelência.
                </div>
                <div className="buttons-text">
                    <div className="button-solucao">
                        <a href="#solucao1">Soluções</a>
                    </div>
                    <div className="button-faleconosco">
                    <a href="#contato1">Fale Conosco</a>
                    </div>
                </div>
            </div>

            <div className="menu-img">
                <img src={vectorpeople} />
            </div>
        </div>
    );
}

export default Content
