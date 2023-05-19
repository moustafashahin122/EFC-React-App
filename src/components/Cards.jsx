import React, { useEffect, useState } from "react";
import "./CSS/Card.css"

// import { BsCartPlusFill} from "react-icons/ai";

function Card(){

    const [quantity,setquantity]=useState(0)

    const add=()=>{
        setquantity(quantity+1);
    } 
    
    const remove=()=>{
        setquantity(quantity-1);
    }
    const q1=()=>{
        setquantity(quantity-1);
    }
    
    useEffect(()=>{
        console.log(quantity);
    }
    ,[quantity]);
return(
<div className="col-12 col-md-6 col-lg-3" >
    <div className="card1">
        <div className="card-detials">
            <div className="img-contener">
                <img draggable="false" src="https://kfcprodnecmsimage.azureedge.net/cmsimages/imagestemp/desktop/ic_deals3x0211.png" alt=""/>
            </div>
            <div className="text">
                <p className="text-title"> 
                    Title Card
                </p>
                <p className="text-body">
                    Lorem ipsum dolor sit  consectetur. Quaerat ws sodit! 
                    <span className="link" >
                        <a href="https/google.com"> 
                        view more 
                        </a>
                        </span>
                </p>
                <div className="d-flex my-2 justify-content-between" >
                    <p className="price" >
                    100$
                    </p>
                
                <div className="c-button" style={quantity <= 0 ? {display:"none"} : {display:""} }>
                <button type="button"  onClick={add}  className="btn btn-danger" >+</button>                   
                <span className="count">0</span>
                    <button type="button" className="btn btn-danger" onClick={remove} >-</button>
                </div>
                    <p className="sale">
                    sale 50%
                    </p>
                    </div>
            </div>
            <span> 
                <img  className="new" /*style={quantity = "ture" ? {display:"none"} : {display:""} }*/
                    src={require("../assets/new.png")}
                    alt="" srcset=""
                />
            </span>
            <button className="card-button btn btn-danger" style={quantity > 0 ? {display:"none"} : {display:""} } onClick={add} >Add To Card </button>
            <button className="card-button btn btn-danger" onClick={q1} style={quantity <= 0 ? {display:"none"} : {display:""} } >remove in myCard </button>
        </div>
    </div>
    </div>  
)}
export default Card;
