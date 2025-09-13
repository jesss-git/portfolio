import { useState, useEffect } from "react";
import "./Navbar.css";

const NAV_LINKS = ["HOME", "UX/UI", "GRAPHICS", "GALLERY", "CODE", "ABOUT"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling DOWN → hide nav + animate out
        setHideNav(true);

        // After animation finishes (~300ms), reset dropdown state
        setTimeout(() => {
          setMenuOpen(false);
        }, 300);
      } else {
        // Scrolling UP → show nav again
        setHideNav(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${hideNav ? "navbar-hidden" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">pt</div>

        {/* Desktop Links */}
        <div className="navbar-right">
          <ul className="navbar-links">
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
          <button className="navbar-connect">CONNECT</button>
        </div>

        {/* Hamburger (mobile) */}
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

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""} ${hideNav ? "mobile-menu-hidden" : ""}`}>
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
    </nav>
  );
}
