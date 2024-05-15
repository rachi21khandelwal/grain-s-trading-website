
import React from "react";
import {Route ,Link,Routes,BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import Aa from "./Aa";
import Ee from "./Ee";
import Dd from "./Dd";
import Bu from "./Bu";
import Bu1 from "./Bu1";
class Splash1 extends React.Component{
     render(){
        return(
<div>
    <Router>
  
<Routes>
<Route exact path="/bu" element={<Bu/>} />  
<Route path="/bu1" element={<Bu1/>}/>
<Route path="/" element={<Bu1/>}/>

                  

</Routes>

    </Router>

</div>

        );
     }
} 
export default Splash1;