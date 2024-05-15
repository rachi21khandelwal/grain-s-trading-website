import React from "react";
import { FaAddressBook ,FaUber,FaUserEdit} from "react-icons/fa";
import './Navbar.css'
import './Flip.css'
function Navlogout ({handleLoginClick}) {
    const handleClick =() =>{
        handleLoginClick();
    }
    return(

        <div>
            

            <div class="navbar3">
                <button onClick={handleClick} class="bt1"> 
                <br/>
                <br/>
                <a href=" " id="two">Logout</a> </button>
            </div>
        </div>
    );
}
export default Navlogout