import styled from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 50px 0;
  background: white;
  gap: 30px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  @media (max-width: 700px) {
    margin: 20px 0;
    padding: 15px;
  }
`;

export { Content };
