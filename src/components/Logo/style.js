import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;
  img {
    width: 30px;
    height: 36px;
  }
  div {
    color: #fff;
    font-weight: 600;
    font-size: 22px;
  }
  @media (max-width: 700px) {
    img {
      width: 25px;
      height: 30px;
    }
    div {
      font-size: 16px;
    }
  }
`;
