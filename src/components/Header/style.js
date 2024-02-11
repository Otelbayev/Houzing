import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--colorPrimary);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
`;
Content.Left = styled.div``;
Content.Center = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
Content.Link = styled(NavLink)`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  &.active {
    color: red;
  }
`;
Content.Right = styled.div``;
