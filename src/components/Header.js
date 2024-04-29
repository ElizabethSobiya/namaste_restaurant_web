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
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" style={{ width: "100px" }} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status {onlineStaus ? "✅" : "🔴"}
          </li>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact Us</Link>{" "}
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
