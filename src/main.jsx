import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopBar from "./components/TopBar/index.jsx"
import Content from "./components/Content/index.jsx"
import Solucoes from "./components/Solucoes/index.jsx"
import Faleconosco from './components/FaleConosco/index.jsx'
import Rodape from './components/Rodape/index.jsx'
import Contato from './components/Contato/index.jsx'
import PopUpWhatsapp from './components/PopupWhatsapp/index.jsx'
import PopUpCookie from './components/PopUpCookie/index.jsx'
import SobreNos from './components/SobreNos/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PopUpCookie />
    <TopBar />
    <Content />
    <Solucoes />
    <SobreNos />
    <Contato />
    <Faleconosco />
    <Rodape />
    <PopUpWhatsapp />
  </StrictMode>,
)
