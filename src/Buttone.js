import React from "react";
import { useNavigate } from "react-router-dom";
import Aa from "./Aa";
import A1 from "./A1";
import A2 from "./A2";
function Buttone(){


    const nav=useNavigate();
    function handle(){
        <A1/>
    }
    function handle1(){
        <A2/>
    }

    return(


        <>



        <button onClick={handle}>First</button>
        <button onClick={handle1}>SEcond</button>
        </>
    )

}
export default Buttone