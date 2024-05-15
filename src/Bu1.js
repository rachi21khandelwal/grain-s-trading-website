import React from "react";
import './index.css';
import { useNavigate } from "react-router-dom";
function Bu1(){
const nav=useNavigate();
function handle(e){
    nav("/bu");
     
}


return(
    <div>
    
 <button onClick={handle}  class="box64" >Popular</button>
 
    </div>
);
}
export default Bu1