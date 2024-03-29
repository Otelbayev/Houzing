import React, { useState } from "react";
import { Container, Content, Icon, Prof, ProfWrap } from "./style";
import { navbar } from "./../../utils/navbar";
import Logo from "../Logo";
import { Button } from "../Generics";
import { useNavigate } from "react-router-dom";
import { useUserDataContext } from "../../context/UserDataContext";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const [userData] = useUserDataContext();
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
                ({ id, path, title, hidden, private: isPrivate }) =>
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
              {userData?.authenticationToken ? (
                <ProfWrap>
                  <Prof onClick={() => navigate("/myprofile")} />
                </ProfWrap>
              ) : (
                <Button onClick={() => navigate("/signin")} type="dark">
                  Sign in
                </Button>
              )}
            </Content.Right>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Header;
