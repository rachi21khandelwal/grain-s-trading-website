

import React from "react";
import './index.css';
import { FaCartPlus, FaCircle, FaDotCircle, FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from './Cart';
import './Filter.css'
const A1 =({ isShowLogin })=>{

    

    const a=[

        {
            img: "https://www.grainmart.in/wp-content/uploads/2022/11/Kabuli-Chana1-300x210.jpg",
            name:"Pulses",
            ename:"Chickpeas,kabuli chana",
            price:2500,
            dprice:3500,
            state:false
        },
        { 
            img:"https://www.grainmart.in/wp-content/uploads/2022/06/IMG_20220601_094129_1-1-300x210.jpg",
            name:" Wheat",
            ename:" Wheat",
            price:1500,
            dprice:1800,
            state:false
        },
        {
            img:"https://www.grainmart.in/wp-content/uploads/2022/07/Raw-Rice-300x210.png",
            name:" Non-Basmati Rices",
            ename:"Organic Raw Rice",
            price:5500,
            dprice:7000,
            state:false
        },
        {
            img:"https://www.grainmart.in/wp-content/uploads/2022/04/sorghum-300x210.png",
            name:" Coarse Cereals ",
            ename:"Healthy Preserved Sorghum",
            dprice:6500,
            price:4000,
            state:false
        },
    ];
    const [endresult, setEndresult] = useState(a);
   








  
return(
  
     <div className={`${!isShowLogin ? "active" : ""} show`}>
     
    {
    endresult.map((x,index)=>(
   <div id="boxmidle">
    <div class="box57"> <img src={x.img} class="box57img"/></div><br/>
    <span class="box58"> <FaDotCircle/> {x.name}</span><br/><br/>
    <span class="box59i"> { x.ename}</span><br/><br/>
   <div class="box60" style={{ 
    backgroundImage: `url("like2.png")` }}></div>
    <span class="box61"> {x.dprice} INR</span>
    <span class="box62"> {x.price} INR
    </span>
    
   </div>
    ))
}

    </div>
);
}
export default A1