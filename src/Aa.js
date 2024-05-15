import React from "react";
import './index.css';
import { useNavigate } from "react-router-dom";
function Aa(){
const nav=useNavigate();


function handle(e){
    nav("/ee");
    
}



return(
    <div>
      
 <button onClick={handle}  class="box63" >Mostly Viewed</button>

 
    </div>
);
}
export default Aa