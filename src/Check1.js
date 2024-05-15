import React,{useState} from "react";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import PhoneInput from 'react-phone-number-input'
import {AiFillQuestionCircle} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'
import './style.css';
import './Cart.css';
function Check1(){

    const[con,setcone]=useState(' ')
    const[reg,setreg]=useState(' ')
    const [value, setValue] = useState()
    
    const handle= con =>{
       
            setcone(con);
            setreg(" ");
    
    }
    const handle1 =reg=>{
        setreg(reg);
    }




    return(
<div>

<div class="box66">

    <span class="cart1"> Cart Summary</span> <span class="cart2">Edit</span>

<div class="cart3">
   <div class="cart4">
   <img src="bj.jpg" class="cart5"/>
  
   </div>
 <div class="cart6">
   Bajra <br/>
   <span class="cart7">J-770</span>
  
 </div>
 <span class="cart8"> Rs. 7000</span>
</div>
<div class="cart12"></div>
<div class="cart9">
    <input type="text" class="cart10" placeholder="Apply Promo Code/Coupon"/>
    <button class="cart11">Apply</button>

</div>

<div class="cart12"></div>
<div class="cart13">
    <div class="cart14">
    <p class="p1">Subtotal  </p><br/>  <p class="p22"> Shipping <AiFillQuestionCircle/> </p>
     </div>
     <div class="cart15"> <span class="cart16"> <FaRupeeSign/> 7000</span>
        <p class="cart17" > Calculated in next Step </p></div>
</div>
<div class="cart12"></div>
<div class="cart13">
<div class="cart14">
    <p class="cart19"> Total </p>
     </div>
     <div class="cart15"> 
        <p  class="cart18" >INR
        <span class="cart20"> 7000 </span> </p></div>
</div>
</div>




</div>


    );
}
export default Check1