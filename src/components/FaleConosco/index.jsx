import React, { useState, useEffect } from 'react';
import './Faleconosco.css'
import logotrinityblue from '../../assets/logo-trinity-blue.svg'
import instalogo from '../../assets/insta-logo.svg'
import facelogo from '../../assets/face-logo.svg'
import locationicon from '../../assets/location-icon.svg'
import telefoneicon from '../../assets/telefone-icon.svg'
import mailicon from '../../assets/mail-icon.svg'

const Faleconosco = () => {
    return (
        <div className="faleconosco-box">
            <div className="box-itens-faleconosco">
                <div className="redes-box">
                    <div className="logotrinity">
                        <img src={logotrinityblue} />
                    </div>
                    <div className="social-trinity">
                        <div className="social-text">
                            Redes Sociais
                        </div>
                        <div className="itens-logo-rede">
                            <div className="instalogo">
                                <img src={instalogo} />
                            </div>
                            <div className="facebooklogo">
                                <img src={facelogo} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="solucoes-itens">
                    <div className="solucao-text">
                        Soluções
                    </div>
                    <div className="links-solucao">
                        <div className="info-link-solucao">
                            Informática
                        </div>
                        <div className="sec-link-solucao">
                            Segurança Eletrônica e Monitoramento
                        </div>
                        <div className="sistema-link-solucao">
                            Sistema ERP para Microempresas
                        </div>
                    </div>

                </div>
                <div className="institucional-itens">
                    <div className="insti-text">
                        Institucional
                    </div>
                    <div className="links-insti">
                        <div className="sobrenos-link">
                            Sobre nós
                        </div>
                        <div className="trabalhe-link">
                            Trabalhe Conosco
                        </div>
                        <div className="politica-link">
                            Política de Privacidade
                        </div>
                    </div>
                </div>
                <div className="areacliente-itens">
                    <div className="areacliente-text">
                        Área do Cliente
                    </div>
                    <div className="links-area">
                        <div className="suporte-link">
                            Suporte
                        </div>
                    </div>
                </div>
                <div className="faleconosco-itens">
                    <div className="faleconosco-text">
                        Fale Conosco
                    </div>
                    <div className="links-faleconosco">
                        <div className="endereco-link">
                            <img src={locationicon} />
                            Av. Calama, 6781 - Aponiã
                        </div>
                        <div className="telefone-link">
                            <img src={telefoneicon}/>
                            (69) 9 9964-3974
                        </div>
                        <div className="email-link">
                            <img src={mailicon} />
                            contato@trinitytecnologias.com.br
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Faleconosco