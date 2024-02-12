import styled from "styled-components";
import email from "../../assets/icons/cardMassage.svg?react";
import calculator from "../../assets/icons/calculator.svg?react";
import cardHouse from "../../assets/icons/cardHouse.svg?react";
import cardMaps from "../../assets/icons/cardMaps.svg?react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  margin: auto;
  width: 100%;
  background: #f5f7fc;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
    row-gap: 20px;
  }
`;

const Icon = styled.div``;
Icon.Email = styled(email)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
Icon.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Icon };
