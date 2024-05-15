
import React, { useState }  from 'react'
import './GrainEntry.css';
import { useNavigate } from 'react-router-dom';
import Flip2 from './Flip2';
export const GrainEntry= ()=> {

    var [name,setName]=useState()
    var [id,setId]=useState()
    var [grainname,setgrain]=useState()
    var [graincat,setgraincat]=useState()
    var [price,setprice]=useState()
    const nameUpdate=(event)=>{ // Dealing with name field changes to update our state
        setName(event.target.value)
    }

    const idUpdate=(event)=>{ // Dealing with name field changes to update our state
        setId(event.target.value)
    }
    const grainUpdate=(event)=>{ // Dealing with name field changes to update our state
        setgrain(event.target.value)
    }
    const priceUpdate=(event)=>{ // Dealing with name field changes to update our state
        setprice(event.target.value)
    }
    const catUpdate=(event)=>{ // Dealing with name field changes to update our state
        setgraincat(event.target.value)
    }

    const nav=useNavigate();
    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/grainEntry/" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
                id:id,
                name: name,
               
                grainname:grainname,
                graincat:graincat,
                price:price

            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
        nav("/graindatashown");
    }
   
  

    return (
        <>
        <Flip2/>
        <br/>
        <br/>
       
        <div class="login-container22">
            <div class="login-box22"
    //          style={{ 
    // backgroundImage: `url("mainlogo.jpeg")`}}
    >

            <p>Enter details of grain</p>
                 <img class="imglogoentry" src="mainlogo.jpeg"/><br/>
                <label >ID:</label>
                <input  type='text' required onChange={idUpdate} placeholder='Enter the id' id="grain" ></input>
                <label >Firm Name:</label>
                <input type='text' required onChange={nameUpdate} placeholder='Enter the Firm Name' id="grain"  ></input>
                <label >Grain name :</label>
                <input type='text' required onChange={grainUpdate} placeholder='Enter the Grain name' id="grain" ></input>
                <label >Grain Category:</label>
                <input type='text' required onChange={catUpdate} placeholder='Enter the category of grain' id="grain" ></input>
                <label >Price:</label>
                <input type='text' required onChange={priceUpdate} placeholder='Enter the price (per quintal)' id="grain" ></input><br/><br/>
                <button  id="button-grain" onClick={handleSubmit} > Submit</button>
               
          
            </div>

        </div>
        </>
    )
    
}

export default GrainEntry;