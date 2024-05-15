import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function But(props){

const[pass,usepass]=useState(' ');
const[pass1,usepass1]=useState(' ');
  const nav=useNavigate();

function handlebutton(event){
if(pass==pass1){
    nav("/App");
}
else{
    alert("errorr");
}
}
return(

    <div>
       First <input type="text"  value=" pass" onChange={event=>usepass(event.target.value)}/>
      Second  <input type="text"  value=" pass1" onChange={event=>usepass1(event.target.value)}/>
     <button onClick={handlebutton}>Click itt</button>
    </div>
);
}
export default But;