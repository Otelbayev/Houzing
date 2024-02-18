import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px 0;
  background: white;
  gap: 30px;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  gap: 20px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;
