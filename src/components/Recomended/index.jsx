import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import HouseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { mockData } from "../../mock/mock";

const settings = {
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,
  appendDots: (dots) => <h1> {dots} </h1>,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

export const Recommended = () => {
  const [data, setData] = useState(mockData);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`api/v1/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);
  return (
    <Container className="container">
      <div className="wrapper">
        <Content>
          <h1 className="title">Recommended</h1>
          <div className="info">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </div>
        </Content>
        <Slider {...settings}>
          {data.map((value, index) => {
            return (
              <HouseCard
                key={index}
                gap={10}
                onResizeClick={() => navigate(`/properties/${value.id}`)}
                data={value}
              />
            );
          })}
        </Slider>
      </div>
    </Container>
  );
};

export default Recommended;
