
import React from "react";
import {Route ,Link,Routes,BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import Aa from "./Aa";
import Ee from "./Ee";
import Dd from "./Dd";
import Bu from "./Bu";
import Buttone from "./Buttone";
import A1 from "./A1";
import A2 from "./A2";
class Sa extends React.Component{
     render(){
        return(
<div>
    <Router>
  
<Routes>

<Route exact path="/a2" element={<A2/>}/>
<Route path="/a1" element={<A1/>}/>

                  

</Routes>

    </Router>

</div>

        );
     }
} 
export default Sa