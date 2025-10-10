import React from 'react';
import './Solucoes.css';
import computerimg from "../../assets/icon-computer-2.svg";
import sistemaimg from "../../assets/icon-sistema-2.svg";
import shieldimg from "../../assets/icon_shield.svg";

const Solucoes = () => {

    return (
        <div id="solucao1" className="box-itens">
            <div className="text-solucao">
                De quais <span className="destaque">soluções</span> você precisa?
            </div>
            <div className="itens-solucao">

                <div
                    className="solucao-box"
                    >
                    <div className="img-box">
                        <img src={shieldimg} alt="Segurança" />
                    </div>
                    <div className="content">
                        <div className="title-item">Segurança</div>
                        <div className="subtitle-item">
                            Proteja seu patrimônio com sistemas de segurança de ponta. Oferecemos monitoramento por câmeras,
                             alarmes inteligentes.
                        </div>
                        <a href="https://wa.me/556999643974" target="_blank" rel="noopener noreferrer" className="read-more">
                            Saiba mais
                        </a>
                    </div>
                </div>

                <div 
                    className="solucao-box"
                    >
                    <div className="img-box">
                        <img src={computerimg} alt="Informática" />
                    </div>
                    <div className="content">
                        <div className="title-item">Informática</div>
                        <div className="subtitle-item">
                            Garanta a eficiência da sua infraestrutura de TI. Realizamos manutenção de computadores, notebooks, entre outros...
                        </div>
                        <a href="https://wa.me/556999643974" target="_blank" rel="noopener noreferrer" className="read-more">
                            Saiba mais
                        </a>
                    </div>
                </div>

                <div 
                    className="solucao-box"
                    >
                    <div className="img-box">
                        <img src={sistemaimg} alt="Sistemas ERP" />
                    </div>
                    <div className="content">
                        <div className="title-item">Trinity ERP</div>
                        <div className="subtitle-item">
                           Centralize a gestão da sua empresa e tome decisões mais inteligentes.
                            Nosso ERP integra financeiro, fiscal, estoque e vendas.
                        </div>
                        <a href="https://wa.me/556999643974" target="_blank" rel="noopener noreferrer" className="read-more">
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solucoes;