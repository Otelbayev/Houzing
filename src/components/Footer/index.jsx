import React from "react";
import { Container, Content, Icon, Wrapper, Bottom } from "./style";
import Logo from "../../components/Logo";
import { Button } from "../Generics";

const Footer = () => {
  return (
    <>
      <Container>
        <div className="container">
          <div className="wrapper">
            <Wrapper>
              <Content>
                <Content.Title>Contact Us</Content.Title>
                <Content.Item>
                  <Icon.Email /> Qoraqalpog'iston Respublikasi Qong'irot tumani
                  Kiyet OFY
                </Content.Item>
                <Content.Item>
                  <Icon.Phone /> 998 935960246
                </Content.Item>
                <Content.Item>
                  <Icon.Email /> jasurdev1604@gmail.com
                </Content.Item>
              </Content>
              <Content>
                <Content.Title>Wide Renge Of Properties</Content.Title>

                <Content.Item> Uzbekistan</Content.Item>
                <Content.Item> India</Content.Item>
                <Content.Item> UAE</Content.Item>
                <Content.Item> Korea</Content.Item>
              </Content>
              <Content>
                <Content.Title>Financing Made Easy</Content.Title>

                <Content.Item>Frontend </Content.Item>
                <Content.Item>Backend </Content.Item>
                <Content.Item>Mobile </Content.Item>
                <Content.Item>Flutter </Content.Item>
                <Content.Item>Android </Content.Item>
              </Content>
              <Content>
                <Content.Title>See Neighborhoods</Content.Title>

                <Content.Item>t.me/Jasurbek_Otelbayev</Content.Item>
                <Content.Item>t.me/jasurbek1604</Content.Item>
                <Content.Item>instagram.com/jasur.otelbayev</Content.Item>
                <Content.Item>instagram.com/frontwebuz</Content.Item>
              </Content>
            </Wrapper>
          </div>
        </div>
      </Container>

      <Container $border="true">
        <div className="container">
          <div className="wrapper">
            <Bottom>
              <Logo />
              <Bottom.Right>
                <div>Copyright © 2021 CreativeLayers. All Right Reserved.</div>
                <Button width="45" height="45" onClick={() => scrollTo(0, 0)}>
                  <Icon.Top />
                </Button>
              </Bottom.Right>
            </Bottom>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;
