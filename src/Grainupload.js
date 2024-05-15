import React ,{useState} from "react";
//npm i react-icons


import { FaAddressBook, FaAddressCard, FaArrowRight, FaBeer, FaFileContract, FaFontAwesomeLogoFull, FaHome, FaSearch, FaVoicemail, FaWalking } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Upload from "./Upload";
function Grainupload(){

	const nav= useNavigate;

	const[fname,setfname]=useState('')
    const[id,setid]=useState(' ')
    const[mname,setmname]=useState('');

	 
	/*function handle(){
		nav("/address");
	
	}


	*/
	
    return(


        <>


<div class="row">

<h2>Business Details <br/>
Start adding your business details:</h2>
	<div class="up">
	
    </div>
    <div class="up">
      <Upload />  
    </div>
    <div class="up">
        
    </div>
    
<div class="floating-label-group1"> 
			<input type="text" id="first" class="form-control1"  onChange={event=>setid(event.target.value)}  autocomplete="off" required />
			<label class="floating-label1">First</label>
	</div>
    	
<div class="floating-label-group1"> 
			<input type="text" id="second" class="form-control1"  onChange={event=>setfname(event.target.value)} autocomplete="off" required />
			<label class="floating-label1">Second</label>
	</div>
    	
<div class="floating-label-group1"> 
			<input type="text" id="third" class="form-control1" onChange={event=>setmname(event.target.value)} autocomplete="off" required />
			<label class="floating-label1">third</label>
			
	</div>
	<br/>
	<button class="btnp2">Next  <FaArrowRight class="icon1"/> </button>
</div>

        </>
    );
}


export default Grainupload