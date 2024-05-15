import React from "react";
import './index.css';
import App2 from './App2';
import Appphone from "./Appphone";
import { FaSearch } from "react-icons/fa";
import Navbar2 from "./Navbar2";
function Cc1(){


return(
    <div>
  <div class="box50"  style={{ 
    backgroundImage: `url("bb4.jpg")` }}>
      <div> <App2 /> </div>
      <div> <Appphone/> </div>
      <div><Navbar2/> </div>
      
<div class="box51b">Welcome to Gran Hub</div>
<FaSearch class="search"/>
 <input  placeholder="Search for....."  class="box51a"/>

        <div class="box51">
        <div class="box52"> <div class="box53" style={{ 
    backgroundImage: `url("h3.jpg")` }}>  </div> <h5 >WHEAT</h5></div>


      <div class="box52"><div class="box53" style={{ 
    backgroundImage: `url("h6.jpg")` }}>  </div> <h5 >MAIZE</h5></div>


      <div class="box52"><div class="box53" style={{ 
    backgroundImage: `url("h5.jpg")` }}>  </div> <h5 >MILLET</h5></div>
        </div>
    </div>
   
    </div>
);
}
export default Cc1