import React from 'react';
import '../styles/cards.css'

import { FaCartPlus, FaCircle, FaDotCircle, FaSearch } from "react-icons/fa";
const Cards = ({item, handleClick}) => {
    const {name,ename, price,dprice, img} = item;
  return (
    
<div id="box56card">
<div id="box57"> <img src={item.img} id="box57img"/></div><br/>

<span id="box58"> <FaDotCircle/> {item.name}</span><br/><br/>
<span id="box59i"> {item.ename}</span><br/><br/>
<div id="box60" style={{ 
backgroundImage: `url("like2.png")` }}></div>

<span id="box61">{item.price} INR
</span>
<span id="box62">  {item.dprice}</span>
<br/><br/>
<button class="add-to-cart-btn " onClick={()=>handleClick(item)} >Add to Cart</button>
    </div>
    
  )
}

export default Cards
