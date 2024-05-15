
import React from "react";
import {Route ,Link,Routes,BrowserRouter as Router, NavLink} from 'react-router-dom';
import App from './App';

import Aa from "./Aa";
import Ee from "./Ee";
import Dd from "./Dd";
import Bu from "./Bu";
import Pone from "./Pone";
import Phonereg from "./Phonereg";
import './index.css';
import { Nav } from "react-bootstrap";
import Sellnav from "./Sellnav";
import Sellupload from "./Sellupload";
import Grainupload from "./Grainupload";
import Address from "./Address";

import Gst from "./Gst";
import Navph1 from "./Navph1";
class Navph extends React.Component{
     render(){
        return(
<div>
    <Router>
  

    

<nav>
                

                  <NavLink to="bus">Business Details</NavLink>
                  <NavLink to="/grainupload">Product Details</NavLink>
                  <NavLink to="/address">Address Details</NavLink>
                  <NavLink to="/gst">GST Details</NavLink>
                 
             

             </nav>

<Routes>
   
<Route path="/"   element={<Sellupload/>}/>
<Route path="/grainupload" element={<Grainupload/>}/>
<Route path="/address" element={<Address/>}/>
<Route path="/gst" element={<Gst/>}/>

</Routes>

    </Router>

</div>

        );
     }
} 
export default Navph;