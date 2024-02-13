import { Blur, Container, Content, Img, Wrap } from "./style";
import noimg from "../../assets/img/noimg.jpeg";
import category from "../../assets/img/category.png";

export const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Wrap>
      <Container onClick={onClick}>
        <Img src={category || noimg} />
        <Blur />
        <Content>{name || "Category Name"}</Content>
      </Container>
    </Wrap>
  );
};

export default CategoryCard;
