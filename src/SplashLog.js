
import React from "react";
import {Route ,Link,Routes,BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import Aa from "./Aa";
import Ee from "./Ee";
import Dd from "./Dd";
import Bu from "./Bu";
import Login from "./Login";
import App2 from "./App2";
class SplashLog extends React.Component{
     render(){
        return(
<div>
    <Router>
  
<Routes>
<Route exact path="/" element={<App2/>} />  
<Route path="/ee" element={<Ee/>}/>
<Route path="/aa" element={<Aa/>}/>

                  

</Routes>

    </Router>

</div>

        );
     }
} 
export default SplashLog;