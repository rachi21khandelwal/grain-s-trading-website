
import React from "react";
import {Route ,Link,Routes,BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import Aa from "./Aa";
import Ee from "./Ee";
import Dd from "./Dd";
import Bu from "./Bu";
class Splash extends React.Component{
     render(){
        return(
<div>
    <Router>
  
<Routes>
<Route exact path="/" element={<Aa/>} />  
<Route path="/ee" element={<Ee/>}/>
<Route path="/aa" element={<Aa/>}/>

                  

</Routes>

    </Router>

</div>

        );
     }
} 
export default Splash;