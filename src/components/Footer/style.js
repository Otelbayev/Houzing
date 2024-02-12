import styled from "styled-components";
import email from "../../assets/icons/email.svg?react";
import phone from "../../assets/icons/phone.svg?react";
import cardHouse from "../../assets/icons/cardHouse.svg?react";
import cardMaps from "../../assets/icons/cardMaps.svg?react";
import top from "../../assets/icons/arrow.svg?react";

const Container = styled.div`
  background-color: var(--colorPrimary);
  margin: auto;
  width: 100%;
  padding: 20px 0 20px;
  border-top: ${({ $border }) => $border === "true" && "1px solid #FFFFFF26"};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 850px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
`;

Content.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
Content.Item = styled.div`
  display: flex;
  margin-bottom: 20px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;

const Icon = styled.div``;
Icon.Email = styled(email)`
  margin-right: 21px;
  width: 24px;
  height: 24px;
  & path {
    fill: white;
  }
`;
Icon.Phone = styled(phone)`
  margin-right: 21px;
  & path {
    fill: white;
  }
`;
Icon.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icon.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;
Icon.Top = styled(top)`
  transform: rotate(180deg);
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 630px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
Bottom.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  div {
    font-weight: 400;
    font-size: 14px;
    color: #fff;
  }
  @media (max-width: 630px) {
    flex-direction: column;
    align-items: flex-start;
    div {
      padding: 10px 0;
    }
  }
`;

export { Container, Content, Icon, Wrapper, Bottom };
