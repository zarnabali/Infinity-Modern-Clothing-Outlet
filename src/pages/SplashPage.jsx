import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // GSAP animation for the splash screen
    gsap.fromTo(
      ".splash-background",
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "power2.inOut" }
    );

    // Trigger exit animation before navigating to the landing page
    const timer = setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => navigate("/landing"), // Navigate after the animation
      });

      tl.to(".splash-background", {
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
      });
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div
      className="splash-background w-full h-screen bg-cover bg-center"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: "url('/assets/starter_page_background.png')",
      }}
    >
      <div className="flex items-center justify-center h-full w-full">
        
      </div>
    </div>
  );
};

export default SplashScreen;
