import { Select } from "antd";
import styled from "styled-components";
import del from "../../assets/icons/delete.svg?react";
const Wrapper = styled.div`
  margin: 50px 0;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  justify-content: ${({ gap }) => (gap ? "space-around" : "start")};
  gap: 20px;
  margin-bottom: 20px;
`;

const SelectAnt = styled(Select)`
  min-width: 200px;
  width: 100%;
  max-width: 200px;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

const IconDelete = styled(del)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: red;
    }
  }
`;
export { Wrapper, MenuWrapper, Section, SelectAnt, IconDelete };
