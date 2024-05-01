import React from "react";
import { useNavigate } from "react-router-dom";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = "1234567890";
    localStorage.setItem("authToken", token);

    navigate("/main");
  };

  return (
    <div className="page">
      <form className="formLogin" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="user">CNPJ do usuário</label>
          <input
            type="text"
            name="user"
            placeholder=""
            autoFocus={true}
            required
          />
          <label htmlFor="pass">Senha</label>
          <input type="password" name="pass" placeholder="" required />
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
