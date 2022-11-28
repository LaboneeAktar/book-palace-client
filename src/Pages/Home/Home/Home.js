import React from "react";
import Advertisement from "./Advertisement";
import Banner from "./Banner";
import Categories from "./Categories";
import FreeShipping from "./FreeShipping";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Advertisement></Advertisement>
      <Categories></Categories>
      <FreeShipping />
    </div>
  );
};

export default Home;
