
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
class Navph1 extends React.Component{
     render(){
        return(
<div>
    <Router>
  



<Routes>
<Route exact path="/" element={<Pone/>} />  
<Route path="/navph" element={<Navph/>}/>

</Routes>

    </Router>

</div>

        );
     }
} 
export default Navph1;