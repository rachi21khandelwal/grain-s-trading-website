import React, { useState } from "react";
//npm i react-icons


import { FaAddressBook,  FaUserCircle,FaAddressCard, FaBeer, FaFileContract, FaFontAwesomeLogoFull, FaHome, FaRegArrowAltCircleLeft, FaVoicemail, FaWalking } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {AiOutlineMail ,AiOutlineArrowRight} from 'react-icons/ai'
import './Sell.css';
import './Upload.css';
import App from "./App";

function Sellupload(){
	const[username,setuser]=useState();
	const[companyname,setcompanyname]=useState();
	const[email,setemail]=useState();
const nav= useNavigate();


const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
	const postURL = "http://localhost:4000/businessDetails" //Our previously set up route in the backend
	fetch(postURL, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ // We should keep the fields consistent for managing this data later
		  username:username,
		  companyname:companyname,
		  email:email
		})
	})
	.then(()=>{
		// Once posted, the user will be notified 
		alert('You have been added to the system!');
	})
	nav("/grain1");
  }
   


    return(


        <>
<div id="artg" style={{ 
    backgroundImage: `url("w7.jpg")` }}> 

<div class="row2">
	<h2>Business Details <br/>
Start adding your business details:</h2>
		<div class="col-xs-4 col-xs-offset-4">
			<div class="floating-label-group"> <FaUserCircle  class="iconss" />
			<input  id="username"  class="form-control" autocomplete="off" autofocus required 
		 onChange={event => setuser(event.target.value)} />
				<label class="floating-label">Username</label>
			</div>
		
			<div class="floating-label-group"> < FaAddressCard  class="iconss"/>
			<input  id="password" class="form-control" autocomplete="off" required 
			 onChange={event => setcompanyname(event.target.value)}/>
			<label class="floating-label">Company Name/Farmer Name</label>
			</div>
			<div class="floating-label-group"> <AiOutlineMail class="iconss"/>
			<input  id="email" class="form-control" autocomplete="off" required 
			 onChange={event => setemail(event.target.value)}/>
			<label class="floating-label">Email Id</label>
			</div>
			<button  onClick={handleSubmit}class="btnp" >Next<AiOutlineArrowRight/></button>
		</div>
	</div>
</div>

        </>
    );
}


export default Sellupload