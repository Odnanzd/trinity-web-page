import { React, useEffect, useState } from 'react';
import './Contato.css'
import iconsucess from '../../assets/success-icon-32px.svg'
import InputMask from 'react-input-mask';

const Contato = () => {

    const [formEnviado, setFormEnviado] = useState(false);
    const [loading, setLoading] = useState(false);

    const onSubmitNewForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        setLoading(true);
        try {
            const response = await fetch("https://formsubmit.co/81df2ac1d729df72cab0fb84f9240277", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                setFormEnviado(true);
                setLoading(false);
            } else {
                console.error("Erro ao enviar o formulário.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
        } finally {
            setTimeout(() => {
                setFormEnviado(false)
            }, 3000);
        }
    };

    return (
        <div id="contato1" className="box-contato">
            <div className="itens-contato-box">
                <div className="contato-text">
                    <div className="text-title">
                        Quer mais <span className="destaque">informações</span> sobre nossos serviços?
                    </div>
                    <div className="text-subtitle">
                        Envie o formulário e marque uma conversa agora com nossos técnicos.
                    </div>
                </div>

                <div className="contato-form">
                    <form onSubmit={onSubmitNewForm} className="form">
                        <div className="inputsolucao">
                            <label>Selecione uma opção <span className="destaque2">*</span></label>
                            <select name="tipo_form" required>
                                <option value="">Selecionar</option>
                                <option value="Informática">Informática</option>
                                <option value="Segurança">Segurança Eletrônica</option>
                                <option value="Sistemas ERP">Sistemas ERP</option>
                            </select>
                        </div>
                        <div className="inputnome">
                            <label>Nome completo <span className="destaque2">*</span></label>
                            <input
                                type="text"
                                name="nome"
                                required
                                placeholder="Digite seu nome" />
                        </div>
                        <div className="inputemail">
                            <label>E-mail <span className="destaque2">*</span></label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Digite seu e-mail" />
                        </div>
                        <div className="inputtelefone">
                            <label>Celular <span className="destaque2">*</span></label>
                            <InputMask
                                mask="(99) 9 9999-9999"
                                type="text"
                                name="telefone"
                                required
                                placeholder="Digite seu telefone" />
                        </div>
                        <div className="inputcpfcpnj">
                            <label>CPF ou CNPJ <span className="destaque2">*</span></label>
                            <input
                                type="text"
                                name="cpf"
                                required
                                placeholder="Digite seu CPF ou CPNJ" />
                        </div>
                        <div className="inputmensagem">
                            <label>Mensagem</label>
                            <textarea
                                name="mensagem"
                                placeholder="Digite sua mensagem (opcional)"
                                rows="5"
                            ></textarea>
                        </div>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_cc" value="fernando.trindade.ti@gmail.com" />
                        <input type="hidden" name="_cc" value="ericlesaraujo77@gmail.com" />

                        <div className="container-button">
                            <button type="submit" disabled={loading} className="submit-btn">
                                {loading ? <span className="spinner"></span> : 'Enviar'}
                            </button>
                        </div>
                        {formEnviado && (
                            <div className="form-success">
                                <img src={iconsucess} alt="Sucesso" />
                                <a>Formulário enviado com sucesso!</a>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Contato