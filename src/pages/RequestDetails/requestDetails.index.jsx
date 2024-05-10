import React from "react";

import "./requestDetails.styles.css";

const RequestDetails = () => {
  return (
    <div class="page-details">
      <form class="formDetalhe">
        <fieldset>
          <legend>Detalhe da Solicitação</legend>
          <table class="table" border="1">
            <tr>
              <td align="center" colspan="3">
                <strong>ID DA SOLICITACAO</strong>
              </td>
              <td align="center" colspan="8">
                <strong></strong>
              </td>
            </tr>
            <tr>
              <td align="center" colspan="3">
                <strong>Data Solicitação</strong>
              </td>
              <td align="center" colspan="8">
                <strong></strong>
              </td>
            </tr>
            <tr>
              <td align="center" colspan="3">
                <strong>Solicitado por/Contato</strong>
              </td>
              <td align="center" colspan="8">
                <strong></strong>
              </td>
            </tr>
            <tr>
              <td align="center" colspan="3">
                <strong>Status:</strong>
              </td>
              <td align="center" colspan="8">
                <strong></strong>
              </td>
            </tr>
            <tr>
              <td align="center" colspan="3">
                <strong>Assunto:</strong>
              </td>
              <td align="center" colspan="8">
                <strong></strong>
              </td>
            </tr>
            <tr>
              <td align="center" colspan="3">
                <strong>Prazo:</strong>
              </td>
              <td align="center" colspan="8">
                <strong></strong>
              </td>
            </tr>
            <tr>
              <td align="center" colspan="3">
                <strong>Valor:</strong>
              </td>
              <td align="center" colspan="8">
                <strong></strong>
              </td>
            </tr>
            <tr>
              <td align="center" colspan="3">
                <strong>Descrição da Solicitação:</strong>
              </td>
              <td align="center" colspan="8">
                <strong></strong>
              </td>
            </tr>
          </table>
          <a
            href="/listar2/{{idCli}}/{{sessao}}/{{99}}"
            id="footer"
            align="center"
          >
            Voltar para a Lista de Serviços
          </a>
        </fieldset>
        <br />
        <label align="center">
          {/* Cliente:{{ idCli }}-{{ nome_cliente }} */}
        </label>
      </form>
    </div>
  );
};

export default RequestDetails;
