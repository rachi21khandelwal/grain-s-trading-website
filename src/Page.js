
import './index.css';
import React, { useState }  from 'react'
import { useNavigate } from "react-router-dom";

function Page(props){
const[user,setuser]=useState(' ');
const[pass,setpass]=useState(' ');
const[status,setstatus]=useState(' ')

function handleButtonClick(event){
  if(user==pass){
   setstatus("done");
  }
  else{
    setstatus("noo");
  }
}
return(
  <div  class="box17" style={{ 
    backgroundImage: `url("s3.jpg")` }}>
        <div class="box18">aa</div>
        <div class="box18">
      <h1>Sign In</h1>
    <div class="box16" >
Name: <br/><input type="text" name="name "  onChange={event => setuser(event.target.value)}/>  <br/><br/>
Password: <br/><input type="password" name="pass" onChange={event => setpass(event.target.value)}/><br/><br/>

</div>
<br/>
<input type="button" onClick={handleButtonClick} value="Log in"/>
</div>
  </div>
);

}
export default Page