import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
 function Password(props){
    const nav=useNavigate();
    const [pass1,setpass1]=useState('');
    const [pass2,setpass2]=useState('');
    const[done,setdone]=useState('');
    function handleby(event){
        if(pass1=="kk"&&pass2=="kk"){
            setdone("sucess");
            nav("/Wel");
        }
        else
        setdone("try again");
    }
return(
<div>
    <h4>Reset Password</h4>
    Password :<input type="text" name="pass1" onChange={event=>setpass1(event.target.value)}/>
  Re-enter Password :<input type="text" name="pass2" onChange={event=>setpass2(event.target.value)}/>
  <button onclick={handleby}>back to login</button>
  <p align="center">{done}</p>
</div>
);

 }
 export default Password