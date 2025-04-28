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
                            Câmeras de segurança, alarmes inteligentes, monitoramento remoto via app e controle de acesso seguro.
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
                            Manutenção e formatação de computadores, instalação de softwares e sistemas, backup e recuperação de dados.
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
                            Gestão financeira e fiscal, controle de estoque e vendas, automação de processos administrativos e relatórios estratégicos.
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