import React,{useState} from "react";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import PhoneInput from 'react-phone-number-input'
import { useEffect } from 'react';
import {AiFillQuestionCircle} from 'react-icons/ai'
import {FaRupeeSign} from 'react-icons/fa'

import "../styles/cart.css";

const New = ({cart, setCart, handleChange}) => {


    const [dprice, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })


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
<div class="box67"> Contact information</div>
<div class="box68">  Already have an account?  <a href="aa" id="check">Log in   </a>    <br/></div>
<input   class="box69" placeholder="Email or Whats App number for other updates"/>
<br/>
<span class="box67">Shipping Address</span><br/>
<CountryDropdown
          value={con}
          onChange={handle} class="box69"  placeholder="Country"/>

<br/>
<span>
    <input class="box70a" placeholder="First Name"/><input  class="box70b" placeholder="Last Name"/>
</span> <br/> 
<input  class="box69"  placeholder="Address"/><br/>
<input  class="box69" placeholder="Landmark"/>
<br/>
<input  class="box71a" placeholder="City"/>

<RegionDropdown
          country={con}
          val={reg}  placeholder="State" class=" box71b"
          onChange={handle1} />
          
          
          <input  class="box71c" placeholder="Pincode"/> <br/>
<div className="box69">
          <PhoneInput 
          
      placeholder="Enter phone number"
      value={value} 
    
      onChange={setValue} 
      
     
      /> 
      </div>

<div class="box72b"  ><input type="checkbox"  class="box72a" /> 	Save this information for next time</div>
<br/>
<div class="box73a">
<a href="ww" id="check" >    Return to Cart </a> </div>
<button class="box73b"> Continue to Shipping</button>
</div>
{/* <div class="box66">


<span class="cart1"> Cart Summary</span> <span class="cart2">Edit</span>

<div class="cart3">
<div class="cart4">
<img src="bj.jpg" class="cart5"/>

</div>
<div class="cart6">
<article>
        {
            cart?.map((item)=>(
<div key={item.id}>
    <p>{item.ename}</p>
</div>
))}
</article>
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
<span class="p1">Subtotal  </span><br/>  <span class="p22"> Shipping <AiFillQuestionCircle/> </span>
 </div>
 <div class="cart15"> <span class="cart16"> <FaRupeeSign/> 7000</span>
    <span class="cart17" > Calculated in next Step </span></div>
</div>
<div class="cart12"></div>
<div class="cart13">
<div class="cart14">
<span class="cart19"> Total </span>
 </div>
 <div class="cart15"> 
    <span  class="cart18" >INR
    <span class="cart20"> 7000 </span> </span></div>

</div>
 
</div> */}

<div class="box66">

<article>
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} />
                        <p>{item.ename}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                        
                    </div>
                    <div>
                        <span>{item.dprice} INR</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span>Total Price of your Cart</span>
            <span> {dprice}INR</span>
        </div>
    </article>
    </div>
</div>


           




    );
}
export default New