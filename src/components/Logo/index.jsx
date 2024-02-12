import React from "react";
import { Container } from "./style";
import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/")}>
      <img src={logo} alt="logo" />
      <div>Houzing</div>
    </Container>
  );
};

export default Logo;
