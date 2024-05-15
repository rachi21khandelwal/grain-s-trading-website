import React, { useState } from "react";
import './Extra.css';

function Artists() {
  const[firstname,setfirst]=useState();
const[lastname,setlast]=useState();
const[email,setemail]=useState;
const[pass,setpass]=useState();
const[password,setpassword]=useState();
  // const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
  //   const postURL = "http://localhost:4000/signup" //Our previously set up route in the backend
  //   fetch(postURL, {
  //       method: 'POST',
  //       headers: {
  //           'Accept': 'application/json',
  //           'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ // We should keep the fields consistent for managing this data later
  //        firstname:firstname,
  //        lastname:lastname,
  //        email:email,
  //        pass:pass,
  //         password:password
  //       })
  //   })
  //   .then(()=>{
  //       // Once posted, the user will be notified 
  //       alert('You have been added to the system!');
  //   })
    
  // }
   
    return (
      <div id="artg" style={{ 
        backgroundImage: `url("w8.jpg")` }}> 
        <div class="art">
      <form className="form1" >
        <p className="title">Register</p>
        <p className="message">Signup now and get full access</p>
        <div className="flex">
          <label>
            <input required placeholder="" 
            type="text" className="input" value={firstname} onChange={event=>setfirst(event.target.value)} />
            <span>First Name</span>
          </label>
  
          <label>
            <input required placeholder="" 
            type="text" className="input" 
            value={lastname} onChange={event=>setlast(event.target.value)}/>
            <span>Last Name</span>
          </label>
        </div>
  
        <label>
          <input required placeholder="" 
          type="email" className="input"
          value={email} onChange={event=>setemail(event.target.value)} />
          <span>Email</span>
        </label>
  
        <label>
          <input required placeholder="" 
          type="password" className="input"
          value={pass} onChange={event=>setpass(event.target.value)} />
          <span>Password</span>
        </label>
  
        <label>
          <input required placeholder="" 
          type="password" className="input"
          value={password} onChange={event=>setpassword(event.target.value)} />
          <span>Confirm password</span>
        </label>
  
        <button  className="submit">
          Submit
        </button>
  
        <p className="signin">
          Already have an account? <a href="#">Sign in</a>
        </p>
      </form>
</div>
      </div>
    );
  }

  export default  Artists