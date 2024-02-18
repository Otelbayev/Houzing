import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin: 50px 0;
  @media (max-width: 1020px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    margin: 20px;
  }
`;

export { Container };
