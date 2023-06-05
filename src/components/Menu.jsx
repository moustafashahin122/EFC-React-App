import React from "react";
import Card from "./Cards";
import Slide1 from "./slider1";
import Card_Item from "./Card item";
import { useSelector } from "react-redux";
import Navbar from "./Slider";
import Slider from "./Slider";


const Menu = () => {
  const full = useSelector((state) => state.Products.full);

  const { Products } = useSelector((state) => state.Products);

  return (
    <>
     <Slider/>
     {/* <div className="f">
     <Card_Item />
     <Card_Item />
     <Card_Item />
     <Card_Item />
     </div> */}
      <div className='container'>
        <div className='row'>
          {full ? (
            Products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <Slide1 />
    </>
  );
};

export default Menu;

 
