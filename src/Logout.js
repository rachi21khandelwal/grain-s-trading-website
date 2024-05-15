
import { useNavigate } from 'react-router-dom';
import './index.css';
import React, { useState }  from 'react'


  const Logout =({ isShowLogin })=>{




const nav =useNavigate();


    const han=()=>{
        nav("/about")
    }
    const han1=()=>{
      nav("/check")
  }

 /*   
function handle(){
  if(id==pass){
    set("successfully");
  
  }
}
  */

 

return(
 <div className={`${!isShowLogin ? "active" : ""} show`}>
        

<div class="out1">
  
<p class="out2"> Are you sure,
<br/>you want to logout?</p>

<button  onClick={han} class="outb">Cancel</button>
<button onClick={han1} class="outb1">Logout</button>
</div>




       </div>
  
);

}
export default Logout