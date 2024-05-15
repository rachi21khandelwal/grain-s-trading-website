import React,{useState} from "react";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import PhoneInput from 'react-phone-number-input'

function Phone(){
    const [value, setValue] = useState()
    const[con,setcone]=useState(' ')
    const[reg,setreg]=useState(' ')

    const handle= con =>{
       
        setcone(con);
        setreg(" ");

}

const handle1 =reg=>{
    setreg(reg);
}


    const handleSubmit=()=> { // Once the form has been submitted, this function will post to the backend
        const postURL = "http://localhost:4000/api/phone" //Our previously set up route in the backend
        fetch(postURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // We should keep the fields consistent for managing this data later
             value:value,
             con:con,
             reg:reg
            })
        })
        .then(()=>{
            // Once posted, the user will be notified 
            alert('You have been added to the system!');
        })
      }
    return(

        <div>

       <form onSubmit={handleSubmit}>
    <PhoneInput 
    placeholder="Enter phone number"
    value={value} 
   className="box69a"
    onChange={setValue} 
    
    /> 


<CountryDropdown
          value={con}
          onChange={handle} class="box69"  placeholder="Country"/>
          <br/>
          <RegionDropdown
        country={con}
          val={reg}  placeholder="State" class=" box71b"
          onClick={handle1}
           />
<button type="submit">Enter</button>
</form>
    </div>
    );
}

export default Phone;