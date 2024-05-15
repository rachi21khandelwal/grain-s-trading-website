
import './index.css';
import React, { useState }  from 'react'
import { useNavigate } from "react-router-dom";

function Login(props){
  const nav=useNavigate();
var[email,setuser]=useState();
var[pass,setpass]=useState(' ');



  const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
  const postURL = "http://localhost:4000/api/crop" //Our previously set up route in the backend
  fetch(postURL, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ // We should keep the fields consistent for managing this data later
        email:email,
        pass:pass
      })
  })
  .then(()=>{
      // Once posted, the user will be notified 
      alert('You have been added to the system!');
  })
}
return(
  <div>
        
       <form onSubmit={handleSubmit}>
 
  <div class="box17" >
    <div class="box18" style={{ 
    backgroundImage: `url("s1.jpg")` }}> </div>
    <div class="box18">     
    <p>Log in to Grain's Addaa</p>
    <div class="box16" >
User name or Email id: <br/><input type="text" class="text"  required onChange={event => setuser(event.target.value)}/>  <br/><br/>
Password: <br/><input type="password"   class="pass" required onChange={event => setpass(event.target.value)}/><br/><br/>
<a href="http://localhost:3000/reset" class ="boxa">Forget Password?</a>
</div>
<br/>
<button  type="submit" class="btn3">Login</button>

</div> 
  </div>
 
  </form>
  </div>
);

}
export default Login













