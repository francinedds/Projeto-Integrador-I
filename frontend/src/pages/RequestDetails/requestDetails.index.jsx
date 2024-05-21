import React, { useEffect, useState } from "react";

import "./requestDetails.styles.css";
import Footer from "../../components/Footer/footer.index";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api/axiosInstance";
import { toast } from "react-toastify";
import logo from "../../assets/Logo.png";
import Loading from "../../components/Loading/loading.index";

const RequestDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [request, setRequest] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRequestDetails();
  }, []);

  const getRequestDetails = async () => {
    try {
      const res = await api.get(`/carregar_sol2/${id}/1`);

      switch (res.data.code) {
        case 200:
          setRequest(res.data);
          break;

        case 400:
          toast.error(res.data.mensagem);
          break;

        default:
          return;
      }

      setLoading(false);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <img src={logo} alt="logo" />
      <div className="page-details">
        <form className="formDetalhe">
          <fieldset>
            <legend>Detalhe da Solicitação</legend>
            {loading ? (
              <Loading />
            ) : (
              <>
                <table className="table" border="1">
                  <tr>
                    <td align="center" colspan="3">
                      <strong>ID DA SOLICITACAO</strong>
                    </td>
                    <td align="center" colspan="8">
                      <strong>{request?.des_codigo}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" colspan="3">
                      <strong>Data Solicitação</strong>
                    </td>
                    <td align="center" colspan="8">
                      <strong>{request?.des_lancamento}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" colspan="3">
                      <strong>Solicitado por/Contato</strong>
                    </td>
                    <td align="center" colspan="8">
                      <strong>{request?.des_contato}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" colspan="3">
                      <strong>Status:</strong>
                    </td>
                    <td align="center" colspan="8">
                      <strong>{request?.des_status}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" colspan="3">
                      <strong>Assunto:</strong>
                    </td>
                    <td align="center" colspan="8">
                      <strong>{request?.des_motivo}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" colspan="3">
                      <strong>Prazo:</strong>
                    </td>
                    <td align="center" colspan="8">
                      <strong>{request?.des_prazo}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" colspan="3">
                      <strong>Valor:</strong>
                    </td>
                    <td align="center" colspan="8">
                      <strong>{request?.des_valor}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" colspan="3">
                      <strong>Descrição da Solicitação:</strong>
                    </td>
                    <td align="center" colspan="8">
                      <strong>{request?.des_descricao}</strong>
                    </td>
                  </tr>
                </table>
              </>
            )}
            <a
              onClick={() => {
                navigate("/list");
              }}
              id="footer"
              align="center"
            >
              Voltar para a Lista de Serviços
            </a>
          </fieldset>
          <br />
          <label align="center">
            <Footer />
          </label>
        </form>
      </div>
    </>
  );
};

export default RequestDetails;
