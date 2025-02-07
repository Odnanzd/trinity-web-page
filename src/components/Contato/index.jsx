import { React, useEffect, useState } from 'react';
import './Contato.css'

const Contato = () => {
    return (
        <div id="contato1" className="box-contato">
            <div className="itens-contato-box">
                <div className="contato-text">
                    <div className="text-title">
                        Quer mais <span class="destaque">informações</span> sobre nossos serviços?
                    </div>
                    <div className="text-subtitle">
                        Marque uma conversa agora com nossos técnicos.
                    </div>
                </div>
                    <div className="contato-form">
                        <div className="form">
                            <div className="inputsolucao">
                                <a>Selecione uma opção</a>
                                <select
                                    name="tipo_pessoa"
                                    required="required"
                                >
                                    <option value="">Selecionar</option>
                                    <option value="">Informática</option>
                                    <option value="">Segurança Eletrônica</option>
                                    <option value="">Sistemas ERP</option>
                                </select>
                            </div>
                            <div className="inputnome">
                                <a>Nome completo</a>
                                <input type="text" name="nome" placeholder="Ex.: João da Silva" />
                            </div>
                            <div className="inputemail">
                                <a>Email</a>
                                <input type="email"
                                    name="email"
                                    placeholder="seunome@email.com" />
                            </div>
                            <div className="inputtelefone">
                                <a>Celular</a>
                                <input type="text" name="telefone" placeholder="69 9 9999-9999" />
                            </div>
                            <div className="inputcpfcpnj">
                                <a>CPF ou CPNJ</a>
                                <input type="text" name="cpfcpnj" placeholder="CPF ou CPNJ" />
                            </div>
                            <div className="container-button">
                                <button type="submit" className="submit-btn" >
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}
export default Contato