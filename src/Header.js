import React from "react";
import { NavLink} from 'react-router-dom';
import './style.css'
function Header(){
    return(
<>

<nav>
             <a href="djj">Business</a>   

                  <NavLink to="/bus">Business Details</NavLink>
                  <NavLink to="/grainupload">Product Details</NavLink>
                  <NavLink to="/address">Address Details</NavLink>
                  <NavLink to="/gst">GST Details</NavLink>
                 
             

             </nav>
</>

    );
}
export default Header