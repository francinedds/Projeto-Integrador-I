import React, { useEffect, useState } from "react";
import "./requestsList.styles.css";
import api from "../../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../../components/Footer/footer.index";
import Loading from "../../components/Loading/loading.index";
import logo from "../../assets/Logo.png";

const RequestsList = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getList();
  }, []);

  const getList = async (status = 99) => {
    const user = JSON.parse(localStorage.getItem("auth"));

    try {
      const res = await api.get(
        `/listar2/${user.idcli}/${user.token}/${status}/1`
      );

      switch (res.data.code) {
        case 200:
          setList(res.data.solicitacoes.solicitacoes);
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

  const detailRedirect = (id) => {
    navigate("/request/" + id);
  };

  return (
    <>
      <img src={logo} alt="logo" />
      <br />
      <div className="page-list">
        <form className="formLista">
          <fieldset>
            <legend>Lista de Solicitações</legend>
            {loading ? (
              <Loading />
            ) : (
              <>
                <table className="table" border="1">
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

                  {list && list.length
                    ? list.map((item) => (
                        <tr
                          key={item.id}
                          onClick={() => detailRedirect(item.id)}
                          className="table-item"
                        >
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
                            <a href="/aprovar_sol2/{{message.id}}">
                              {item.aprovar}
                            </a>
                          </td>
                        </tr>
                      ))
                    : null}
                </table>
              </>
            )}

            <a onClick={() => navigate("/main")} id="footer" align="center">
              Voltar para o menu
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

export default RequestsList;
