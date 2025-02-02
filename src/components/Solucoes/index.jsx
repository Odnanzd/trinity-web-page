import React, { useState, useEffect } from 'react';
import './Solucoes.css'
import computerimg from "../../assets/computer-icon.svg"
import cameraimg from "../../assets/icon-camera.svg"
import sistemaimg from "../../assets/sistema-icon.svg"

const Solucoes = () => {
    return (
        <div className="box-itens">
            <div className="text-solucao">
                De quais soluções você precisa?
            </div>
            <div className="itens-solucao">
                <div className="box-informatica">
                    <div className="img-box">
                        <img src={computerimg} />
                    </div>
                    <div className="content">
                        <div className="title-item">
                            Informática
                        </div>
                        <div className="subtitle-item">
                        Manutenção e formatação de computadores, instalação de softwares e sistemas, backup e recuperação de dados, suporte técnico remoto e presencial.
                        </div>
                        <a href="#" class="read-more">
                            Saiba mais
                        </a>
                    </div>
                </div>
                <div className="box-seguranca">
                    <div className="img-box">
                        <img src={cameraimg} />
                    </div>
                    <div className="content">
                        <div className="title-item">
                            Segurança
                        </div>
                        <div className="subtitle-item">
                        Câmeras de segurança, alarmes inteligentes, monitoramento remoto via app e controle de acesso seguro.
                        </div>
                        <a href="#" class="read-more">
                            Saiba mais
                        </a>
                    </div>
                </div>
                <div className="box-sistema">
                    <div className="img-box">
                        <img src={sistemaimg} />
                    </div>
                    <div className="content">
                        <div className="title-item">
                            Sistemas ERP
                        </div>
                        <div className="subtitle-item">
                        Gestão financeira e fiscal, controle de estoque e vendas, automação de processos administrativos e relatórios estratégicos para decisões assertivas.
                        </div>
                        <a href="#" class="read-more">
                            Saiba mais
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Solucoes