import React ,{useState} from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useNavigate } from "react-router-dom";


const Phonereg =({ isShowLogin })=>{


    const nav =useNavigate();
    function handle(){
        nav("/buyselllsignup")
    }
    const [value, setValue] = useState()

    return(
        < div className={`${!isShowLogin ? "active" : ""} show`}>
        <div class="box99">
            <div class="box99a">
            <PhoneInput 
    placeholder="Enter phone number"
    value={value} 
 
    onChange={setValue} 
    
    /> 
    <button  onClick={handle} class="btnphone">Sign in</button>
    </div>
    
  
        </div>



        </div>
    );
}

export default Phonereg