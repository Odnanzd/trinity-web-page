import './Home.css'
import Content from "../Home/Content/index.jsx"
import Stats from './Stats/index.jsx'
import SobreNos from "../Home/SobreNos/index.jsx"
import Solucoes from "../Home/Solucoes/index.jsx"
import ClienteCarrossel from './ClienteCarrossel/index.jsx'
import Contato from "../Home/Contato/index.jsx"
import ScrollReveal from '../../components/Hooks/ScrollReveal.jsx'

const Home = () => {
    return (
        <div>
            <ScrollReveal>
                <Content />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <Stats />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <Solucoes />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <ClienteCarrossel />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <SobreNos />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
                <Contato />
            </ScrollReveal>
        </div>
    )
}

export default Home