import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import './style.css'
import { useState } from "react";
import SplashLog from "./SplashLog";
import Popup from "reactjs-popup";
import Navbar1 from "./Navbar1";
import Phonereg from "./Phonereg";



function Appphone(){
    

const[isShowLogin,setishowLogin]=useState(false)
const handleLoginClick=() =>{
    setishowLogin((isShowLogin)=>!isShowLogin)
}
return(
    <div>
        <Navbar1 handleLoginClick={handleLoginClick}/>
       
        <Phonereg isShowLogin={isShowLogin}  />
        
    </div>
)

}
export default Appphone