import React from "react";
import { Container } from "./style";
import logo from "../../assets/img/logo.png";

const Logo = () => {
  return (
    <Container>
      <img src={logo} alt="logo" />
      <div>Houzing</div>
    </Container>
  );
};

export default Logo;
