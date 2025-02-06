import React, { useState, useEffect } from 'react';
import './Topbar.css'
import '../../assets/fonts/fonts.css';
import logotrinity from '../../assets/logo_trinity_topbar.svg'
import iconsetadown from '../../assets/iconsetadown.svg'

const Topbar = () => {

    return (

        <div className="topbar">
            <div className="imglogo">
                <img src={logotrinity} />
            </div>
            <nav>
                <ul className="menu-list">
                    <li><a href="#solucao1">Soluções</a></li>
                    <li className="drop-hover-nov"><a>Novidades
                        <img src={iconsetadown} />
                    </a>
                        <div className="drop">
                            <a href="#">Inauguração</a>
                            <a href="#">Promoções</a>
                        </div>
                    </li>
                    <li><a href="#">A Trinity</a></li>
                    <li className="drop-hover-cliente"><a>Área do Cliente
                        <img src={iconsetadown} />
                    </a>
                        <div className="drop">
                            <a href="#">Suporte</a>
                            <a href="#">Painel ADM</a>
                        </div>
                    </li>
                </ul>
            </nav>

        </div>


    );
}

export default Topbar