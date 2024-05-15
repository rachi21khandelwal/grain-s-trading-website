import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import './style.css'
import { useState } from "react";
import SplashLog from "./SplashLog";
import Popup from "reactjs-popup";
import A1 from "./A1";
import A2 from "./A2";
import A3 from "./A3";
import A11 from "./A11";
function App4(){

const[isShowLogin,setishowLogin]=useState(false)
const handleLoginClick=() =>{
    setishowLogin((isShowLogin)=>!isShowLogin)
}
return(
    <div>
        
       
        <A11 isShowLogin={isShowLogin}/>
        <A3 handleLoginClick={handleLoginClick}/>
        
    </div>
)

}
export default App4