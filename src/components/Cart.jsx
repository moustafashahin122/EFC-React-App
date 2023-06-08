import React from "react";
import Card from "./Cards";
import Slide1 from "./slider1";
import Card_Item from "./Card item";
import { useSelector } from "react-redux";


const Cart = () => {
  const full = useSelector((state) => state.Products.full);
  const cartItems = useSelector((state) => state.Cart.cartItems);

  console.log("cart");
  console.log(cartItems);
  let { Products } = useSelector((state) => state.Products);
  Products = Products.filter((product) => product.id in cartItems && cartItems[product.id] !== 0);
  console.log("products");
  console.log(Products);
  return (
    <>
      <div className='container'>
        <div className='row'>
          {Products.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Cart;
