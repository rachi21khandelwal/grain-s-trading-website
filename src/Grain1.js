import React ,{useState} from "react";
import './Upload.css'
import Upload from "./Upload";
import { useNavigate } from "react-router-dom";
function Grain1() {

const nav=useNavigate();

    const[adhar,setadhar]=useState();
    const[pan,setpan]=useState()
    const[gst,setgst]=useState()
    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
      const postURL = "http://localhost:4000/cardDetails" //Our previously set up route in the backend
      fetch(postURL, {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ // We should keep the fields consistent for managing this data later
            adhar:adhar,
            pan:pan,
            gst:gst
          })
      })
      .then(()=>{
          // Once posted, the user will be notified 
          alert('You have been added to the system!');
      })
      nav("/address");
    }
     

    return (

        <>

<div id="artg" style={{ 
    backgroundImage: `url("w4.jpg")` }}> 
        <div class="row2">
        <h2>Business Details <br/>
Start adding your documents details:</h2>
<div class="main">

<div class="floating-label-group1"> 
			<input  id="first" name="adhar" value={adhar} class="form-control1"    autocomplete="off" required onChange={event=>setadhar(event.target.value)} />
			<label class="floating-label1">Adhar Card Number</label>
	</div>
  <div class="a">
  <Upload/>
</div>
    </div >

    <div class="main">

<div class="floating-label-group1"> 
			<input  id="first" name="pan" class="form-control1"    autocomplete="off" required  onChange={event=>setpan(event.target.value)}/>
			<label class="floating-label1">Pan Card Number</label>
	</div>
  <div class="a">
  <Upload/>
</div>
    </div >




    <div class="main">

<div class="floating-label-group1"> 
			<input  id="first"  name="gst" class="form-control1"   autocomplete="off" required   onChange={event=>setgst(event.target.value)}/>
			<label class="floating-label1">Tax Return</label>
	</div>
  <div class="a">
  <Upload/>
</div>
    

<button onClick={handleSubmit} class="btnp">Next</button>








</div>

</div>

    </div>

        
        </>
    );
}

export default Grain1