import React, { useEffect, useState } from "react";
import "./footer.styles.css";

const Footer = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    setUser(user);
  }, []);

  return (
    <label align="center">
      Cliente: {user?.idcli} - {user?.nome_cliente}
    </label>
  );
};

export default Footer;
