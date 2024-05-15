import React from "react";
import {Route ,Link,Routes,BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import Login from "./Login";
import Cc1 from "./Cc1";
import Appphone from "./Appphone";
import Check from "./Check";
import LogoutApp from "./LogoutApp";
import Logout from "./Logout";
import Sell from "./Sell";

import SellRou from "./SellRou";
import Sell3 from "./Sell3";
import Sell2 from "./Sell2";
import About from "./About";
import FirstPage from "./FirstPage";
import ForgetPass from "./ForgetPass";
import Sellupload from "./Sellupload";
import Grain1 from "./Grain1";
import Address from "./Address";
import Gst from "./Gst";
import { FaUpload,FaShoppingBasket,FaSearch, FaSellcast,FaCartPlus} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import Artists from "./Artists";
import Wall1 from "./Wall1";
import Gallery from "./Gallery";
import Flip from './Flip'
import Flipex from "./Flipex";
import DetailsAbout from "./DetailsAbout";
import Graph from "./Graph";
import Appmap from "./Appmap";
import GrainEntry from "./GrainEntry";
import GrainDataShown from "./GrainDataShown";
import { Feedback } from "@material-ui/icons";
import FeedbackForm from "./FeedbackForm";
import Addtocart from "./Addtocart";
import Weather from "./Weather";
import News from "./News";
import BuySellLogin from "./BuySellLogin";
import BuySellSignup from "./BuySellSignup";
import BuyerLogin from "./BuyerLogin";
import BuyerSignup from "./BuyerSignup";
import SellerLogin from "./SellerLogin";
import SellerSignup from "./SellerSignup";
class RoutingLog extends React.Component{
     render(){
        return(
<div>
    <Router>
   
   
<Routes>
<Route exact path="/" element={<FirstPage/>} /> 
<Route path="/main" element={<FirstPage/>} />  
<Route path="/apphone" element={<Appphone/>}/>
<Route path="/check" element={<Check/>}/>
<Route path="/login" element={<Login/>}/>

<Route path="/app" element={<App/>}/>
<Route path="/flip" element={<Flip/>}/>
<Route path="/check" element={<Check/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="/logoutapp" element={<LogoutApp/>}/>
<Route path="forgetpass" element={<ForgetPass/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/sell2" element={<Sell2/>}/>
<Route path="/sell3" element={<Sell3/>}/>

<Route  path="/bus"   element={<Sellupload/>}/>
<Route path="/grain1" element={<Grain1/>}/>
<Route path="/address" element={<Address/>}/>
<Route path="/gst" element={<Gst/>}/>
<Route path="art" element={<Artists/>}/>
<Route path="gallery" element={<Gallery/>}/>   
<Route path="wall" element={<Wall1/>}/>
<Route path="flipex" element={<Flipex/>}/>
<Route path="detailsabout" element={<DetailsAbout/>}/>
<Route path="/graph" element={<Graph/>}/>
<Route path="/appmap" element={<Appmap/>}/>
<Route path="/grainentry" element={<GrainEntry/>}/>
<Route path="/graindatashown" element={<GrainDataShown/>}/>
<Route path="/feedbackform" element={<FeedbackForm/>}/>
<Route path="/addtocart" element={<Addtocart/>}/>
<Route path="/weather" element={<Weather/>}/>
<Route path="/news" element={<News/>}/>
<Route path="/buyselllogin" element={<BuySellLogin/>}/>
<Route path="/buyerlogin" element={<BuyerLogin/>}/>
<Route path="/buyselllsignup" element={<BuySellSignup/>}/>
<Route path="/buyersignup" element={<BuyerSignup/>}/>
<Route path="/sellerlogin" element={<SellerLogin/>}/>
<Route path="/sellersignup" element={<SellerSignup/>}/>
</Routes>

    </Router>

</div>

        );
     }
} 
export default RoutingLog