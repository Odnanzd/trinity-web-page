import './SobreNos.css'
import { React} from 'react';
import EngrenaIcon from '../../assets/iconengrenage.svg';
import FoguteIcon from '../../assets/iconfoguete.svg'

const SobreNos = () => {
    return (
        <div id="sobrenos1" className="container-sobrenos">
            <div className="container-text-title-sobrenos">
                <div className="text-title-sobrenos">
                    <span className="destaque-somos">Quem </span>Somos?
                </div>
            </div>
            <div className="container-sobrenos-itens">
                <img src={EngrenaIcon} className="img-engrenagem" />
                <div className="texts-sobrenos">
                    <div className="text-subtitle-sobrenos">
                        A <span className="destaque-trinity">Trinity </span> foi fundada com base na inovação técnica...
                    </div>
                    <div className="text-subtitle2-sobrenos">
                        Estamos começando nossa jornada com o propósito de gerar valor,
                        crescer junto com nossos parceiros e construir histórias de
                        sucesso lado a lado com quem acredita no nosso potencial.
                    </div>
                    <div className="text-subtitle2-sobrenos">
                        Somos uma especializada técnica e Software House em fase inicial, movida pela vontade de inovar
                        e transformar a realidade das empresas por meio da tecnologia.
                    </div>
                </div>
            </div>
            <div className="divisao-itens">
                <div className="container-sobrenos-itens2">
                    <div className="texts-sobrenos">
                        <div className="text-subtitle-sobrenos">
                            Na <span className="destaque-trinity">Trinity </span>, acreditamos que tecnologia de verdade é aquela que transforma.
                        </div>
                        <div className="text-subtitle2-sobrenos">
                            Nossa missão é simples: descomplicar o digital e oferecer soluções que realmente façam sentido para o dia a dia das empresas.
                        </div>
                        <div className="text-subtitle2-sobrenos">
                            Somos um time jovem, curioso e apaixonado por desafios.
                            Ainda estamos começando, mas nossa ambição é grande
                            — crescer junto com nossos clientes e fazer parte de conquistas reais.
                        </div>
                    </div>
                    <img src={FoguteIcon} className="img-foguete" />
                </div>
            </div>

        </div>

    )
}

export default SobreNos