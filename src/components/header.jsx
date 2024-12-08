import React from "react";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    // Header
    <header className="relative flex justify-between items-center px-16 py-2 border-b bg-white h-20">
      {/* Left Section: Icon Buttons */}
      <div className="flex items-center space-x-4">
        <button className="icon-button">
          <img
            src="/assets/person_icon_black.png"
            alt="Person Icon"
            className="h-5 w-5"
          />
        </button>
        <button className="icon-button">
          <img
            src="/assets/bag_icon_black.png"
            alt="Bag Icon"
            className="h-5 w-5"
          />
        </button>
        <button className="icon-button">
          <img
            src="/assets/hamburger_icon_black.png"
            alt="Hamburger Icon"
            className="h-5 w-5"
          />
        </button>
      </div>

      {/* Center Section: Logo */}
      <button
        onClick={() => (window.location.href = "/")}
        className="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold align-center items-center"
      >
        <img src="/assets/logo_black.png" alt="Logo" className="h-16" />
      </button>

      {/* Right Section: Search and Buttons */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center border px-2 py-3 h-6 rounded-3xl bg-[#CCCCCC] font-light">
          <input
            type="text"
            placeholder="Search"
            
            className="outline-none text-sm flex-grow h-6  bg-[#CCCCCC]"
          />
          <img
            src="/assets/search_icon.png"
            alt="Search Icon"
            className="h-5 w-5"
          />
        </div>
        <button className="text-sm"          onClick={() => (window.location.href = "/aboutus")}
        >About Us</button>
        <button className="text-sm bg-black text-white p-2 rounded-3xl"  onClick={() => (window.location.href = "/login")}
        >
          Login / Signup
        </button>
      </div>
    </header>
  );
};

export default Header;
