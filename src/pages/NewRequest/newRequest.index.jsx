import React, { useEffect, useState } from "react";
import "./newRequest.styles.css";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { toast } from "react-toastify";
import api from "../../api/axiosInstance";
import Loading from "../../components/Loading/loading.index";
import Footer from "../../components/Footer/footer.index";
import logo from "../../assets/Logo.png";

const NewRequest = () => {
  const navigate = useNavigate();

  const initialForm = {
    sis: "",
    contato: "",
    tipo: "CORREÇÃO",
    obs: "",
  };

  const [systems, setSystems] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSistemas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = JSON.parse(localStorage.getItem("auth"));

      const res = await api.post(`/inclui_sol2/${user.idcli}/1`, form, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      switch (res.data.code) {
        case 200:
          toast.success("Solicitação incluída com sucesso!");
          break;

        case 400:
          toast.error(res.data.mensagem);
          break;

        default:
          return;
      }
    } catch (err) {
      toast.error(err);
    }
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const getSistemas = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("auth"));

      const res = await api.get(`/inserir_solicitacao2/${user.idcli}/1`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      switch (res.data.code) {
        case 200:
          setSystems(res.data.sistemas.sistemas);
          break;

        case 400:
          toast.error(res.data.mensagem);
          navigate("/main");
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
      <div className="page-new">
        <form className="formSolicitacao">
          <fieldset>
            <legend>Solicitação de Serviço</legend>
            {loading ? (
              <Loading />
            ) : (
              <>
                <label htmlFor="sis">Sistema</label>
                <br />
                <select
                  id="sis"
                  name="sis"
                  className="select"
                  value={form.sis}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    SELECIONE
                  </option>
                  {systems &&
                    systems.length &&
                    systems.map((system) => (
                      <option key={system.codigo} value={system.codigo}>
                        {system.nome}
                      </option>
                    ))}
                </select>
                <br />
                <br />
                <label htmlFor="contato">Solicitante/Contato</label>
                <br />
                <input
                  type="text"
                  name="contato"
                  id="contato"
                  value={form.contato}
                  onChange={handleChange}
                  required
                />
                <br />
                <br />
                <label htmlFor="tipo">Tipo de Solicitação</label>
                <br />
                <select
                  id="tipo"
                  name="tipo"
                  value={form.tipo}
                  onChange={handleChange}
                  required
                  className="select"
                >
                  <option value="CORREÇÃO">CORREÇÃO</option>
                  <option value="CUSTOMIZAÇÃO">CUSTOMIZAÇÃO</option>
                  <option value="VISITA TÉCNICA">VISITA TÉCNICA</option>
                  <option value="TREINAMENTO ON-LINE">
                    TREINAMENTO ON-LINE
                  </option>
                  <option value="TREINAMENTO IN-LOCO">
                    TREINAMENTO IN-LOCO
                  </option>
                  <option value="SUPORTE/DUVIDA">SUPORTE/DUVIDA</option>
                  <option value="NOVO MÓDULO">NOVO MÓDULO</option>
                </select>
                <br />
                <br />
                <label htmlFor="obs">Escreva sua solicitação detalhada</label>
                <br />
                <textarea
                  name="obs"
                  id="obs"
                  value={form.obs}
                  onChange={handleChange}
                  rows="9"
                  cols="37"
                ></textarea>
                <br />
                <button className="btn" onClick={handleSubmit}>
                  Lançar
                </button>
                <br />
                <br />
              </>
            )}
            <a onClick={() => navigate("/main")} id="footer" align="center">
              Voltar para o menu
            </a>
          </fieldset>
          <br />
          <Footer />
        </form>
      </div>
    </>
  );
};

export default NewRequest;
