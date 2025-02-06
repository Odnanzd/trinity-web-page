import React, { useEffect, useState } from 'react';
import './Popupwhatsapp.css'
import whatsapplogo from "../../assets/whatsapp-icon.svg"

const PopUpWhatsapp = () => {

    return (
        <div className="popup">
            <a href="https://wa.me/556999643974" target="blank" rel="noopener noreferrer" className="whatsappLink">
                <img src={whatsapplogo} alt="" className="icon" />
            </a>
        </div>
    );

}

export default PopUpWhatsapp