
import './index.css';
import React, { useState }  from 'react'
import { useNavigate } from "react-router-dom";

function Reset(props) {
    const nav=useNavigate();
    const [name,setname] = useState('')
    
    const[pass,setpass] =useState(' ')
  const[pas,setpas]=useState(' ')
    const[status,setstatus]=useState(' ')

    
  function handleButtonClick(event){
if(pas==name || pas==pass){

nav("/Login");
}
else if ( pas==pas) {
  nav("/About"); 
}
else {
    setstatus("Re-enter the details");
    
}
    }

    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/reset/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                name: name,
               pass:pass,
               pas:pas
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
    }
    return(
<div class="box17">
<form onSubmit={handleSubmit}>
        <div class="box18" style={{ 
      backgroundImage: `url("s4.jpg")` }}></div>
   <div class="box18"> 
   <p>Sign up to Grain's Addaa</p>
    <div class="box16" >
Name: <br/><input type="text" name="name "  onChange={event => setname(event.target.value)}/>  <br/><br/>
Password: <br/><input type="password" name="pass" onChange={event => setpass(event.target.value)}/><br/><br/>
Re-enter Password: <br/><input type="password" name="pas" onChange={event => setpas(event.target.value)}/><br/><br/>
</div>
<br/>
<input type="button" onClick={handleButtonClick}  class="btn3" value="Reset"/>
<p >{status}</p>
</div>
</form>
</div>
    );
    }

export default Reset;