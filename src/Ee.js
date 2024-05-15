import React from "react";
import './index.css';

import { useHistory } from "react-router-dom";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

function Ee(){

    
const nav=useNavigate();
    const a=[

        {
            name:"Pulses",
            ename:"Chickpeas,kabuli chana",
            price:4500,
            dprice:3500,
            state:false
        },
        {
            name:" Wheat",
            ename:" Wheat",
            price:2500,
            dprice:1500,
            state:false
        },
        {
            name:" Non-Basmati Rices",
            ename:"Organic Raw Rice",
            price:6500,
            dprice:5000,
            state:false
        },
        {
            name:" Non-Basmati Rices",
            ename:"Organic Raw Rice",
            price:6500,
            dprice:5000,
            state:false
        },
    ];
    const [endresult, setEndresult] = useState(a);
   





function handle(){
   nav("/aa");
}




  
return(
   <div>
    
     <button onClick={handle} class="box63">Mostly Viewed</button>
    {
    endresult.map((x,index)=>(
   <div class="box56">
    <div class="box57"></div>
    <p class="box58">  {x.name}</p>
    <p class="box59"> { x.ename}</p>
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
export default Ee