import React from "react";
import { FaAddressBook ,FaUserEdit} from "react-icons/fa";
import './Navbar.css'
function Navbar1 ({handleLoginClick}) {
    const handleClick =() =>{
        handleLoginClick();
    }
    return(

        <div>
            <div class="navbar1">
                <button onClick={handleClick} class="bt1"> <FaUserEdit class="add"/> 
                <br/>
                <span class="log2">Sign-up</span> </button>
            </div>
        </div>
    );
}
export default Navbar1