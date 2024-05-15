import React,{useState} from "react";
import { FaCartPlus, FaLocationArrow, FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import './Flip.css';
import Logout from "./Logout";
import LogoutApp from "./LogoutApp";
function Flipex(){

const nav=useNavigate();
function handle1(){
    nav("/appmap");
}
function handle2(){
    nav("/feedbackform");
}

function handle3(){
    nav("/bus");
}
function handle4(){
    nav("/detailsabout");
}
function handle5(){
    nav("/main");
}



    return(
<>
<div class="fmain">
    
<div class="f11">
<img width="71" class="fi" src="mainlogo.jpeg"/> 

    <input class="f2" placeholder="Search grains,brands and many more"   /> <FaSearch  class="f21"/>

    <button  onClick={handle3} class="btnf1">Add</button>
< a href="" onClick={handle4} id="one1"> More Information</a>

<a href=" "   onClick={handle2} id="one1"> Feedback</a>

<a href=" " onClick={handle1} id="one1">Location</a>
<a href=" " onClick={handle5} id="one1">Logout</a> 
</div>
</div>

</>
    );
}
export default Flipex;