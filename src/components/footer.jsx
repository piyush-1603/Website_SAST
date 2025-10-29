import React from "react";
import "./footer.css";
import SASTLogo from "../Landing_media/SAST.png";

const Footer = () => {
  return (
    <footer className="sast-footer">
      {/* Animated starfield layers */}
      <div className="stars stars-back" aria-hidden="true" />
      <div className="stars stars-front" aria-hidden="true" />

      <div className="footer-grid">
        {/* Brand + Socials */}
        <div className="footer-brand">
          <div className="brand-card">
            <img src={SASTLogo} alt="SAST" className="brand-logo" />
          </div>
          <div className="social-icons" aria-label="SAST Social Links">
            <a className="social-icon" href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" className="icon-svg" xmlns="http://www.w3.org/2000/svg" role="img">
                <path d="M23.5 6.2a4.4 4.4 0 0 0-3.1-3.1C18.7 2.5 12 2.5 12 2.5s-6.7 0-8.4.6A4.4 4.4 0 0 0 .5 6.2 46.5 46.5 0 0 0 0 12c0 1.9.2 3.9.5 5.8a4.4 4.4 0 0 0 3.1 3.1c1.7.6 8.4.6 8.4.6s6.7 0 8.4-.6a4.4 4.4 0 0 0 3.1-3.1c.3-1.9.5-3.9.5-5.8 0-1.9-.2-3.9-.5-5.8zM9.8 15.5v-7l6.1 3.5-6.1 3.5z" />
              </svg>
            </a>
            <a className="social-icon" href="https://www.instagram.com/sast.rishihood/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" className="icon-svg" xmlns="http://www.w3.org/2000/svg" role="img">
                <path d="M12 2.2c3 0 3.3 0 4.5.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.3 1.2.4 2.4.1 1.2.1 1.5.1 4.5s0 3.3-.1 4.5c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.3-2.4.4-1.2.1-1.5.1-4.5.1s-3.3 0-4.5-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.3-1.2-.4-2.4C2.2 15.3 2.2 15 2.2 12s0-3.3.1-4.5c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.3 2.4-.4C8.7 2.2 9 2.2 12 2.2m0-2.2C9 0 8.6 0 7.4.1 6.2.2 5.3.3 4.5.6 3.6.9 2.8 1.4 2.1 2.1 1.4 2.8.9 3.6.6 4.5.3 5.3.2 6.2.1 7.4 0 8.6 0 9 0 12s0 3.4.1 4.6c.1 1.2.2 2.1.5 2.9.3.9.8 1.7 1.5 2.4.7.7 1.5 1.2 2.4 1.5.8.3 1.7.4 2.9.5 1.2.1 1.6.1 4.6.1s3.4 0 4.6-.1c1.2-.1 2.1-.2 2.9-.5.9-.3 1.7-.8 2.4-1.5.7-.7 1.2-1.5 1.5-2.4.3-.8.4-1.7.5-2.9.1-1.2.1-1.6.1-4.6s0-3.4-.1-4.6c-.1-1.2-.2-2.1-.5-2.9-.3-.9-.8-1.7-1.5-2.4-.7-.7-1.5-1.2-2.4-1.5C18.6.3 17.7.2 16.5.1 15.3 0 14.9 0 12 0z"/>
                <path d="M12 5.8A6.2 6.2 0 1 0 12 18.2 6.2 6.2 0 1 0 12 5.8m0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.4 4.6a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
              </svg>
            </a>
            <a className="social-icon" href="https://www.linkedin.com/company/society-for-aerospace-and-space-technology/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" className="icon-svg" xmlns="http://www.w3.org/2000/svg" role="img">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.8v2h.1c.5-.9 1.8-2.1 3.8-2.1 4 0 4.7 2.6 4.7 6V23h-4v-6.5c0-1.6 0-3.7-2.2-3.7s-2.5 1.7-2.5 3.6V23H8V8.5z"/>
              </svg>
            </a>
            <a className="social-icon" href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg viewBox="0 0 24 24" className="icon-svg" xmlns="http://www.w3.org/2000/svg" role="img">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.49 8.49 0 0 1-2.71 1.03 4.25 4.25 0 0 0-7.24 3.88A12.06 12.06 0 0 1 3.15 4.9a4.25 4.25 0 0 0 1.32 5.67 4.2 4.2 0 0 1-1.92-.53v.05a4.25 4.25 0 0 0 3.4 4.17c-.46.12-.95.18-1.45.07a4.25 4.25 0 0 0 3.97 2.95A8.52 8.52 0 0 1 2 19.54a12.03 12.03 0 0 0 6.53 1.92c7.84 0 12.13-6.49 12.13-12.12 0-.19 0-.38-.01-.57A8.67 8.67 0 0 0 24 6.5a8.46 8.46 0 0 1-2.54.7z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* ABOUT */}
        <nav className="footer-col">
          <h4 className="col-title">ABOUT</h4>
          <ul className="col-links">
            <li><a href="#/about/mission" className="fx-link">Mission</a></li>
            <li><a href="#/about/locations" className="fx-link">SAST Locations</a></li>
            <li><a href="#/about/history" className="fx-link">History</a></li>
            <li><a href="#/about/faqs" className="fx-link">FAQs</a></li>
            <li><a href="/events" className="fx-link">News & Events</a></li>
          </ul>
        </nav>

        {/* CAREERS */}
        <nav className="footer-col">
          <h4 className="col-title">CAREERS</h4>
          <ul className="col-links">
            <li><a href="#/careers/finder" className="fx-link">Career Finder</a></li>
            <li><a href="#/careers/benefits" className="fx-link">Benefits</a></li>
            <li><a href="#/careers/education" className="fx-link">Education</a></li>
            <li><a href="#/careers/training" className="fx-link">Training</a></li>
            <li><a href="#/careers/life" className="fx-link">Life in SAST</a></li>
          </ul>
        </nav>

        {/* CAPABILITIES */}
        <nav className="footer-col">
          <h4 className="col-title">CAPABILITIES</h4>
          <ul className="col-links">
            <li><a href="#/capabilities/protecting-satellites" className="fx-link">Protecting Satellites</a></li>
            <li><a href="#/capabilities/facilitating-launches" className="fx-link">Facilitating Launches</a></li>
            <li><a href="#/capabilities/education" className="fx-link">Education</a></li>
            <li><a href="#/capabilities/experience-launch" className="fx-link">Experience a Launch</a></li>
            <li><a href="#/capabilities/life-in-sast" className="fx-link">Life in SAST</a></li>
          </ul>
        </nav>

        {/* HOW TO JOIN */}
        <nav className="footer-col">
          <h4 className="col-title">HOW TO JOIN</h4>
          <ul className="col-links">
            <li><a href="#/join/expect" className="fx-link">What to Expect</a></li>
            <li><a href="#/join/families" className="fx-link">For Families</a></li>
            <li><a href="/register" className="fx-link">Live Chat</a></li>
            <li><a href="#/join/training" className="fx-link">Training</a></li>
            <li><a href="#/join/life" className="fx-link">Life in SAST</a></li>
          </ul>
        </nav>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <ul className="bottom-links">
          <li><a className="fx-link" href="/">SAST</a></li>
          <li><a className="fx-link" href="#/privacy">Privacy Policy</a></li>
          <li><a className="fx-link" href="#/accessibility">Accessibility</a></li>
          <li><a className="fx-link" href="/news">Watch Videos</a></li>
          <li><a className="fx-link" href="#/sitemap">Sitemap</a></li>
          <li><a className="fx-link" href="#/cookies">Cookie Settings</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;


