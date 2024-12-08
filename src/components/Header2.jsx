import React from "react";

const Header2 = () => {
  return (
    <header className="absolute top-0 left-0 right-0 px-8 py-4 z-50">
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center">
        <div className="flex items-center w-1/2">
          <img
            src="/assets/logo_black.png"
            alt="Logo"
            className="h-20 mr-20 ml-12"
            onClick={() => (window.location.href = "/landing")}
          />
          <nav className="flex gap-6">
          
            <a
              href="#about"
              className="text-black hover:underline transition-all duration-300"
              onClick={() => (window.location.href = "/aboutus")}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-black hover:underline transition-all duration-300"
              onClick={() => (window.location.href = "/menspage")}
            >
              Mens
            </a>
            <a
              href="#home"
              className="text-black hover:underline transition-all duration-300"
              onClick={() => (window.location.href = "/women")}
            >
              Womens
            </a>
          </nav>
        </div>
        <div className="flex justify-end items-center w-1/2 gap-4">
          <button className="bg-transparent border-none cursor-pointer">
            <img src="/assets/person_icon_black.png" alt="Person Icon" className="h-6" />
          </button>
          <button className="bg-transparent border-none cursor-pointer">
            <img src="/assets/bag_icon_black.png" alt="Bag Icon" className="h-6" />
          </button>
          <button className="bg-transparent border-none cursor-pointer">
            <img
              src="/assets/hamburger_icon_black.png"
              alt="Hamburger Icon"
              className="h-6"
            />
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden justify-between items-center">
        <img src="/assets/logo_white.png" alt="Logo" className="h-28" />
      </div>
    </header>
  );
};

export default Header2;
