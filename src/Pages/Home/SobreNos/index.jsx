import './SobreNos.css'
import EngrenaIcon from '../../../assets/iconengrenage.svg';
import FoguteIcon from '../../../assets/iconfoguete.svg'
import ScrollReveal from "../../../components/Hooks/ScrollReveal";
import ScrollRevealGroup from "../../../components/Hooks/ScrollRevealGroup";

const SobreNos = () => {
    return (
        <div id="sobrenos1" className="container-sobrenos">
            <ScrollRevealGroup stagger={0.15}>
                <div className="container-text-title-sobrenos">
                    <ScrollReveal animation="fade">
                        <span className="span-sobrenos">SOBRE NÓS</span>
                    </ScrollReveal>

                    <ScrollReveal animation="slide" direction="up">
                        <div className="text-title-sobrenos">
                            <span className="destaque-somos">Quem </span>Somos?
                        </div>
                    </ScrollReveal>
                </div>
            </ScrollRevealGroup>

            <ScrollRevealGroup stagger={0.18}>
                <div className="container-sobrenos-itens">
                    <ScrollReveal animation="slide" direction="left">
                        <img src={EngrenaIcon} className="img-engrenagem" />
                    </ScrollReveal>

                    <div className="texts-sobrenos">
                        <ScrollReveal animation="slide" direction="up">
                            <div className="text-subtitle-sobrenos">
                                A <span className="destaque-trinity">Trinity </span> foi fundada com base na inovação técnica...
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="slide" direction="up">
                            <div className="text-subtitle2-sobrenos">
                                Estamos começando nossa jornada com o propósito de gerar valor,
                                crescer junto com nossos parceiros e construir histórias de
                                sucesso lado a lado com quem acredita no nosso potencial.
                            </div>
                        </ScrollReveal>
                        <ScrollReveal animation="slide" direction="up">
                            <div className="text-subtitle2-sobrenos">
                                Somos uma especializada técnica e Software House em fase inicial, movida pela vontade de inovar
                                e transformar a realidade das empresas por meio da tecnologia.
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </ScrollRevealGroup>

            <div className="divisao-itens">
                <ScrollRevealGroup stagger={0.18}>
                    <div className="container-sobrenos-itens2">
                        <div className="texts-sobrenos">
                            <ScrollReveal animation="slide" direction="up">
                                <div className="text-subtitle-sobrenos">
                                    Na <span className="destaque-trinity">Trinity </span>, acreditamos que tecnologia de verdade é aquela que transforma.
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide" direction="up">
                                <div className="text-subtitle2-sobrenos">
                                    Nossa missão é simples: descomplicar o digital e oferecer soluções que realmente façam sentido para o dia a dia das empresas.
                                </div>
                            </ScrollReveal>
                            <ScrollReveal animation="slide" direction="up">
                                <div className="text-subtitle2-sobrenos">
                                    Somos um time jovem, curioso e apaixonado por desafios.
                                    Ainda estamos começando, mas nossa ambição é grande
                                    — crescer junto com nossos clientes e fazer parte de conquistas reais.
                                </div>
                            </ScrollReveal>
                        </div>
                        <ScrollReveal animation="slide" direction="right">
                            <img src={FoguteIcon} className="img-foguete" />
                        </ScrollReveal>
                    </div>
                </ScrollRevealGroup>
            </div>
        </div>
    )
}
export default SobreNos