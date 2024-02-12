import { NavLink } from "react-router-dom";
import styled from "styled-components";
import menu from "../../assets/icons/nav.svg?react";
import x from "../../assets/icons/x.svg?react";

export const Container = styled.div`
  background-color: var(--colorPrimary);
  position: relative;
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

  @media (max-width: 700px) {
    position: fixed;
    background: #fff;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
    transform: ${({ $menu }) =>
      $menu === "true" ? "translateY(0)" : "translateY(-100%)"};
  }
`;
Content.Link = styled(NavLink)`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  &.active {
    color: red;
  }
  @media (max-width: 700px) {
    color: var(--colorPrimary);
    font-weight: 500;
    font-size: 18px;
  }
`;
Content.Right = styled.div``;

Content.MenuWrap = styled.div`
  display: none;
  width: 60px;
  @media (max-width: 700px) {
    display: block;
  }
`;

Content.Menu = styled(menu)`
  width: 20px;
  height: 16px;
  cursor: pointer;
`;

export const Icon = styled(x)`
  display: none;
  @media (max-width: 700px) {
    display: block;
    position: absolute;
    top: 20px;
    left: 20px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
