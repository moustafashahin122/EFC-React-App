import React, { useEffect, useState } from "react";
import "./CSS/Card.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, ToCart } from "../redux/slices/CartSlice";

// import { BsCartPlusFill} from "react-icons/ai";
// import { BsCartPlusFill} from "react-icons/ai";

function Card(props) {
    const { id, title, description, price } = props.product;
    // const { cartItemsCount } = useSelector((state) => state.Cart);
    const quantity = useSelector((state) => state.Cart.cartItems[id]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ToCart(id));
    }, []);



    const add = () => {
        // setquantity(quantity + 1);
        // console.log(quantity);
        dispatch(addToCart(id));

    };

    const remove = () => {
        // setquantity(quantity - 1);
        dispatch(removeFromCart(id));
    };
    const q1 = () => {
        // setquantity(quantity - 1);
        dispatch(removeFromCart(id));

    };

    return (
        <div className="col-12 col-md-6 col-lg-3" >
            <div className="card1 ">
                <div className="card-detials">
                    <div className="img-contener">
                        <img draggable="false" src="https://kfcprodnecmsimage.azureedge.net/cmsimages/imagestemp/desktop/ic_deals3x0211.png" alt="" />
                    </div>
                    <div className="text" >
                        <p className="text-title" style={{ height: "2em" }}>
                            {title}
                        </p>
                        <p className="text-body txtn " >
                            {description}                            <span className="link" >
                                <a href="https/google.com">
                                    view more
                                </a>
                            </span>
                        </p>
                        <div className="d-flex my-2 justify-content-between" >
                            <p className="price" >
                                {price}$
                            </p>

                            <div className="c-button" style={quantity == 0 ? { display: "none" } : { display: "" }}>
                                <button type="button" onClick={add} className="btn btn-danger" >+</button>
                                <span className="count">{quantity}</span>
                                <button type="button" className="btn btn-danger" onClick={remove} >-</button>
                            </div>
                            <p className="sale">
                                sale 50%
                            </p>
                        </div>
                    </div>
                    <span>
                        <img className="new" /*style={quantity = "ture" ? {display:"none"} : {display:""} }*/
                            src={require("../assets/new.png")}
                            alt="" srcset=""
                        />
                    </span>
                    <button className="card-button btn btn-danger" style={quantity > 0 ? { display: "none" } : { display: "" }} onClick={add} >Add To Card </button>
                    <button className="card-button btn btn-danger" onClick={q1} style={quantity == 0 ? { display: "none" } : { display: "" }} >remove in myCard </button>
                </div>
            </div>
        </div>
    );
}
export default Card;
