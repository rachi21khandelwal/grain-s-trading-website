
import React from "react";
import {Route ,Link,Routes,BrowserRouter as Router} from 'react-router-dom';

import Sell2 from "./Sell2";
import Sell3 from "./Sell3";

class Sellnav extends React.Component{
     render(){
        return(
<div>
    
    <Router>
  
<Routes>
<Route exact path="/" element={<Sell2/>} />  
<Route path="/sell3" element={<Sell3/>}/>
<Route path="/sell2" element={<Sell2/>}/>

                  

</Routes>

    </Router>

</div>

        );
     }
} 
export default Sellnav;