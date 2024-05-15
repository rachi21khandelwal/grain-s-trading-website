import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import './style.css'
import { useState } from "react";
import SplashLog from "./SplashLog";
import Popup from "reactjs-popup";
import RoutingLog from "./RoutingLog";
function App2(){

const[isShowLogin,setishowLogin]=useState(false)
const handleLoginClick=() =>{
    setishowLogin((isShowLogin)=>!isShowLogin)
}
return(
    <div>
        <Navbar handleLoginClick={handleLoginClick}/>
       
        <Login isShowLogin={isShowLogin}/>
        
    </div>
)

}
export default App2