import React from "react";
import Navbar from "./Navbar";
import Login from "./Login";
import './style.css'
import { useState } from "react";
import SplashLog from "./SplashLog";
import Popup from "reactjs-popup";
import A1 from "./A1";
import A2 from "./A2";
import Sa from "./Sa";
function App3(){

const[isShowLogin,setishowLogin]=useState(false)
const handleLoginClick=() =>{
    setishowLogin((isShowLogin)=>!isShowLogin)
}
return(
    <div>
        
       
        <A1 isShowLogin={isShowLogin}/>
        <A2 handleLoginClick={handleLoginClick}/>
        
    </div>
)

}
export default App3