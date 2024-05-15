import React, { useState } from "react";
//npm i react-icons

import './Upload.css'
import { FaAddressBook, FaAddressCard, FaBeer, FaBroadcastTower, FaBuilding, FaFileContract, FaFontAwesomeLogoFull, FaHome, FaRegArrowAltCircleLeft, FaRegBuilding, FaVoicemail, FaWalking } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {GiModernCity } from "react-icons/gi"
import {ImLocation2} from "react-icons/im"
function Address(){

	
const nav= useNavigate();
var[Pincode,setpin]=useState();
var[City,setcity]=useState();
var[State,setstates]=useState();

const pinUpdate=(event)=>{ // Dealing with name field changes to update our state
	setpin(event.target.value)
}
const cityUpdate=(event)=>{ // Dealing with name field changes to update our state
	setcity(event.target.value)
}
const stateUpdate=(event)=>{ // Dealing with name field changes to update our state
	setstates(event.target.value)
}
const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
	const postURL = "http://localhost:4000/address/" //Our previously set up route in the backend
	fetch(postURL, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ // We should keep the fields consistent for managing this data later
		  Pincode:Pincode,
		  City:City,
		  State:State
		})
	})
	.then(()=>{
		// Once posted, the user will be notified 
		alert('You have been added to the system!');
	})
	nav("/gst");
  }

    return(


        <>

<div id="artg" style={{ 
    backgroundImage: `url("w8.jpg")` }}> 
<div class="row2" >
	<h2>Address Details <br/>
Start adding your address details:</h2>
		<div class="col-xs-4 col-xs-offset-4">
			<div class="floating-label-group"> <ImLocation2 class="iconss" />
			<input id="username" class="form-control" autocomplete="off" autofocus required
	 onChange={pinUpdate}/>
				<label class="floating-label">Pincode</label>
			</div>
		
			<div class="floating-label-group"> < GiModernCity  class="iconss"/>
			<input  id="password" class="form-control" autocomplete="off" required onChange={cityUpdate} />
			<label class="floating-label">City</label>
			</div>
			<div class="floating-label-group"> <FaBuilding class="iconss"/>
			<input  id="email" class="form-control" autocomplete="off" required  onChange={stateUpdate}/>
			<label class="floating-label">State</label>
			</div>
			<button onClick={handleSubmit} class="btnp" >Next</button>
		</div>
	</div>

</div>

        </>
    );
}


export default Address