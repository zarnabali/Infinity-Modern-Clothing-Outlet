import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer/Footer" // Import the new Header component

const ContactUs = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Header with toggle functionality */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="py-24 mb-10 relative bg-white dark:bg-gray-800 transition-all">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                <h2 className="text-gray-900 dark:text-gray-100 text-4xl font-bold font-arimo leading-normal lg:text-start text-center">
                Infinity: Where fashion meets individuality. High-quality, stylish apparel designed to inspire confidence and creativity.                </h2>
                <p className="text-gray-500 dark:text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">

From casual wear to sophisticated outfits, our collection is designed to cater to diverse tastes and lifestyles. We understand that your style is unique, and that's why we offer a range of customizable options to let you create the perfect piece that fits your personality. At Infinity, we strive to make you feel comfortable, stylish, and empowered, no matter where life takes you.
                </p>
              </div>
              <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
              </button>
            </div>
            <img
              className="lg:mx-0 mx-auto h-full rounded-3xl object-cover "
            
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

export default ContactUs;
