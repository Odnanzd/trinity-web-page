import React, { useState, useEffect } from 'react';
import './Topbar.css'
import '../../assets/fonts/fonts.css';
import logotrinity from '../../assets/logo_trinity_topbar.svg'
import iconsetadown from '../../assets/iconsetadown.svg'
import iconmenu from '../../assets/menu-icon.svg'
import iconclose from '../../assets/close-icon.svg'

const Topbar = () => {

    const [menuAberto, setMenuAberto] = useState(false);

    return (

        <div className="topbar">
            <div className="imglogo">
                <img src={logotrinity} />
            </div>
            <nav>
                <ul className="menu-list">
                    <li className="solucaobutton"><a href="#solucao1">Soluções</a></li>
                    <li className="drop-hover-nov"><a>Novidades
                        <img src={iconsetadown} />
                    </a>
                        <div className="drop">
                            <a href="#">Inauguração</a>
                            <a href="#">Promoções</a>
                        </div>
                    </li>
                    <li className="trinitybutton"><a href="#">A Trinity</a></li>
                    <li className="drop-hover-cliente"><a>Área do Cliente
                        <img src={iconsetadown} />
                    </a>
                        <div className="drop">
                            <a href="#">Suporte</a>
                            <a href="#">Painel ADM</a>
                        </div>
                    </li>
                    <li className="imgmenu"><a href="#" onClick={(e) => {
                        e.preventDefault();
                        setMenuAberto(!menuAberto);
                    }}><img src={iconmenu} alt="" /></a>
                    </li>
                </ul>

                <ul className={`sidebar-mobile ${menuAberto ? "active" : ""}`}>
                    <li>
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            setMenuAberto(false);
                        }}>
                            <img src={iconclose} alt="" />
                        </a>
                    </li>
                    <li><a href="#">Soluções</a></li>
                    <li><a href="#">Novidades</a></li>
                </ul>
            </nav>

        </div>


    );
}

export default Topbar