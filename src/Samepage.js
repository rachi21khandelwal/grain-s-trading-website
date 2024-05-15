import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import PhoneInput from 'react-phone-number-input'
import 'reactjs-popup/dist/index.css';
import { FaSearch } from 'react-icons/fa';
import Navph from './Navph';
import Samepage from './Samepage';

 function Pone() 
 {
 
 const nav= useNavigate();
 const [value, setValue] = useState()




 function handle(){
	<Samepage/>
	
}

 
	return (
		
		<div>



<div class="box99">
            <div class="box99a">
            <PhoneInput 
    placeholder="Enter phone number"
    value={value} 
 
    onChange={setValue} 
    
    /> 
    </div>




	</div>
			
			<Popup trigger=
				{<button class="btnp"> Sign in </button>}
				
				modal nested>
				{
					<div class="modal1" >
							< div class="content1" >
								<h2 class="h21">Enter the Password</h2>
<br/>
<input type="password" className="box69p" placeholder="Enter your password"	/> 
<br/>
<a href="#reset" class="fo">Forget Password</a>						
								<button class="btnp1" onClick={handle}>
										Submit
								</button>
							</div>
					
					</div>
				}
			</Popup>
		</div>
	
	)
};
export default Pone;