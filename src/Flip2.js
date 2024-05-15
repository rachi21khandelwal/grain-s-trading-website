import React,{useState} from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './Flip.css';
import Logout from "./Logout";
import LogoutApp from "./LogoutApp";
function Flip2(){

const nav=useNavigate();
function handle1(){
    nav("/check");
}

function handle2(){
    nav("/weather");
}

function handle3(){
    nav("/sell2");
}
function handle4(){
    nav("/bus");
}
function handle5(){
    nav("/feedbackform");
}



    return(
<>
<div class="f1">
    
<div class="f11">
<img width="71" class="fi" src="mainlogo.jpeg"/>

    <input  class="f2" placeholder="Search grains,brands and many more"   />
    
    
 <FaSearch  class="f21"/> 
    <button  onClick={handle4} class="btnf" id="one">Add</button>
< a href="" onClick={handle3} id="one">About</a>

<a href=" "   onClick={handle2} id="one"> Weather</a>
<a href=" "   onClick={handle5} id="one"> Feedback</a>
   <LogoutApp id="one" /> 
</div>
</div>

</>
    );
}
export default Flip2;