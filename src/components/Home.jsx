import React from "react";
import Slide1 from "./slider1";
import Card_Item from "./Card item";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="f row">
        <Card_Item />
        <Card_Item />
        <Card_Item />
        <Card_Item />
      </div>
      <Slide1 />
    </>
  );
};

export default Home;
