// Signup.js
import React, { useState } from 'react';
import './BuyerSignup.css';
import Footer from './Footer';
import Homenav from './Homenav';
import { useNavigate } from 'react-router-dom';
function SellerSignup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const nav=useNavigate();
  function handle(){
    nav("/sellerlogin")
  }
  
const handleSub=()=>{
   // Once the form has been submitted, this function will post to the backend
    const postURL = "http://localhost:4000/seller/signup" //Our previously set up route in the backend
    fetch(postURL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // We should keep the fields consistent for managing this data later
          username:username,
          email:email,
          password:password,
          confirmPassword:confirmPassword
        })
    })
    // .then(()=>{
    //     // Once posted, the user will be notified 
    //     alert('You have been added to the system!');
    // })
    nav("/sellerlogin")
}




  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    validateForm();
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm();
  };


  
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
    validateForm();
  };

  const handleConfirmPasswordChange = (e) => {
    const newPassword = e.target.value;
    setConfirmPassword(newPassword);
    validateForm();
  };

  const validatePassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const isValidPassword = strongPasswordRegex.test(password);
    setPasswordValid(isValidPassword);
  };

  const validateForm = () => {
    setFormValid(username !== '' && email !== '' && password !== '' && password === confirmPassword && passwordValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValid) {
      console.log('Form is not valid');
      return;
    }
    // Proceed with signup logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Clear form fields after submission
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPasswordValid(false);
    setFormValid(false);
  };
  

  return (
    <>
    <Homenav/>
    <div className="containersignup">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 class="logoh21">Sign Up as Seller</h2>
        <img class="imglogo1" src="mainlogo.jpeg"/>
        <div className="input-group-signup">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-group-signup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-group-signup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {!passwordValid && (
            <span className="error-msg">Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.</span>
          )}
        </div>
        <div className="input-group-signup">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          {password !== confirmPassword && (
            <span className="error-msg">Passwords do not match.</span>
          )}
        </div>
        <button onClick={handleSub} className=" button-signup"  disabled={!formValid}>Sign Up</button>
      </form>
    </div>
    <Footer/>
    </>
  );
}

export default SellerSignup;
