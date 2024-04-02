import React from 'react'
import Logo from "../../assets/restaurant_logo.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" style={{width:'100px'}} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
