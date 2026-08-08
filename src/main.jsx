import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./header.jsx";
import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Admin from "./pages/Admin.jsx";
import { PortfolioContentProvider, usePortfolioContent } from "./context/PortfolioContentContext.jsx";
import "./assets/css/global.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function PortfolioApp() {
  const { isLoaded, error, refresh } = usePortfolioContent();

  if (!isLoaded) {
    return (
      <div className="portfolio-loader-page">
        <div className="portfolio-loader-card" role="status" aria-live="polite">
          {error ? (
            <>
              <div className="portfolio-loader-icon portfolio-loader-icon-error" aria-hidden="true">!</div>
              <h1>Unable to load portfolio</h1>
              <p>{error} Check your connection and try again.</p>
              <button className="btn-primary portfolio-retry-button" type="button" onClick={() => refresh().catch(() => {})}>
                Try Again
              </button>
            </>
          ) : (
            <>
              <div className="portfolio-loader-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <h1>Loading portfolio</h1>
              <p>Fetching the latest content and projects...</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

function App() {
  return (
    <PortfolioContentProvider>
      <PortfolioApp />
    </PortfolioContentProvider>
  );
}

export default App;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
