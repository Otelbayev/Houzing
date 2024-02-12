import React, { useState } from "react";
import { Container, Content, Icon } from "./style";
import { navbar } from "./../../utils/navbar";
import Logo from "../Logo";
import { Button } from "../Generics";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <Container id="top">
      <div className="container">
        <div className="wrapper">
          <Content>
            <Content.MenuWrap>
              <Content.Menu onClick={() => setMenu(!menu)} />
            </Content.MenuWrap>
            <Content.Left>
              <Logo />
            </Content.Left>
            <Content.Center $menu={menu.toString()}>
              {navbar.map(
                ({ id, path, title, hidden }) =>
                  !hidden && (
                    <Content.Link
                      onClick={() => setMenu(!menu)}
                      key={id}
                      to={path}
                    >
                      {title}
                    </Content.Link>
                  )
              )}
              <Icon onClick={() => setMenu(!menu)} />
            </Content.Center>
            <Content.Right>
              <Button onClick={() => navigate("/signin")} type="dark">
                Sign in
              </Button>
            </Content.Right>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Header;
