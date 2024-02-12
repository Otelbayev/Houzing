import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";

import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

export const GenCarousel = ({ children }) => {
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
    <div style={{ position: "relative", zIndex: 0 }}>
      {children}
      <Container>
        <Carousel ref={slider}>
          <Img src={img1} />
          <Img src={img2} />
        </Carousel>
        <Blur />
        <Content>
          <Content.Title>Skyper Pool Partment</Content.Title>
          <Content.Desc className="subChild">
            112 Glenwood Ave Hyde Park, Boston, MA
          </Content.Desc>
          <Content.Price>5,250 / month</Content.Price>
        </Content>
        <Arrow data-name="left" onClick={onMove} left={"true"} />
        <Arrow data-name="right" onClick={onMove} name="right" />
      </Container>
    </div>
  );
};

export default GenCarousel;
