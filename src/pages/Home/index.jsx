import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Carousel from "../../components/Carousel";
import Recommended from "../../components/Recomended";
import Why from "../../components/Why";
import Banner from "../../components/Banner";
import Recent from "../../components/Recent";
import Category from "../../components/Category";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Carousel>
        <Sidebar $home={"true"} />
      </Carousel>
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </div>
  );
};

export default Home;
