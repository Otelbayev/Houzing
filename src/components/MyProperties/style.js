import styled from "styled-components";
import edit from "../../assets/icons/edit.svg?react";
import del from "../../assets/icons/delete.svg?react";

const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  margin-top: 32px;
`;

const Wrapper = styled.div`
  margin: 50px 0;
`;

const Icons = styled.div``;

Icons.Edit = styled(edit)`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  cursor: pointer;
  background: #f6f8f9;
  transition: 0.3s;
  &:hover {
    background: blue;
    path {
      fill: #fff;
    }
  }
  &:active {
    transform: scale(0.9);
  }
`;
Icons.Delete = styled(del)`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  padding: 5px;
  margin: 10px;
  background: #f6f8f9;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: red;
    path {
      fill: #fff;
    }
  }
  &:active {
    transform: scale(0.9);
  }
`;

const User = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  margin-left: ${({ flex }) => flex && "16px"};
`;

User.Img = styled.img`
  width: 113px;
  height: 113px;
`;

export { Container, Wrapper, Icons, User };

export const Table = styled.table`
  width: 100%;
  height: 100%;
`;
export const Th = styled.th`
  text-align: start;
`;
export const Td = styled.td`
  padding: 10px 0;
  .table-box {
    display: flex;
    align-items: stretch;
    gap: 10px;
    &__img {
      img {
        width: 120px;
        height: 115px;
        border-radius: 3px;
      }
    }
    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px 0;
      &__title {
        font-size: 16px;
        color: #0d263b;
        font-weight: 600;
      }
      &__subtitle {
        font-size: 14px;
        color: #696969;
        font-weight: 400;
        padding-top: 5px;
      }
      &__sale-price {
        font-size: 14px;
        color: #696969;
        font-weight: 400;
        padding-bottom: 5px;
      }
      &__price {
        font-size: 16px;
        color: #0d263b;
        font-weight: 600;
      }
    }
  }
`;
