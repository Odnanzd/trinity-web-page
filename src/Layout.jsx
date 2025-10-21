import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from "../src/components/TopBar/index.jsx"
import Faleconosco from '../src/components/FaleConosco/index.jsx'
import PopUpWhatsapp from './components/PopupWhatsapp/index.jsx'
import PopUpCookie from './components/PopUpCookie/index.jsx'
import Rodape from '../src/components/Rodape/index.jsx'

const Layout = () => {
    return (
        <>
            <TopBar />
            <Outlet />
            <Faleconosco />
            <Rodape />
            <PopUpCookie />
            <PopUpWhatsapp />
        </>
    );
};

export default Layout;