import React from "react";
import { Container, Content } from "./style";
import { navbar } from "./../../utils/navbar";
import Logo from "../Logo";
import { Button } from "../Generics";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="container">
        <div className="wrapper">
          <Content>
            <Content.Left>
              <Logo />
            </Content.Left>
            <Content.Center>
              {navbar.map(({ id, path, title }) => (
                <Content.Link key={id} to={path}>
                  {title}
                </Content.Link>
              ))}
            </Content.Center>
            <Content.Right>
              <Button onClick={() => navigate("/signin")} type="dark">
                Login
              </Button>
            </Content.Right>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Header;
