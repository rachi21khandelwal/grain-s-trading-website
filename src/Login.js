
import { useNavigate } from 'react-router-dom';

import React, { useState }  from 'react'



  const Login =({ isShowLogin })=>{



const[username,setuser]=useState();
const[password,setpass]=useState();

const nav =useNavigate();
    
    function handle2(){
      nav("/forgetpass");
    }
 /*   
function handle(){
  if(id==pass){
    set("successfully");
  
  }
}
  */


const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
  const postURL = "http://localhost:4000/login" //Our previously set up route in the backend
  fetch(postURL, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ // We should keep the fields consistent for managing this data later
        username:username,
        password:password
      })
  })
  .then(()=>{
      // Once posted, the user will be notified 
      alert('Login to the Gran Hub . Successfully!');
  })
  nav("/buyselllogin");
  //in place of app(buyer)
}
 

return(
 <div className={`${!isShowLogin ? "active" : ""} show`}>
        
        
    
 
  <div class="box17a" >
    
    <div class="box18a"> 
        
    <span class="p2a">Log in to Gran Hub</span>
    <div class="box16a" >
User name or Email id:<input class="texta" name="username "  autoComplete='off' required onChange={event => setuser(event.target.value)}  />  <br/><br/>



Password: <input type="password" name="password"  class="passa"  required onChange={event => setpass(event.target.value)}  value={password}/><br/><br/>

<input type="checkbox"  class="boxc" /> Remember me<br/>

</div>

<button onClick={handleSubmit} class="btn3a" >Login</button> <br/>
<a href="" onSubmit={handle2} class ="boxab">Forget Password?</a>


</div> 
  </div>
  
  
  </div>
  
);

}
export default Login