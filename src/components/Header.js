import React, { useContext, useState } from "react";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import useOnlineSatus from "./hooks/useOnlineStatus";
import userContext from "./hooks/useContext";
import { useSelector } from "react-redux";
import { BsMoon, BsSun } from "react-icons/bs";

function Header() {
  const [buttonClick, setButtonClick] = useState("Login");
  const [darkMode, setDarkMode] = useState(false);
  const onlineStaus = useOnlineSatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  const loginClick = () => {
    setButtonClick((prev) => (prev === "Login" ? "Logout" : "Login"));
  };
  const cartCount = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="flex justify-between items-center h-20 px-4 bg-[#FF5200] dark:bg-black text-black dark:text-white shadow-lg">
      <Link
        to="/"
        className="text-white dark:text-yellow-300 font-bold text-2xl tracking-wide flex items-center gap-2 hover:scale-105 transition-transform duration-300"
      >
        <span role="img" aria-label="plate">
          🍽️
        </span>{" "}
        ZestyEats
      </Link>

      <ul className="flex items-center gap-4 text-md font-medium">
        <li>Online: {onlineStaus ? "✅" : "🔴"}</li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/grocery">Grocery</Link>
        </li>
        <li>
          <Link to="/cart">Cart: {cartCount}</Link>
        </li>
        <li>
          <button className="px-3 py-1 border rounded-md" onClick={loginClick}>
            {buttonClick}
          </button>
        </li>
        <li>{loggedInUser}</li>
        <li>
          <button onClick={toggleDarkMode}>
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
