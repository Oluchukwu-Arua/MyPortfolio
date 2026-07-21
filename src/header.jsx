import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",     path: "/" },
  { label: "Skills",   path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Contact",  path: "/contact" },
];

export default function Header() {
  const navigate   = useNavigate();
  const location   = useLocation();
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  const go = (path) => { navigate(path); };

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}`} id="site-header">
        <div className="header-inner container">

          {/* Brand */}
          <div className="brand" onClick={() => go("/")} id="brand-home-btn" role="button" tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && go("/")}>
            <span className="brand-dot" />
            <span className="brand-name">Arua Oluchukwu</span>
          </div>

          {/* Desktop Nav */}
          <nav className={`nav-list${menuOpen ? " show" : ""}`} id="navigation-list" aria-label="Main navigation">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <button
                    id={`nav-${link.label.toLowerCase()}`}
                    className={`nav-btn${location.pathname === link.path ? " active-nav" : ""}`}
                    onClick={() => go(link.path)}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {/* CTA */}
            <div className="header-action">
              <button className="action-btn" id="header-masterclass-btn" onClick={() => go("/contact")}>
                Hire Me
              </button>
            </div>

            {/* Hamburger */}
            <button
              id="menu-toggle-btn"
              className={`menu-toggle${menuOpen ? " open" : ""}`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </header>

      {/* Backdrop for mobile menu */}
      <div
        className={`backdrop${menuOpen ? " visible" : ""}`}
        id="menu-backdrop"
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
