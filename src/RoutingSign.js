import React from "react";
import {Route ,Link,Routes,BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import Appphone from "./Appphone";
import Check from "./Check";

import LogoutApp from "./LogoutApp";
import Logout from "./Logout";


class RoutingSign extends React.Component{
     render(){
        return(
<div>
    <Router>
  
<Routes>
<Route exact path="/" element={<App/>} />  
<Route path="/apphone" element={<Appphone/>}/>
<Route path="/check" element={<Check/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="/logoutapp" element={<LogoutApp/>}/>


                  

</Routes>

    </Router>

</div>

        );
     }
} 
export default RoutingSign