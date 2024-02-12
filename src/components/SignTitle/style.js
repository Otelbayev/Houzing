import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  .in {
    border-bottom: ${({ $prop }) =>
      $prop === "/signin" && "3px solid var(--backgroundPrimary)"};
    padding-bottom: 5px;
    cursor: pointer;
  }
  .up {
    border-bottom: ${({ $prop }) =>
      $prop === "/signup" && "3px solid var(--backgroundPrimary)"};
    padding-bottom: 5px;
    cursor: pointer;
  }
`;
