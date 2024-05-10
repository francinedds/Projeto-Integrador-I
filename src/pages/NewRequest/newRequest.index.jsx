import React, { useEffect, useState } from "react";
import "./newRequest.styles.css";
import { useNavigate } from "react-router-dom";

const NewRequest = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    setUser(user);
  }, []);

  return (
    <>
      <div class="page-new">
        <form
          class="formSolicitacao"
          action="/inclui_sol2/{{idCli}}/{{sessao}}"
          method="post"
        >
          <fieldset>
            <legend>Solicitação de Serviço</legend>
            <label for="sis">Sistema</label>
            <br />
            <select id="sis" name="sis" class="select" required>
              <option value="{{message.codigo}}">SIMBOLUS COM SÉRIE A4</option>
            </select>
            <br />
            <br />
            <label for="contato">Solicitante/Contato</label>
            <br />
            <input type="text" name="contato" id="contato" required />
            <br />
            <br />
            <label for="tipo">Tipo de Solicitação</label>
            <br />
            <select id="tipo" name="tipo" required class="select">
              <option value="CORREÇÃO">CORREÇÃO</option>
              <option value="CUSTOMIZAÇÃO">CUSTOMIZAÇÃO</option>
              <option value="VISITA TÉCNICA">VISITA TÉCNICA</option>
              <option value="TREINAMENTO ON-LINE">TREINAMENTO ON-LINE</option>
              <option value="TREINAMENTO IN-LOCO">TREINAMENTO IN-LOCO</option>
              <option value="SUPORTE/DUVIDA">SUPORTE/DUVIDA</option>
              <option value="NOVO MÓDULO">NOVO MÓDULO</option>
            </select>
            <br />
            <br />
            <label for="obs">Escreva sua solicitação detalhada</label>
            <br />
            <textarea name="obs" id="obs" rows="9" cols="37"></textarea>
            <br />
            <button class="btn" onclick="validar()">
              Lançar
            </button>
            <br />
            <br />
            <a onClick={() => navigate("/main")} id="footer" align="center">
              Voltar para o menu
            </a>
          </fieldset>
          <br />
          <label align="center">
            Cliente: {user?.idcli} - {user?.nome_cliente}
          </label>
        </form>
      </div>
    </>
  );
};

export default NewRequest;
