import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/landing.css';
import { gsap } from "gsap";

const LandingPage = () => {
  const mobileVideoSources = [
    '/assets/video1.mp4',
    '/assets/video3.mp4',
    '/assets/video4.mp4',
    '/assets/video5.mp4',
  ];

  const [selectedVideoSrc, setSelectedVideoSrc] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * mobileVideoSources.length);
    setSelectedVideoSrc(mobileVideoSources[randomIndex]);
  }, []);

  const handleExploreClick = () => {
    gsap.to('.landing-page', {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        navigate('/menspage'); // Navigate after animation completes
      },
    });
  };

  return (
    <div className="landing-page">
      <div className="background-video">
        <video className="video desktop-video" src="/assets/video2.mp4" autoPlay muted loop />
        {selectedVideoSrc && (
          <video
            key={selectedVideoSrc}
            className="video mobile-video"
            src={selectedVideoSrc}
            autoPlay
            muted
            loop
          />
        )}
      </div>

      <div className="overlay-content">
        <header className="header">
          <div className="header-desktop">
            <div className="header-left">
              <img src="/assets/logo_white.png" alt="Logo" className="logo" />
              <nav className="nav">
                <a href="#home" className="nav-link " >Home</a>
                <a href="#about" className="nav-link" onClick={() => (window.location.href = "/aboutus")}
                >About</a>
                <a href="#contact" className="nav-link" onClick={() => (window.location.href = "/contactus")}
                >Contact Us</a>
              </nav>
            </div>
            <div className="header-right">
              <button className="icon-button">
                <img src="/assets/person_icon.png" alt="Person Icon" className="icon" />
              </button>
              <button className="icon-button">
                <img src="/assets/bag_icon.png" alt="Bag Icon" className="icon" />
              </button>
              <button className="icon-button">
                <img src="/assets/hamburger_icon.png" alt="Hamburger Icon" className="icon" />
              </button>
            </div>
          </div>
          <div className="header-mobile">
            <img src="/assets/logo_white.png" alt="Logo" className="logo" />
          </div>
        </header>

        <div className="main-content">
          <h1 className="main-title">
            Ready to explore the <br /> infinite possibilities of styling
          </h1>
          <button className="explore-button" onClick={handleExploreClick}>
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
