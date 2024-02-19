import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
import CategoryCard from "../CategoryCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { mockCategory } from "../../mock/mock";

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

export const Category = () => {
  const [data, setData] = useState(mockCategory);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/categories/list")
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);
  return (
    <Container className="container">
      <div className="wrapper">
        <Content>
          <h1 className="title">Category</h1>
          <div className="info">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </div>
        </Content>
        <Slider {...settings}>
          {data?.length &&
            data.map((value) => {
              return <CategoryCard key={value.id} data={value} />;
            })}
        </Slider>
      </div>
    </Container>
  );
};

export default Category;
