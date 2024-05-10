import React, { useEffect, useState } from "react";

import "./main.styles.css";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    setUser(user);
  }, []);

  return (
    <>
      <img src={logo} alt="logo" />
      <div class="page-main">
        <form class="formOpcoes">
          <fieldset>
            <legend>Opções</legend>
            <table>
              <tr>
                <td>
                  <h1 align="center">
                    <a onClick={() => navigate("/new")}>
                      Lançar Solicitação de Serviço
                    </a>
                  </h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 align="center">
                    <a onClick={() => navigate("/list")}>Listar solicitações</a>
                  </h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 align="center">
                    <a onClick={handleLogout}>Sair do Sistema</a>
                  </h1>
                </td>
              </tr>
            </table>
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

export default Main;
