import React, { useState, useEffect } from "react";
import "./assets/css/header.css";



export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
      <>
      <header className="site-header">
      <div className="header-inner container">
        <div className="brand">
          <div className="logo-wrap">
            <img src="/images/logo.png" alt="Logo" className="logo-img" />
            <span className="brand-name">Oluchukwu Arua</span>
          </div>
        </div>
        <div className="menu-side">
          <div className="border">
            <button
            className={`menu-toggle ${open ? "open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
          >
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </button>
          </div>

          <nav className={`nav-list ${open ? "show" : ""}`}> 
            <ul>
              <li><a href="#top" onClick={() => setOpen(false)}>About Me</a></li>
              <li><a href="#work" onClick={() => setOpen(false)}>Skills</a></li>
              <li><a href="#portfolio" onClick={() => setOpen(false)}>Project</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>


      <div className={`backdrop ${open ? "visible" : ""}`} onClick={() => setOpen(false)} />
    </header>
      </>
  );
}

