import React from "react";
import Banner from "./Banner";
import Categories from "./Categories";
import FreeShipping from "./FreeShipping";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <FreeShipping />
    </div>
  );
};

export default Home;
