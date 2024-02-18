import styled from "styled-components";
import bed from "../../assets/icons/bed.svg?react";
import bath from "../../assets/icons/bath.svg?react";
import garage from "../../assets/icons/car.svg?react";
import ruler from "../../assets/icons/ruler.svg?react";
import love from "../../assets/icons/love.svg?react";
import resize from "../../assets/icons/resize.svg?react";

const Wrap = styled.div`
  margin: ${({ $gap }) => $gap && `0 ${$gap}px`};
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  background: white;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(1);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 3px 3px 0 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ $footer }) => ($footer ? "row" : "column")};
  justify-content: ${({ $footer }) => $footer && "space-between"};
  padding-top: 24px;
  padding: 16px 20px;
  background: white;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ $row }) => ($row ? "row" : "column")};
  align-items: ${({ $footer }) => !$footer && "center"};
`;

const Icons = styled.div``;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)`
  transition: 0.3s;
  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 10px;
  background: #f6f8f9;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;
Icons.Love = styled(love)`
  transition: 0.3s;
  width: 30px;
  height: 30px;
  padding: 8px;
  border-radius: 10px;
  background: #f6f8f9;
  background: ${({ favorite }) => (favorite ? "red" : "#f6f8f9")};
  margin-left: 20px;
  cursor: pointer;
  & path {
    fill: ${({ favorite }) => favorite && "white"};
  }
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const Divider = styled.div`
  background: #e6e9ec;
  height: 1px;
  width: 100%;
`;

export { Container, Img, Content, Details, Icons, Divider, Wrap };
