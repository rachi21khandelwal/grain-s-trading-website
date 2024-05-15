import React,{useState} from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './Flip.css';
import Logout from "./Logout";
import LogoutApp from "./LogoutApp";

const Flip = ({size, setShow}) => {
const nav=useNavigate();
function handle1(){
    nav("/check");
}

// function handle2(){
//     nav("/wall");
// }

function handle3(){
    nav("/sell2");
}
// function handle4(){
//     nav("/bus");
// }
function handle5(){
    nav("/addtocart")
}

function handle6(){
    nav("/graph")
}
function handle7(){
    nav("/weather")
}
function handle8(){
    nav("/news")
}

function handle9(){
    nav("/main")
}
    return(
<>
<div class="fmain">
    
<div class="f11">
<img width="71" class="fi" src="mainlogo.jpeg"/>

    <input  class="f2"   /> 

    <button  onClick={handle5} class="btnf" id="one">Buy</button>
    {/* <button  onClick={handle4} class="btnf" id="one">Add</button> */}
< a href="" onClick={handle3} id="one">About</a>
<a href=" " onClick={handle7} id="one">Weather</a>
{/* <a href=" "   onClick={handle2} id="one"> More</a> */}
<a href=" "   onClick={handle6} id="one"> Graph</a>
<a href=" "   onClick={handle8} id="one">News</a>

{/* <FaCartPlus onClick={handle1} class="f4"/> <span class="n1">Cart</span> */}
{/* <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
                </div> */}
   <a href=" "   onClick={handle9} id="one">Logout</a>
</div>
</div>

</>
    );
}
export default Flip;