import React from 'react';
import '../styles/navbar.css';
import { FaCartPlus, FaSearch } from "react-icons/fa";
const Navbar = ({size, setShow}) => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" onClick={()=>setShow(true)}>
                Grain's Hubb
            </span>
            <div className="cart" onClick={()=>setShow(false)}>
                <span>
                   
                    <FaCartPlus className="fas fa-cart-plus"/>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar