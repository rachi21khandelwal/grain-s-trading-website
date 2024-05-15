import React, { useState } from 'react';

import './BuyerLogin.css'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Homenav from './Homenav';
function BuyerLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);


  const handleSub=()=>{
    const postURL = "http://localhost:4000/buyer/loginn" //Our previously set up route in the backend
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
        alert('Successfully Login!');
    })
    nav("/app")
  }




  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = strongPasswordRegex.test(newPassword);

    setPasswordValid(isValidPassword);
  };


  const handleSubmit = (e) => {
    e.preventDefault();


  



    if (!passwordValid) {
      console.log('Invalid password format');
      return;
    }
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset form after successful submission
    setUsername('');
    setPassword('');
    setPasswordValid(false);
  
  
    



  };
  const nav=useNavigate();
 



  const isSubmitDisabled = !username || !password || !passwordValid;

  return (
    <>
    <Homenav/>
    <div className="container-login">
   
      <form className="login-form-buyer" onSubmit={handleSubmit}>
        <h2 class="logoh2">Login as Buyer</h2>
        <img class="imglogo" src="mainlogo.jpeg"/>
        <div className="input-group-buyer">
          <h3 id="input-group-buyerr" htmlFor="username">Username:</h3>
          <input
           
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-group-buyer">
          <h3 id="input-group-buyerr" htmlFor="password">Password:</h3>
          <input
            type='password'
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {!passwordValid && (
            <span className="error-msg">Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.</span>
          )}
        </div>
        <button class="button-buyer" type="submit" disabled={isSubmitDisabled} onClick={handleSub}>Login</button>
      </form>
      
    </div>
    <Footer/>
    </>
  );
}

export default BuyerLogin;
