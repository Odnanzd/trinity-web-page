import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TopBar from "./components/TopBar/index.jsx"
import Content from "./components/Content/index.jsx"
import Solucoes from "./components/Solucoes/index.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TopBar />
    <Content />
    <Solucoes/>
  </StrictMode>,
)
