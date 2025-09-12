import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = ["HOME", "UX/UI", "GRAPHICS", "GALLERY", "CODE", "ABOUT"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">portfolio</div>

        {/* Desktop Links */}
        <div className="navbar-right">
          <ul className="navbar-links">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  className={`nav-link ${active === link ? "active" : ""}`}
                  onClick={() => {
                    setActive(link);
                    setMenuOpen(false); // close menu on selection
                  }}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          <button className="navbar-connect">CONNECT</button>
          </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

    </nav>

    {/* Mobile Dropdown Menu */}
    <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`nav-link ${active === link ? "active" : ""}`}
                onClick={() => {
                  setActive(link);
                  setMenuOpen(false);
                }}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
