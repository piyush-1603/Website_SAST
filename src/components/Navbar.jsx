/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../Landing_media/SAST.png";

// Utility function to merge classnames
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);
  const [communityOpen, setCommunityOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();

  // Handle scroll visibility
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      const direction = current - (previous || 0);

      if (current < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Navigation items configuration
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/docs" },
  ];

  const exploreItems = [
    { name: "Events", path: "/events" },
    { name: "Projects", path: "/projects" },
    { name: "Astronomy News", path: "/news" },
    { name: "Track", path: "/track" },
  ];

  const communityItems = [
    { name: "Members", path: "/community/members" },
    { name: "Contributors", path: "/contributors" },
    { name: "Newsletter", path: "/newsletter" },
  ];

  const registerItem = { name: "Register", path: "/register" };

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((o) => !o);
  const closeMenu = () => {
    setMenuOpen(false);
    setExploreOpen(false);
    setCommunityOpen(false);
  };

  const toggleExplore = () => setExploreOpen((o) => !o);
  const toggleCommunity = () => setCommunityOpen((o) => !o);

  return (
    <>
      {/* Floating Navbar - Desktop */}
      <AnimatePresence mode="wait">
        <motion.header
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50 max-w-fit"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 bg-black/80 backdrop-blur-xl border border-white/20 rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(255,255,255,0.02),0px_0px_0px_1px_rgba(255,255,255,0.08)]">
            {/* Logo */}
            <NavLink to="/" className="flex items-center mr-2">
              <img src={logo} alt="SAST Logo" className="w-8 h-8" />
            </NavLink>

            {/* Nav Items */}
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "relative px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                    isActive
                      ? "text-blue-400 bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  )
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Explore Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors duration-200">
                Explore
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl overflow-hidden">
                  {exploreItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "block px-4 py-2.5 text-sm transition-colors duration-200",
                          isActive ? "text-blue-400 bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Community Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors duration-200">
                Community
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-xl overflow-hidden">
                  {communityItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      className={({ isActive }) =>
                        cn(
                          "block px-4 py-2.5 text-sm transition-colors duration-200",
                          isActive ? "text-blue-400 bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            {/* Nebula Link */}
            <a
              href="https://nebula.sastclub.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors duration-200"
            >
              Nebula
            </a>

            {/* Register */}
            <NavLink
              to={registerItem.path}
              className={({ isActive }) =>
                cn(
                  "px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-200",
                  isActive ? "text-blue-400 bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                )
              }
            >
              {registerItem.name}
            </NavLink>

            {/* Contact Button */}
            <a
              href="https://www.linkedin.com/company/society-for-astrophysics-and-space-technology/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="relative ml-2 px-4 py-1.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-all duration-200"
            >
              <span>Contact</span>
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px" />
            </a>
          </div>
        </motion.header>
      </AnimatePresence>

      {/* Mobile Navbar - Fixed Top */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <NavLink to="/" onClick={closeMenu} className="flex items-center">
            <img src={logo} alt="SAST Logo" className="w-12 h-12" />
          </NavLink>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>

          {/* Mobile Menu */}
          <nav className={`fixed inset-0 top-16 bg-black/95 backdrop-blur-lg transition-all duration-300 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <ul className="flex flex-col p-6 space-y-2 overflow-y-auto max-h-full">
              <li className="pb-4 mb-4 border-b border-white/10">
                <div className="text-lg font-bold text-white">Menu</div>
              </li>

              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      cn(
                        "block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200",
                        isActive ? "text-blue-400 bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              {/* Mobile Explore Dropdown */}
              <li>
                <button
                  onClick={toggleExplore}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                >
                  Explore
                  <svg className={`w-5 h-5 transition-transform duration-200 ${exploreOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {exploreOpen && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {exploreItems.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            cn(
                              "block px-4 py-2.5 text-sm rounded-lg transition-colors duration-200",
                              isActive ? "text-blue-400 bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                            )
                          }
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Mobile Community Dropdown */}
              <li>
                <button
                  onClick={toggleCommunity}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                >
                  Community
                  <svg className={`w-5 h-5 transition-transform duration-200 ${communityOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {communityOpen && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {communityItems.map((item) => (
                      <li key={item.path}>
                        <NavLink
                          to={item.path}
                          onClick={closeMenu}
                          className={({ isActive }) =>
                            cn(
                              "block px-4 py-2.5 text-sm rounded-lg transition-colors duration-200",
                              isActive ? "text-blue-400 bg-white/10" : "text-gray-400 hover:text-white hover:bg-white/5"
                            )
                          }
                        >
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="https://nebula.sastclub.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                >
                  Nebula
                </a>
              </li>

              <li>
                <NavLink
                  to={registerItem.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200",
                      isActive ? "text-blue-400 bg-white/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                    )
                  }
                >
                  {registerItem.name}
                </NavLink>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/society-for-astrophysics-and-space-technology/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 text-center"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
