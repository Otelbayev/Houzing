import styled from "styled-components";
import arrow from "../../assets/icons/arrow.svg?react";

const Container = styled.div`
  position: relative;
  height: 500px;
  @media (max-width: 700px) {
    height: 350px;
  }
`;

const Arrow = styled(arrow)`
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  padding: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: ${({ left }) => (!left ? "rotate(90deg)" : "rotate(-90deg)")};
  left: ${({ left }) => !left && "20px"};
  right: ${({ left }) => left && "20px"};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.4);
  }
  @media (max-width: 700px) {
    width: 30px;
    height: 30px;
    padding: 10px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 500px;
  @media (max-width: 700px) {
    height: 350px;
  }
`;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;
`;

Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
  max-width: 555px;
  width: 100%;

  @media (max-width: 700px) {
    font-size: 20px;
    padding: 0 20px;
  }
`;

export { Container, Arrow, Img, Blur, Content };
