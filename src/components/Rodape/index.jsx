import React, { useState, useEffect } from 'react';
import './Rodape.css'
import logotrinity from "../../assets/logo_trinity_topbar.svg"
import whatsapplogo from "../../assets/whatsapp-icon.svg"


const Rodape = () => {
    return (
        <div className="rodape-box">
            <div className="madefor-trinity-text">
                Feito por equipe de desenvolvimento Trinity
            </div>
            <div className="direitos-text">
                2025 © Todos os direitos reservados.
            </div>
            <div className="logo-trinity-rodape">
                <img src={logotrinity} alt="" />
            </div>
        </div>
    );
}

export default Rodape