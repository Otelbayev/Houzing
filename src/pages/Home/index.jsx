import React from "react";
import Sidebar from "../../components/Sidebar";
import Carousel from "../../components/Carousel";
import Recommended from "../../components/Recomended";
import Why from "../../components/Why";
import Banner from "../../components/Banner";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Sidebar $home={"true"} />
      </Carousel>
      <Recommended />
      <Why />
      <Banner />
    </div>
  );
};

export default Home;
