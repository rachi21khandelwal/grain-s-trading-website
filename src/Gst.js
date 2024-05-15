import React, { useState } from "react";
//npm i react-icons
import './Upload.css'

import { FaAddressBook, FaAddressCard, FaBeer, FaBroadcastTower, FaBuilding,  FaUser,FaFileContract, FaFontAwesomeLogoFull, FaHome, FaIntercom, FaLocationArrow, FaRegArrowAltCircleLeft, FaRegBuilding, FaSortNumericDown, FaVoicemail, FaWalking } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {AiOutlineNumber } from "react-icons/ai"
import {BiLocationPlus} from "react-icons/bi"
function Gst(){
const nav=useNavigate();

var[firm,setfirm]=useState();
var[gstno,setgst]=useState();
var [city,setcity]=useState();
const firmUpdate=(event)=>{ // Dealing with name field changes to update our state
	setfirm(event.target.value)
}
const gstUpdate=(event)=>{ // Dealing with name field changes to update our state
	setgst(event.target.value)
} 
const cityUpdate=(event)=>{ // Dealing with name field changes to update our state
	setcity(event.target.value)
}
const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
	const postURL = "http://localhost:4000/GSTDetails" //Our previously set up route in the backend
	fetch(postURL, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ // We should keep the fields consistent for managing this data later
		firm:firm,
		gstno:gstno,
		city:city
		})
	})
	.then(()=>{
		// Once posted, the user will be notified 
		alert('You have been added to the system!');
	})
	nav("/grainentry");
  }
   

    return(


        <>

<div id="artg" style={{ 
    backgroundImage: `url("w6.jpg")` }}> 
<div class="row2">
	<h2>GST Details <br/>
Start adding your Gst details:</h2>
		<div class="col-xs-4 col-xs-offset-4">
			<div class="floating-label-group"> <AiOutlineNumber  class="iconss" />
			<input id="username" class="form-control" autocomplete="off" autofocus required  onChange={gstUpdate}/>
				<label class="floating-label">Gst No.</label>
			</div>
		
			<div class="floating-label-group"> < FaUser class="iconss"/>
			<input  id="password" class="form-control" autocomplete="off" required onChange={firmUpdate} />
			<label class="floating-label">Firm Owner</label>
			</div>
			<div class="floating-label-group"> <BiLocationPlus class="iconss"/>
			<input  id="email" class="form-control" autocomplete="off" required onChange={cityUpdate}/>
			<label class="floating-label">City</label>
			</div>
			<button class="btnp" onClick={handleSubmit}>Submit</button>
		</div>
	</div>


</div>
        </>
    );
}


export default Gst