import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  margin: 50px 0;
`;

export { Container };
