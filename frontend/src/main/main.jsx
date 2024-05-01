import React from "react";
import "./main.css";

const Main = () => {
  return (
    <>
      <img src="../assets/Login.png" alt="" />
      <div className="box">
        <form action="">
          <fieldset>
            <legend>Fórmulário de Clientes</legend>
            <br />
            <div className="inputBox">
              <input
                type="text"
                name="nome"
                id="nome"
                className="inputUser"
                required
              />
              <label htmlFor="nome" className="labelInput">
                Nome completo
              </label>
            </div>
            <br />
            <br />
            <div className="inputBox">
              <input
                type="text"
                name="email"
                id="email"
                className="inputUser"
                required
              />
              <label htmlFor="email" className="labelInput">
                E-mail
              </label>
            </div>
            <br />
            <br />
            <div className="inputBox">
              <input
                type="tel"
                name="telefone"
                id="telefone"
                className="inputUser"
                required
              />
              <label htmlFor="telefone" className="labelInput">
                Telefone
              </label>
            </div>
            {/*                 
                <p>Sexo:</p>
                <input type="radio" id="feminino" name="genero" value="feminino" required />
                <label htmlFor="feminino">Feminino</label>
                <br />
                <input type="radio" id="masculino" name="genero" value="masculino" required />
                <label htmlFor="masculino">Masculino</label>
                <br />
                <input type="radio" id="outro" name="genero" value="outro" required />
                <label htmlFor="outro">Outro</label>
                 */}
            <br />
            <br />
            <label htmlFor="data_nascimento">Data de Nascimento:</label>
            <input
              type="date"
              name="data_nascimento"
              id="data_nascimento"
              required
            />
            <br />
            <br />
            <br />
            <div className="inputBox">
              <input
                type="text"
                name="cidade"
                id="cidade"
                className="inputUser"
                required
              />
              <label htmlFor="cidade" className="labelInput">
                Cidade
              </label>
            </div>
            <br />
            <br />
            <div className="inputBox">
              <input
                type="text"
                name="estado"
                id="estado"
                className="inputUser"
                required
              />
              <label htmlFor="estado" className="labelInput">
                Estado
              </label>
            </div>
            <br />
            <br />
            <div className="inputBox">
              <input
                type="text"
                name="endereco"
                id="endereco"
                className="inputUser"
                required
              />
              <label htmlFor="endereco" className="labelInput">
                Endereço
              </label>
            </div>

            <h1 className="titulo">Solicitar serviço</h1>
            {/* 
                <div class="selecionarServico"> 
                    <form method="post" action="cadastrar-enquete.php">
                        <select id="servico">
                        <option value="#">Atendimento</option>
                        <option value="#">Orçamento</option>
                        <option value="#">Agendamento</option>
                        <option value="#">Outro</option>                        
                        </select>
                </div>
                 */}
            <textarea
              name=""
              id="textarea"
              cols=""
              rows=""
              placeholder="Digite aqui"
            ></textarea>
            <br />
            <br />
            <input type="submit" name="submit" id="submit" />
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default Main;
