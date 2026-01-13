import React, { useState, useEffect } from 'react';
import './Topbar.css'
import '../../assets/fonts/fonts.css';
import { useNavigate } from 'react-router-dom';
import logotrinity from '../../assets/logo_trinity_topbar.svg'
import iconsetadown from '../../assets/iconsetadown.svg'
import iconmenu from '../../assets/menu-icon.svg'
import iconclose from '../../assets/close-icon.svg'

const Topbar = () => {

    const navigate = useNavigate();

    const [menuAberto, setMenuAberto] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const homeLink = () => {
        navigate('/');
    };

    return (

        <header className={`topbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="imglogo">
                <img src={logotrinity} onClick={homeLink} />
            </div>
            <nav>
                <ul className="menu-list">
                    <li className="solucaobutton"><a href="#solucao1">Soluções</a></li>
                    <li className="drop-hover-nov"><a>Novidades
                        <img src={iconsetadown} />
                    </a>
                        <div className="drop">
                            <a href="https://www.instagram.com/p/DF3MKtTP-i7/" target="_blank" rel="noopener noreferrer">
                                Inauguração
                            </a>
                        </div>
                    </li>
                    <li className="trinitybutton"><a href="#sobrenos1">A Trinity</a></li>
                    <li className="contatobutton"><a href="#contato1">Contato</a></li>
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
                    <li><a href="#solucao1">Soluções</a></li>
                    <li className="drop-hover-nov-mobile"><a>Novidades
                        <img src={iconsetadown} />
                    </a>
                        <div className="drop-mobile">
                            <a href="https://www.instagram.com/p/DF3MKtTP-i7/" target="_blank" rel="noopener noreferrer">
                                Inauguração
                            </a>
                        </div>
                    </li>
                    <li><a href="#sobrenos1">A Trinity</a></li>
                    <li><a href="#contato1">Contato</a></li>
                    <li className="drop-hover-cliente-mobile"><a>Área do Cliente
                        <img src={iconsetadown} />
                    </a>
                        <div className="drop-mobile">
                            <a href="#">Suporte</a>
                        </div>
                    </li>
                </ul>
            </nav>

        </header>


    );
}

export default Topbar