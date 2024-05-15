



import React from "react";
import './index.css';
import './Filter.css'
import { useHistory } from "react-router-dom";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartPlus, FaCircle, FaDotCircle, FaSearch } from "react-icons/fa";
const A11 =({ isShowLogin })=>{

    

    const a=[

        {
            img: "https://www.grainmart.in/wp-content/uploads/2020/02/slider2-300x210.jpg",
            name:"Coarse Cerals",
            ename:"Bajra",
            price:1500,
            dprice:2000,
            state:false
        },
        { 
            img:"https://www.grainmart.in/wp-content/uploads/2021/05/images-3-500x450.jpeg",
            name:"Pulses",
            ename:" Green Moong whole",
            price:2400,
            dprice:2500,
            state:false
        },
        {
            img:"https://www.grainmart.in/wp-content/uploads/2021/02/fresh-healthy-maize-grain-300x210.jpg",
            name:" Coarse Cereals",
            ename:"Maize",
            price:4500,
            dprice:5000,
            state:false
        },
        {
            img:"https://www.grainmart.in/wp-content/uploads/2022/10/AD-37-Mr.Idly-Copy-300x210.jpg",
            name:" Basmati Rice ",
            ename:"Mr.Idly",
            price:2500,
            dprice:3000,
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
    <span class="box58">  <FaDotCircle/> {x.name}</span> <br/><br/>
    <span class="box59i"> { x.ename}</span><br/> <br/>
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
}
export default A11