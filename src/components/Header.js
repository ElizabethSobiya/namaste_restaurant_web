import React, { useState } from "react";
import Logo from "../../assets/restaurant_logo.png";
import { Link } from "react-router-dom";
import useOnlineSatus from "./hooks/useOnlineStatus";

function Header() {
  const [buttonClick, setButtonClick] = useState("Login");
  const onlineStaus = useOnlineSatus()

  const loginClick = () => {
    buttonClick === "Login"
      ? setButtonClick("Logout")
      : setButtonClick("Login");
    // console.log(loginBtn, 'btn')
  };
  return (
    <div className="flex justify-between h-25 bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <Link to='/'><img className="w-46 h-20 pt-2 pl-3" src={Logo} /></Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStaus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            {" "}
            <Link to="/cart">Cart</Link>{" "}
          </li>
          <button className="login-btn" onClick={loginClick}>
            {buttonClick}
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;
