import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import './style.css'
import { useState } from "react";
import SplashLog from "./SplashLog";
import Popup from "reactjs-popup";
import Navbar1 from "./Navbar1";
import Phonereg from "./Phonereg";
import Navlogout from "./Navlogout";
import Logout from "./Logout";



function LogoutApp(){
    

const[isShowLogin,setishowLogin]=useState(false)
const handleLoginClick=() =>{
    setishowLogin((isShowLogin)=>!isShowLogin)
}
return(
    <div>
        <Navlogout handleLoginClick={handleLoginClick}/>
       
        <Logout isShowLogin={isShowLogin}  />
        
    </div>
)

}
export default LogoutApp