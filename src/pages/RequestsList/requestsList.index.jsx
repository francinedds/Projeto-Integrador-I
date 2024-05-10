import React, { useEffect, useState } from "react";
import "./requestsList.styles.css";
import api from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RequestsList = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([
    {
      aprovar: "",
      assunto: "CORREÇÃO",
      id: 1502,
      lancamento: "04/04/2024",
      status: "AGUARDANDO ANALISE",
      valor: "",
    },
    {
      aprovar: "",
      assunto: "CORREÇÃO",
      id: 1503,
      lancamento: "03/05/2024",
      status: "AGUARDANDO ANALISE",
      valor: "",
    },
    {
      aprovar: "",
      assunto: "CUSTOMIZAÇÃO",
      id: 1504,
      lancamento: "06/05/2024",
      status: "AGUARDANDO ANALISE",
      valor: "",
    },
    {
      aprovar: "",
      assunto: "CUSTOMIZAÇÃO",
      id: 1505,
      lancamento: "06/05/2024",
      status: "AGUARDANDO ANALISE",
      valor: "",
    },
    {
      aprovar: "",
      assunto: "CORREÇÃO",
      id: 1506,
      lancamento: "06/05/2024",
      status: "AGUARDANDO ANALISE",
      valor: "",
    },
    {
      aprovar: "",
      assunto: "CUSTOMIZAÇÃO",
      id: 1507,
      lancamento: "07/05/2024",
      status: "AGUARDANDO ANALISE",
      valor: "",
    },
    {
      aprovar: "",
      assunto: "CUSTOMIZAÇÃO",
      id: 1508,
      lancamento: "07/05/2024",
      status: "APROVADO CLIENTE/AGUARDANDO INICIO",
      valor: "R$ 250,00",
    },
    {
      aprovar: "",
      assunto: "CORREÇÃO",
      id: 1509,
      lancamento: "07/05/2024",
      status: "APROVADO SIMBOLUS/AGUARDANDO INICIO",
      valor: "",
    },
  ]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getList();

    const user = JSON.parse(localStorage.getItem("auth"));
    setUser(user);
  }, []);

  const getList = async (status = 99) => {
    const user = JSON.parse(localStorage.getItem("auth"));

    try {
      const res = await api.get(
        `/listar/${user.idcli}/${user.token}/${status}`
      );

      console.log(res);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <>
      <img src="/static/images/Logo.png" alt="" />
      <br />
      <div class="page-list">
        <form class="formLista">
          <fieldset>
            <legend>Lista de Solicitações</legend>
            <table class="table" border="1">
              <tr>
                <td align="center">
                  <a onClick={() => getList(11)}>
                    <strong>EM ANALISE</strong>
                  </a>
                </td>
                <td align="center">
                  <a onClick={() => getList(0)}>
                    <strong>APROVADO</strong>
                  </a>
                </td>
                <td align="center">
                  <a onClick={() => getList(1)}>
                    <strong>DESENVOLVENDO</strong>
                  </a>
                </td>
                <td align="center">
                  <a onClick={() => getList(2)}>
                    <strong>NÃO APROVADO</strong>
                  </a>
                </td>
                <td align="center">
                  <a onClick={() => getList(3)}>
                    <strong>EM TESTE</strong>
                  </a>
                </td>
                <td align="center">
                  <a onClick={() => getList(4)}>
                    <strong>FINALIZADO</strong>
                  </a>
                </td>
                <td align="center">
                  <a onClick={() => getList(99)}>
                    <strong>TODOS</strong>
                  </a>
                </td>
              </tr>
            </table>
            <table class="table" border="1">
              <tr>
                <td align="center">
                  <strong>CODIGO</strong>
                </td>
                <td align="center">
                  <strong>LANÇAMENTO</strong>
                </td>
                <td align="center">
                  <strong>ASSUNTO</strong>
                </td>
                <td align="center">
                  <strong>STATUS</strong>
                </td>
                <td align="center">
                  <strong>VALOR</strong>
                </td>
                <td align="center">
                  <strong>APROVAR VALOR</strong>
                </td>
              </tr>
              <br />

              {list &&
                list.length &&
                list.map((item) => (
                  <tr>
                    <td align="center">
                      <a>{item.id}</a>
                    </td>
                    <td align="center">
                      <a>{item.lancamento}</a>
                    </td>
                    <td align="center">
                      <a>{item.assunto}</a>
                    </td>
                    <td align="center">
                      <a>{item.status}</a>
                    </td>
                    <td align="center">
                      <a>{item.valor}</a>
                    </td>
                    <td align="center">
                      <a href="/aprovar_sol2/{{message.id}}">{item.aprovar}</a>
                    </td>
                  </tr>
                ))}
            </table>
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

export default RequestsList;
