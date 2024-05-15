import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import PhoneInput from 'react-phone-number-input'
import 'reactjs-popup/dist/index.css';
import { FaSearch } from 'react-icons/fa';
import { BsGraphDown } from "react-icons/bs";
import {RiCreativeCommonsZeroFill} from "react-icons/ri"
import {GiShakingHands} from "react-icons/gi"
import Navph from './Navph';
import Samepage from './Samepage';
import "./Details.css"

 function Pone() 
 {
 


	const [value, setValue] = useState()




 
	return (
		
		<div>

<div class="first">

<div class="second"  style={{ 
    backgroundImage: `url("https://seller.imimg.com/img/posteim-opt.jpg")` }}>
	
</div>
<div class="third">
<p class="four">
	<span class="five">Sell for free </span>on India’s largest  <br/>online B2B marketplace</p>

	<p class="six">Free Registration/Sign In</p>

	<div class="boxseven">
            <div class="box997">
            <PhoneInput 
			class="phone1"
    placeholder="Enter phone number"
    value={value} 
	className='phone'
    onChange={setValue} 
    
    /> 
    </div>



	</div>
	

	<div class="yy">

		<div class="yy1"><BsGraphDown class="nine" /> </div>
		<div class="yy1"> <GiShakingHands class="nine"/> </div>
		<div class="yy1">   <RiCreativeCommonsZeroFill class="nine" /></div>
	</div>
</div>

</div>
</div>

	
	
	)
};
export default Pone;