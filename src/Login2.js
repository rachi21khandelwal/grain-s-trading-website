
import { useNavigate } from 'react-router-dom';
import './index.css';
import React, { useState }  from 'react'
import Ee from './Ee';


  const Login2 =()=>{



const[id,setuser]=useState();
const[pass,setpass]=useState();
const[status,set]=useState( );

function handle(){
  if(id==pass){
    set("successfully");
  
  }
}
  

 

return(
 <div >
        
        <form>
    
 
  <div class="box17a" >
    
    <div class="box18a">     
    <p class="p2">Log in to Grain's Addaa</p>
    <div class="box16a" >
User name or Email id: <br/><input type="text" class="texta" name="email "  autoComplete='off' required onChange={event => setuser(event.target.value)}  />  <br/><br/>



Password: <br/><input type="password" name="pass"  class="passa"  required onChange={event => setpass(event.target.value)}  value={pass}/><br/>

<input type="checkbox" class="boxc" /> Remember me<br/>

</div>
<br/>
<button type="submit" onSubmit={handle} class="btn3" >Login</button> <br/>
<a href="http://localhost:3000/ee" class ="boxab">Forget Password?</a><br/>
<p> {status}</p>

</div> 
  </div>
  
  </form>
  </div>
  
);

}
export default Login2