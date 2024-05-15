import React, { Component, useState } from 'react';
//npm i react-country-region-selector
//npm i react-pincode
//
// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { Country, State, City }  from 'country-state-city';
import Select from 'react-select';

import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
function Ex( props){

const[con,setcone]=useState(' ')
const[reg,setreg]=useState(' ')
const [pin, setpin] = useState('');
const[cit,setcit]=useState(' ')
const handle= con =>{
   
        setcone(con);
        setreg(" ");
        setcit(" ");

}
const handle1 =reg=>{
    setreg(reg);
    setcit(" ");
}
const handle2 =cit=>{
    
    setcit(cit);
}
//const handle2 =value=>{
  //  setcone(con);
  //setValue(value);
//}
const handle3 =pin=>{
    setpin(" ");
}

    return(
        <div>
  <CountryDropdown
          value={con}
          onChange={handle} />
<RegionDropdown
          country={con}
          value={reg}
          onChange={handle1} />

<Select
CountryDropdown={con}
RegionDropdown={reg}
value={cit}
onChange={handle2}/>


     <br/>
     
        </div>
    );
}



export default Ex