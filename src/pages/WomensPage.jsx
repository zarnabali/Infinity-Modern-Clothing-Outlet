import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Footer from "../components/Footer/Footer";
import Header from "../components/header";
import MobileHeader from "../components/header_mobile";

const WomensPage = () => {
  const headerRef = useRef(null);
  const mainTextRef = useRef(null);
  const footerRef = useRef(null);
  const categoriesRef = useRef([]);
  const [videoSrc, setVideoSrc] = useState('');

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark', !isDarkMode);
  };
  

  useEffect(() => {

    const videoSources = [
      '/assets/women-1.mp4',
      '/assets/women-2.mp4',
    ];

    // Randomly select a video source
    const randomVideo = videoSources[Math.floor(Math.random() * videoSources.length)];
    setVideoSrc(randomVideo);



    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: 'power3.out', opacity: 0 },
    });

    // Header animation
    timeline.fromTo(
      headerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1 }
    );

    // Main text animation
    timeline.fromTo(
      mainTextRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1 },
      '<0.3' // Start slightly after the header animation
    );

    // Footer animation
    timeline.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 },
      '<0.3' // Start slightly after the main text animation
    );

    // Categories animation
    timeline.fromTo(
      categoriesRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1 },
      '<0.3'// Start slightly after the main text animation
    );


  }, []);


  



  return (




    <div className="font-sans min-h-screen flex flex-col justify-between bg-white overflow-hidden">
      
      
      {/* PC or tablet design only  */}
      {/* Header */}

      <div className='hidden md:block'>
      <Header />

      {/* Main Section */}
      <main
        className="relative flex-grow bg-cover bg-center h-[90vh]"
        style={{ backgroundImage: "url('/assets/womens_cover_img.png')" }}
      >
        <div
          ref={mainTextRef}
          className="absolute inset-0 bg-gradient-to-t from-black to-transparent px-8 py-8 flex flex-col items-start"
        >
          {/* Buttons */}
          <div className="absolute top-0 left-0 px-16 py-10 space-x-8 space-y-4 text-gray-300 hover:text-white whitespace-nowrap">
            <button className="text-white text-lg whitespace-nowrap" onClick={() => (window.location.href = '/menspage')}>
              MENS
            </button>
            <button
              className="text-white text-4xl font-bold "
              onClick={() => (window.location.href = '/women')}
            >
              WOMENS
            </button>
          </div>
        </div>
      </main>

      <div className="flex flex-row items-start justify-between px-14 py-10 bg-white border-t items-center ">
        {/* Left Section */}
        <div className="flex flex-col w-[60%]  space-y-4">
          <p className="text-sm text-gray-600">
            We use cookies to personalise content and ads, to provide social media features, and to analyse our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners who may combine it with other information that you've provided to them or that they've collected from your use of their services.
            <a href="#" className="text-blue-600 underline">More Details</a>
          </p>

          {/* Toggle Buttons Section */}
          <div className="flex items-center space-x-4">
            {/* Necessary */}
            <label className="flex items-center">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black peer-checked:bg-black transition duration-300">
                <div className="w-4 h-4 bg-white rounded-full transform peer-checked:translate-x-5 transition duration-300"></div>
              </div>
              <span className="ml-2 text-gray-700 text-sm">Dark Mode</span>
            </label>

            {/* Preferences */}
            <label className="flex items-center">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black peer-checked:bg-black transition duration-300">
                <div className="w-4 h-4 bg-white rounded-full transform peer-checked:translate-x-5 transition duration-300"></div>
              </div>
              <span className="ml-2 text-gray-700 text-sm">Preferences</span>
            </label>

            {/* Statistics */}
            <label className="flex items-center">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black peer-checked:bg-black transition duration-300">
                <div className="w-4 h-4 bg-white rounded-full transform peer-checked:translate-x-5 transition duration-300"></div>
              </div>
              <span className="ml-2 text-gray-700 text-sm">Statistics</span>
            </label>

            {/* Marketing */}
            <label className="flex items-center">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-10 h-5 bg-gray-300 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-black peer-checked:bg-black transition duration-300">
                <div className="w-4 h-4 bg-white rounded-full transform peer-checked:translate-x-5 transition duration-300"></div>
              </div>
              <span className="ml-2 text-gray-700 text-sm">Marketing</span>
            </label>
          </div>
        </div>

        {/* cookies buttons Section */}
        <div className="flex flex-col w-[25%] space-y-2">
          <button className="w-[100%] bg-black text-white px-4 py-2 rounded-md">Allow All</button>
          <button className="w-[100%] bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Allow Selection</button>
          <button className="w-[100%] bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Deny</button>
        </div>
      </div>



{/* Categories buttons Section */}
<div className="grid grid-cols-3 grid-rows-2 w-full min-h-screen h-auto">
        {/* Row1 */}
        <div 
          ref={el => categoriesRef.current[0] = el}
          className="col-span-2 row-span-1 relative overflow-hidden transition-all duration-300 group cursor-pointer"
          style={{ 
            backgroundImage: "url('/assets/new_arrivals_w.png')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100%',
            height: '80vh',
          }}
        >
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
          <div className="absolute bottom-2 left-2 text-white text-2xl font-bold px-14 py-10 flex-col text-left transition-transform duration-300 group-hover:scale-105 z-10">
            New Arrivals
            <div className='bg-white h-1 w-22 my-3'></div>
          </div>
        </div>
        <div 
          ref={el => categoriesRef.current[1] = el}
          className="row-span-1 relative overflow-hidden transition-all duration-300 group cursor-pointer" 
          style={{ 
            backgroundImage: "url('/assets/jewellery.png')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100%',
            height: '80vh',
          }}
        >
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
          <div className="absolute bottom-2 left-2 text-white text-2xl font-bold px-14 py-10 flex-col text-left transition-transform duration-300 group-hover:scale-105 z-10">
            Jewellery
            <div className='bg-white h-1 w-22 my-3'></div>
          </div>
        </div>

        {/* Row2 */}
        <div 
          ref={el => categoriesRef.current[2] = el}
          className="relative overflow-hidden transition-all duration-300 group cursor-pointer" 
          style={{ 
            backgroundImage: "url('/assets/jackets_w.png')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100%',
            height: '80vh',
          }}
        >
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
          <div className="absolute bottom-2 left-2 text-white text-2xl font-bold px-14 py-10 flex-col text-left transition-transform duration-300 group-hover:scale-105 z-10">
            <h1>Jackets</h1>
            <h1>and Suits</h1>
            <div className='bg-white h-1 w-22 my-3'></div>
          </div>
        </div>
        <div 
          ref={el => categoriesRef.current[3] = el}
          className="relative overflow-hidden transition-all duration-300 group cursor-pointer" 
          style={{ 
            backgroundImage: "url('/assets/coats_w.jpeg')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100%',
            height: '80vh',
          }}
        >
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
          <div className="absolute bottom-2 left-2 text-white text-2xl font-bold flex-col text-left px-14 py-10 transition-transform duration-300 group-hover:scale-105 z-10">
            <h1>Coats</h1>
            <div className='bg-white h-1 w-20 my-3'></div>
          </div>
        </div>
        <div 
          ref={el => categoriesRef.current[4] = el}
          className="relative overflow-hidden transition-all duration-300 group cursor-pointer" 
          style={{ 
            backgroundImage: "url('/assets/bags_w.png')", 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            width: '100%',
            height: '80vh',
          }}
        >
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300"></div>
          <div className="absolute bottom-2 left-2 text-white text-2xl font-bold flex-col text-left px-14 py-10 transition-transform duration-300 group-hover:scale-105 z-10">
            <h1>Bags</h1>
            <div className='bg-white h-1 w-20 my-3'></div>
          </div>
        </div>
      </div>

      <Footer />
      </div>







{/* MObile section design only */}
<div className={`block md:hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className={"font-sans min-h-screen  overflow-hidden md:hidden     "}>
      <MobileHeader />


 {/* Main Section */}
 <main className="relative h-screen">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
          ></video>
        <div
          ref={mainTextRef}
          className="absolute  flex flex-row items-start px-4 py-6 space-y-4  space-x-4"
        >
          <button className="text-white text-lg  mt-auto"   onClick={() => (window.location.href = '/menspage')}>MENS</button>
          <button
            className="text-gray-300  text-4xl font-bold hover:text-white"
            onClick={() => (window.location.href = '/women')}
          >
            WOMENS
          </button>
        </div>
      </main>


      

      {/* Categories Section */}
      <div className="flex flex-col">
        

        <div
          ref={(el) => (categoriesRef.current[0] = el)}
          className="h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/assets/new_arrivals_m_w.jpeg')",
          }}
        >
          <h1 className="text-white text-3xl font-bold pb-20">New Arrivals</h1>
        </div>


        <div
          ref={(el) => (categoriesRef.current[1] = el)}
          className="h-[50vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/assets/jewellery.png')",
          }}
        >
          <h1 className="text-white text-3xl font-bold">Jewellery</h1>
        </div>


        <div
          ref={(el) => (categoriesRef.current[2] = el)}
          className="h-[50vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/assets/jackets_w.png')",
          }}
        >
          <h1 className="text-white text-3xl font-bold">Jackets & Suits</h1>
        </div>





        <div
          ref={(el) => (categoriesRef.current[3] = el)}
          className="h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/assets/coats_w.jpeg')",
          }}
        >
          <h1 className="text-white text-3xl font-bold ">Coats</h1>
        </div>


        <div
          ref={(el) => (categoriesRef.current[4] = el)}
          className="h-[50vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url('/assets/bags_w.png')",
          }}
        >
          <h1 className="text-white text-3xl font-bold">Bags</h1>
        </div>


      
          
          <Footer />



      </div>
    </div>
    </div>






    </div>
  );
};

export default WomensPage;