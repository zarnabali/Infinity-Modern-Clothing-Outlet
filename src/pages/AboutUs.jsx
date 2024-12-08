import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/Footer/Footer";
import MobileHeader from "../components/header_mobile";

const AboutUs = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const currentWidth = window.innerWidth;
      console.log("Current window width:", currentWidth); // Debugging log
      const isMobileDevice = currentWidth <= 1312;
      console.log("Is mobile device:", isMobileDevice); // Debugging log
      setIsMobile(isMobileDevice);
    };

    checkDeviceType(); // Initial check
    window.addEventListener("resize", checkDeviceType); // Listener for resizing

    return () => {
      window.removeEventListener("resize", checkDeviceType); // Cleanup
    };
  }, []);

  console.log("isMobile value:", isMobile); // Debug final state

  return (
    <div className={`${darkMode ? "dark" : ""} w-full overflow-hidden`}>
      {isMobile ? (
        <MobileHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      ) : (
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      )}

      <section className="py-24 mb-10 relative bg-white dark:bg-gray-800 transition-all">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto box-border">
          <div className="w-full justify-start items-center gap-8 grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 dark:text-gray-100 text-4xl font-bold font-arimo leading-normal lg:text-start text-center">
                  Infinity: Where fashion meets individuality. High-quality,
                  stylish apparel designed to inspire confidence and creativity.
                </h2>
                <p className="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                  From casual wear to sophisticated outfits, our collection is
                  designed to cater to diverse tastes and lifestyles.
                </p>
              </div>
              <button
                className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex"
                onClick={() => (window.location.href = "/landing")}
              >
                <span className="px-1.5 text-white text-sm font-medium leading-6">
                  Get Started
                </span>
              </button>
            </div>
            <img
              className="w-full h-auto lg:mx-0 mx-auto rounded-3xl object-cover"
              src="/assets/new_arrivals_m_w.jpeg"
              alt="About Us"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
