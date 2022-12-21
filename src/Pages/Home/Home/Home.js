import React from "react";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Categories from "./Categories";
import FreeShipping from "./FreeShipping";
import WhyBookPalace from "./WhyBookPalace";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <Categories></Categories>
      <FreeShipping />
      <WhyBookPalace />
    </div>
  );
};

export default Home;
