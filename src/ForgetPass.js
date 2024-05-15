import React from "react";
import './Extra.css'
import { useNavigate } from "react-router-dom";
function ForgetPass(){

    const nav=useNavigate();
    function handle(){
        nav("/app")
    }

    return(
        <>
    <div class="art0" style={{ 
    backgroundImage: `url("w2.jpg")` }}> 
<div class="art1">
      <form className="form" >
      <p className="title1">Reset Password</p>
<label>
          <input required placeholder="" 
          type="password" className="input" />
          <span>Password</span>
        </label>
  
        <label>
          <input required placeholder="" 
          type="password" className="input" />
          <span>Confirm password</span>
        </label>

        <button onClick={handle} className="submit">
          Submit
        </button>
  </form>
  </div>
  </div>
        </>
    );
}
export default ForgetPass;