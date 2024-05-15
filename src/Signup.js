
import './index.css';
import React, { useState }  from 'react'
import { useNavigate } from "react-router-dom";
import './Signup.css'
function Signup() {
   
    const [id,setname] = useState('')
    
    const[pass,setpass] =useState(' ')
  const[pas,setpas]=useState(' ')
    const[status,setstatus]=useState(' ')


    


    return(
      <div>
         
<div class="box17l">

        <div class="box18l" style={{ 
      backgroundImage: `url("s4.jpg")` }}></div>
   <div class="box18l"> 
   <p>Sign up to Grain's Addaa</p>
  
    <div class="box16l" >
Name: <br/><input type="text" name="name " class="text"  onChange={event => setname(event.target.value)}/>  <br/><br/>
Password: <br/><input type="password" name="pass" class="pass" onChange={event => setpass(event.target.value)}/><br/><br/>
Re-enter Password: <br/><input type="password" name="pas" class="pass" onChange={event => setpas(event.target.value)}/><br/><br/>
</div>
<br/>
<button  class="btn3">Reset</button>



</div>
</div>

      </div>
    );
    }

export default Signup