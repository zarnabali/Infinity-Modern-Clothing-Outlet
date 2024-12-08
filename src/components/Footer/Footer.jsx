import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './footer.css';
// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Import CSS file


const Footer = () => {
  return (
    <footer className="footer inset-0 bg-gradient-to-t from-purple-600 via-transparent to-blue-500 opacity-75">
      <video
        className="footer_video"
        muted
        loop
        autoPlay
        src="/assets/footer.mp4"
       
      ></video>

      <div className="container">
        <div className="footer_inner">
          <div className="c-footer">
            <div className="layout">
              {/* Newsletter Section */}
              <div className="layout_item w-50">
                <div className="newsletter">
                  <h3 className="newsletter_title">
                    Get updates on fun stuff you probably want to know about in your inbox.
                  </h3>
                  <form action="">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="newsletter_input"
                    />
                    <button className="newsletter_button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                      >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>

              {/* Menu Section */}
              <div className="layout_item w-25">
                <nav className="c-nav-tool">
                  <h4 className="c-nav-tool_title">Menu</h4>
                  <ul className="c-nav-tool_list">
                    <li>
                      <a href="/collections/all" className="c-link">Shop All</a>
                    </li>
                    <li>
                      <a href="/pages/about-us" className="c-link">About Us</a>
                    </li>
                    <li>
                      <a href="/blogs/community" className="c-link">Community</a>
                    </li>
                    <li>
                      <a href="#" className="c-link">Vibes</a>
                    </li>
                  </ul>
                </nav>
              </div>

              {/* Support Section */}
              <div className="layout_item w-25">
                <nav className="c-nav-tool">
                  <h4 className="c-nav-tool_title">Support</h4>
                  <ul className="c-nav-tool_list">
                    <li>
                      <a href="/pages/shipping-returns" className="c-link">Shipping & Returns</a>
                    </li>
                    <li>
                      <a href="/pages/help" className="c-link">Help & FAQ</a>
                    </li>
                    <li>
                      <a href="/pages/terms-conditions" className="c-link">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="/pages/privacy-policy" className="c-link">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/pages/contact" className="c-link">Contact</a>
                    </li>
                    <li>
                      <a href="/account/login" className="c-link">Login</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            {/* Social Media and Additional Content */}
            <div className="layout c-2">
              <div className="layout_item w-50">
                <ul className="flex social_icons">
                  <li>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <svg /* Facebook Icon */></svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <svg /* Twitter Icon */></svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                      <svg /* Instagram Icon */></svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                      <svg /* YouTube Icon */></svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="layout_item w-50">
                <p className="footer_text">
                  © 2024 Your Company. All rights reserved. Designed with love by [Your Name].
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
