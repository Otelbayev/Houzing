import styled from "styled-components";
import search from "../../assets/icons/search.svg?react";
import filter from "../../assets/icons/setting.svg?react";
import houses from "../../assets/icons/houses.svg?react";
import { Button } from "antd";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px 0;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 5px;
    .width {
      width: 50%;
      padding: 0 15px;
    }
    & > div {
      width: 100%;
    }
  }
`;

Container.Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 700px) {
    gap: 10px;
  }
`;

export const Icon = styled.div``;

Icon.Houses = styled(houses)``;
Icon.Search = styled(search)`
  margin-right: 5px;
`;
Icon.Filter = styled(filter)`
  margin-right: 5px;
`;

Container.Btn = styled(Button)`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #e6e9ec;
  height: 44px;
  border-radius: 2px;
  @media (max-width: 700px) {
    height: 36px;
    width: 50%;
    justify-content: center;
  }
`;
