

import React from "react";
import './index.css';
import { FaCartPlus, FaCircle, FaDotCircle, FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from './Cart'
import { Filter } from "@material-ui/icons";


    

    const a=[

        {
            img: "https://www.grainmart.in/wp-content/uploads/2022/11/Kabuli-Chana1-300x210.jpg",
            name:"Pulses",
            ename:"Chickpeas,kabuli chana",
            price:4500,
            dprice:3500,
            state:false
        },
        { 
            img:"https://www.grainmart.in/wp-content/uploads/2022/06/IMG_20220601_094129_1-1-300x210.jpg",
            name:" Wheat",
            ename:" Wheat",
            price:2500,
            dprice:1500,
            state:false
        },
        {
            img:"https://www.grainmart.in/wp-content/uploads/2022/07/Raw-Rice-300x210.png",
            name:" Non-Basmati Rices",
            ename:"Organic Raw Rice",
            price:6500,
            dprice:5000,
            state:false
        },
        {
            img:"https://www.grainmart.in/wp-content/uploads/2022/04/sorghum-300x210.png",
            name:" Coarse Cereals ",
            ename:"Healthy Preserved Sorghum",
            price:9500,
            dprice:3000,
            state:false
        },
    ];
    const [endresult, setEndresult] = useState(a);
   








  
return(
  
     <div className={`${!isShowLogin ? "active" : ""} show`}>
     
    {
    endresult.map((x,index)=>(
   <div class="box56">
    <div class="box57"> <img src={x.img} class="box57img"/></div><br/>
    <span class="box58"> <FaDotCircle/> {x.name}</span><br/><br/>
    <span class="box59i"> { x.ename}</span><br/><br/>
   <div class="box60" style={{ 
    backgroundImage: `url("like2.png")` }}></div>
    <span class="box61"> {x.dprice}</span>
    <span class="box62"> {x.price}
    </span>
    
   </div>
    ))
}

    </div>
);

export default Filter