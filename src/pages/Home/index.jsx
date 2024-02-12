import React from "react";
import Sidebar from "../../components/Sidebar";
import Carousel from "../../components/Carousel";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Sidebar $home={"true"} />
      </Carousel>
    </div>
  );
};

export default Home;
