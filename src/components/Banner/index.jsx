import { Arrow, Blur, Container, Content, Img } from "./style";
import { Button } from "../../components/Generics";

import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house1.png";
import { Carousel } from "antd";
import { useRef } from "react";

export const GenCarousel = () => {
  const slider = useRef();

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.prev();
    if (name === "left") slider.current.next();
  };

  return (
    <Container>
      <Carousel ref={slider}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home,
          the Week's Most Popular Home
        </Content.Title>
        <Button height="44" width="85">
          Read More
        </Button>
      </Content>
      <Arrow data-name="left" onClick={onMove} left={"true"} />
      <Arrow data-name="right" onClick={onMove} name="right" />
    </Container>
  );
};

export default GenCarousel;
