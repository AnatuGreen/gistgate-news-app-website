import React, { useEffect, useState } from "react";
import siteLogo from "./Gistgate-News-App-Logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [navbarBackground, setNavbarBackground] = useState("transparent");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setNavbarBackground("#ffffff"); // Change the background color to white
      } else {
        setNavbarBackground("transparent"); // Change the background color back to transparent
      }
    });
  }, []);

  return (
    <nav className="navbar" style={{ backgroundColor: navbarBackground }}>
      <div className="logo">
        <img src={siteLogo} alt="Logo" />
      </div>
      <ul className={`menu ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#section2">About</a>
        </li>
        <li>
          <a href="#section3">Terms</a>
        </li>
        <li>
          <a href="#section4">Contact us</a>
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-line ${menuOpen ? "open" : ""}`}></div>
        <div className={`menu-line ${menuOpen ? "open" : ""}`}></div>
        <div className={`menu-line ${menuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
