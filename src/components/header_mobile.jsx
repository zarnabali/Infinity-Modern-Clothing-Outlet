import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";

const HeaderMobile = () => {
  const headerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle("dark", !isDarkMode);
  };

  useEffect(() => {
    // Header animation
    const timeline = gsap.timeline();
    timeline.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1 }
    );
  }, []);

  return (
    <>
      {/* Header */}
      <header
        ref={headerRef}
        className={`sticky top-0 ${
          isDarkMode ? "bg-gray-900" : "bg-white"
        } flex justify-between items-center mx-6 py-2 border-b`}
      >
        {/* Left: Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl font-bold flex items-center"
        >
          <img
            src={
              isDarkMode
                ? "/assets/hamburger_icon.png"
                : "/assets/hamburger_icon_black.png"
            }
            alt="Hamburger Icon"
            className="h-5 w-5"
          />
        </button>

        {/* Center: Logo */}
        <img
          src={isDarkMode ? "/assets/logo_white.png" : "/assets/logo_black.png"}
          onClick={() => (window.location.href = "/")}
          alt="Logo"
          className="h-10 mx-auto"
        />
      </header>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 text-white z-50 flex flex-col items-center justify-center space-y-8">
          {/* Close Icon */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            ✕
          </button>

          {/* Menu Options */}
          <ul className="flex flex-col items-center space-y-6 text-xl font-light">
            <li>
              <button
                onClick={() => (window.location.href = "/login")}
                className="w-full text-center"
              >
                Login
              </button>
            </li>
            <li>
              <button
                onClick={() => (window.location.href = "/aboutus")}
                className="w-full text-center"
              >
                About Us
              </button>
            </li>
            <li>
              <button onClick={toggleDarkMode} className="w-full text-center">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
            <li>
              <button
                onClick={() => (window.location.href = "/menspage")}
                className="w-full text-center"
              >
                Mens
              </button>
            </li>
            <li>
              <button
                onClick={() => (window.location.href = "/women")}
                className="w-full text-center"
              >
                Womens
              </button>
            </li>
            <li>
              <button
                onClick={() => (window.location.href = "/favorites")}
                className="w-full text-center"
              >
                Favorites
              </button>
            </li>
            <li>
              <button
                onClick={() => (window.location.href = "/ChatbotPage")}
                className="w-full text-center"
              >
                Chatbot
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default HeaderMobile;
