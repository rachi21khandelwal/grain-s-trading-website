import React from 'react';
import './BuySellLogin.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import Homenav from './Homenav';
import Footer from './Footer';

function BuySellSignup() {

  const nav=useNavigate();
  function handle1(){
    nav("/buyersignup");
  }
  function handle2(){
    nav("/sellersignup");
  }
  return (
    <>
    <Homenav/>
    <div className="container22">
      <div className="big-div">
      <button className="centered-button"  onClick={handle1}> <div  class="image" style={{ 
    backgroundImage: `url("buyer-icon.png")` }}></div></button>
      </div>
      <div className="big-div">  <button  onClick={handle2} className="centered-button" > <div  class="image" style={{ 
    backgroundImage: `url("seller-icon.png")` }}></div></button></div>
    </div>
    <Footer/>
    </>
  );
}

export default BuySellSignup;

//uxwing