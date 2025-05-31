import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsMoon, BsSun, BsList, BsX } from "react-icons/bs";
import { useSelector } from "react-redux";
import useOnlineSatus from "./hooks/useOnlineStatus";
import userContext from "./hooks/useContext";

function Header() {
  const [buttonClick, setButtonClick] = useState("Login");
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const onlineStaus = useOnlineSatus();
  const { loggedInUser } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  const cartCount = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0
  );

  const loginClick = () =>
    setButtonClick((prev) => (prev === "Login" ? "Logout" : "Login"));

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-[#FF5200] dark:bg-black text-black dark:text-white shadow-lg">
      <div className="flex justify-between items-center h-20 px-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-white dark:text-yellow-300 font-bold text-2xl tracking-wide flex items-center gap-2 hover:scale-105 transition-transform duration-300"
        >
          <span role="img" aria-label="plate">
            🍽️
          </span>{" "}
          ZestyEats
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 items-center text-md font-medium">
          <span>Online: {onlineStaus ? "✅" : "🔴"}</span>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/grocery">Grocery</Link>
          <Link to="/cart">Cart: {cartCount}</Link>
          <button className="px-3 py-1 border rounded-md" onClick={loginClick}>
            {buttonClick}
          </button>
          <span>{loggedInUser}</span>
          <button onClick={toggleDarkMode}>
            {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white dark:text-yellow-300"
          onClick={toggleMenu}
        >
          {menuOpen ? <BsX size={28} /> : <BsList size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 text-sm font-medium">
          <p className="mb-2">Online: {onlineStaus ? "✅" : "🔴"}</p>

          {/* Links container with flex wrap */}
          <div className="flex flex-wrap gap-2">
            <Link to="/" onClick={toggleMenu} className="w-1/2">
              Home
            </Link>
            <Link to="/grocery" onClick={toggleMenu} className="w-1/2">
              Grocery
            </Link>
            <Link to="/cart" onClick={toggleMenu} className="w-1/2">
              Cart: {cartCount}
            </Link>
          </div>

          {/* Other buttons */}
          <button
            className="block border px-3 py-1 rounded-md mt-4"
            onClick={loginClick}
          >
            {buttonClick}
          </button>

          <p className="mt-2">{loggedInUser}</p>

          <button
            onClick={toggleDarkMode}
            className="mt-2 flex items-center gap-1"
          >
            {darkMode ? (
              <>
                <BsSun size={20} /> Light
              </>
            ) : (
              <>
                <BsMoon size={20} /> Dark
              </>
            )}
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
