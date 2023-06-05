import React from "react";
import Card from "./Cards";
import Slide1 from "./slider1";
import Card_Item from "./Card item";
import Navbar from "./Slider";
import Slider from "./Slider";

const Home = () => {


  return (
    <>
     <Slider/>
     <div className="f">
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

 
