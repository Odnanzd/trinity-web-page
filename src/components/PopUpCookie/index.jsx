import './PopUpCookie.css'
import { React, useEffect, useState } from 'react';
import CookieIcon from '../../assets/cookie_icon.svg'

const PopUpCookie = () => {

    const [showPopupCookie, setShowPopupCookie] = useState("");

    const onClickBtn = (e) => {
        const escolha = e.target.value;
        localStorage.setItem('cookie', escolha);
        setShowPopupCookie(false);
    };

    useEffect(() => {
        const cookie = localStorage.getItem('cookie');
        if (cookie === null) {
            setShowPopupCookie(true);
        } else {
            setShowPopupCookie(false);
        }

        console.log("Valor do cookie:", cookie);
    }, []);


    return (
        showPopupCookie && (
            <div class="wrapper">
                <header>
                    <img src={CookieIcon} />
                    <h2>Cookies Consent</h2>
                </header>
                <div class="data">
                    <p>Este site usa cookies para ajudar você a ter uma experiência de navegação superior e mais relevante no site. <a href="#"> Saiba mais...</a></p>
                </div>
                <div class="buttons">
                    <button value="yes" class="button" id="acceptBtn" onClick={onClickBtn}>Aceitar</button>
                    <button value="false" class="button" id="declineBtn" onClick={onClickBtn}>Recusar</button>
                </div>
            </div>
        )
    )
}

export default PopUpCookie