import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

function Homenav(){
    const nav=useNavigate();
    function handle1(){
        nav("/main ");
    }
    return(
        <>
        <div class="fmain1">
            <p class="hub1">Gran Hub</p>
            < a href="" onClick={handle1} class="gran">Home</a>
        </div>
        </>
    )
}
export default Homenav;