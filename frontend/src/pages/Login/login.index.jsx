import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axiosInstance";
import _ from "lodash";
import { toast } from "react-toastify";

import "./login.styles.css";

const Login = () => {
  const navigate = useNavigate();

  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        "/login",
        {
          user: cnpj,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      switch (res.data.code) {
        case 200:
          localStorage.setItem(
            "auth",
            JSON.stringify(_.omit(res.data, ["mensagem", "code"]))
          );
          toast.success("Autenticado com sucesso!");
          navigate("/main");
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

  return (
    <div className="page-login">
      <form className="formLogin" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="user">CNPJ do usuário</label>
          <input
            type="text"
            name="user"
            placeholder="Digite seu CNPJ"
            value={cnpj}
            onChange={(e) => setCnpj(e.target.value)}
            autoFocus={true}
            required
          />
          <label htmlFor="pass">Senha</label>
          <input
            type="password"
            name="pass"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button className="btn" type="submit">
            Acessar
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
