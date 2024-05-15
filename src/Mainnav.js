
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
import Navph from "./Navph";
import { FaCartPlus, FaLaptop, FaSearch, FaSellcast, FaShoppingBasket, FaUpload } from "react-icons/fa";
import Grain1 from "./Grain1";
class Mainnav extends React.Component{
     render(){
        return(
<div>

    <Router>
    <div class="nav1">
      

      <h2>dhsfg</h2>
                <NavLink to="/bus"><FaUpload/></NavLink>
                <NavLink to="/grain1"> <FaShoppingBasket/> </NavLink>
                <NavLink to="/address"> <FaSearch/> </NavLink>
                <NavLink to="/gst"><FaSellcast/> <FaCartPlus/> </NavLink>
               
           

           </div>



<Routes>

<Route exact  path="/"   element={<Sellupload/>}/>
<Route exact path="/bus" element={<Sellupload/>}/>
<Route path="/grain1" element={<Grain1/>}/>
<Route path="/address" element={<Address/>}/>
<Route path="/gst" element={<Gst/>}/>

</Routes>

    </Router>

</div>

        );
     }
} 
export default Mainnav