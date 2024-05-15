
import React from "react";
import {Route ,Link,Routes,BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import Aa from "./Aa";
import Ee from "./Ee";
import Dd from "./Dd";
import Bu from "./Bu";
import Check from "./Check";
import Poo from "./Poo";

class Nav extends React.Component{
     render(){
        return(
<div>
    <Router>
  
<Routes>
<Route exact path="/" element={<Poo/>} />  
<Route path="/check" element={<Check/>}/>

                  

</Routes>

    </Router>

</div>

        );
     }
} 
export default Nav