import React, { useState, useEffect } from 'react';
import './Topbar.css'
import '../../assets/fonts/fonts.css';
import logotrinity from '../../assets/logo_trinity_topbar.svg'
import iconseta from '../../assets/iconseta.svg'
import iconsetadown from '../../assets/iconsetadown.svg'

const Topbar = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const items = [
        {
            label: 'Soluções'
        },
        {
            label: 'Novidades'
        },
        {
            label: 'A Trinity'
        },
        {
            label: 'Área do Cliente'
        },
    ];

    const handleClick = (index) => {
        
            setOpenIndex(openIndex === index ? null : index);
        
    };

    return (

        <div className="topbar">
            <div className="imglogo">
                <img src={logotrinity} />
            </div>
            <ul className="menu-list">
                {items.map((item, index) => (
                    <li className="menu-itens-side" key={index}>
                        <div className="menu-itens"
                            onClick={() => handleClick(index)}
                        >
                            {item.label}
                            <img
                                src={openIndex === index ? iconsetadown : iconseta}
                                alt="Seta"
                                className="arrow-icon"
                            />
                        </div>
                    </li>
                ))}
            </ul>


        </div>


    );
}

export default Topbar