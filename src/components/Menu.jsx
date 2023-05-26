import React from "react";
import Card from "./Cards";
import Slide1 from "./slider1";
import Card_Item from "./Card item";
import { useSelector } from "react-redux";


const Menu = () => {
  const full = useSelector((state) => state.Products.full);

  const { Products } = useSelector((state) => state.Products);

  return (
    <>
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
      <Card_Item />
      <Slide1 />
    </>
  );
};

export default Menu;
