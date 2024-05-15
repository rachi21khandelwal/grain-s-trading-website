import React ,{useState}from "react";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import './index.css';
import Sell2 from "./Sell2";
import Sell3 from "./Sell3";
function Sell(){
    const[con,setcone]=useState(' ')
    const handle= con =>{
       
        setcone(con);
       


}


   
return(
    <div>
      <div>
  <div class="box74"  >
<div class="box92">
  Sellers<br/>
   <a href="#11"  class="box92a">Home </a>
   <a href="#22" class="box92a">About</a>
</div>


        <div class="box75">
       <input  class="box76" placeholder="Search for....."/>  
       <CountryDropdown
          value={con}
          onChange={handle} class="box78"  placeholder="Country"/>
     
  

   <select class="box78" >
   <option value="none" selected disabled hidden>In Category</option>
    <option  >Organic Raw Rice (Unpolishesh)</option>
    <option >Chickpeas</option>
    <option>BAJARA (PEARL MILLET)</option>
    <option >Pulses</option>
  </select>
  <button class="box77">Search</button>
   

        </div>
        
   
       
 

             
    </div>

         
            
    </div>
    
    
       </div>     
);
}
export default Sell