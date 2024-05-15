import React from "react";
import { FaAddressBook,FaUserCircle } from "react-icons/fa";
import './Navbar.css'
function Navbar ({handleLoginClick}) {
    const handleClick =() =>{
        handleLoginClick();
    }
    return(

        <div>
            <div class="navbar">
                <button onClick={handleClick} class="bt"> <FaUserCircle class="add"/> 
                <br/>
                <span class="log">Login</span> </button>
            </div>
        </div>
    );
}
export default Navbar