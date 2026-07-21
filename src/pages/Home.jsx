import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const BASE = import.meta.env.BASE_URL;

const tools = [
  "SQL", "Power BI", "Tableau", "Python", "R Studio", "Excel",
  "Machine Learning", "EHR Systems", "SPSS", "DAX", "Data Warehousing",
  "Azure", "Clinical Informatics", "Epidemiology",
];

const expertise = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/>
      </svg>
    ),
    title: "Business Intelligence",
    desc: "Transforming raw business data into strategic insights using Power BI, SQL, and advanced analytics to drive measurable growth.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
      </svg>
    ),
    title: "Healthcare Analytics",
    desc: "Applying clinical informatics and epidemiology to analyse patient outcomes, disease patterns, and hospital performance metrics.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a8 8 0 1 0 0 16A8 8 0 0 0 12 2z"/><path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "AI & Predictive Modelling",
    desc: "Building machine learning models and AI-driven forecasting pipelines that predict trends before they happen.",
  },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* ── Hero ────────────────────────────────────── */}
      <section className="hero-section">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="hero-inner container">
          {/* Left – text */}
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-pulse" />
              Data Analytics Consultant · AI Engineer
            </div>

            <h1 className="hero-title">
              Oluchukwu<br />
              <span className="highlight">Lawrencia Arua</span>
            </h1>

            <p className="hero-desc">
              Transforming complex data — business and clinical alike — into
              clear, actionable intelligence. I bridge Business Intelligence
              and Healthcare Analytics to empower smarter decisions at every level.
            </p>

            <div className="hero-ctas">
              <button
                className="hero-cta-primary"
                onClick={() => navigate("/projects")}
              >
                View My Work
              </button>
              <button
                className="hero-cta-secondary"
                onClick={() => navigate("/contact")}
              >
                Get in Touch
              </button>
            </div>

            <div className="hero-socials">
              {[
                {
                  label: "Twitter",
                  href: "https://x.com",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
                },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
                },
                {
                  label: "GitHub",
                  href: "https://github.com",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.23 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>,
                },
                {
                  label: "Medium",
                  href: "https://medium.com",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="hero-social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right – image */}
          <div className="hero-image-side">
            <div className="hero-image-ring">
              <img
                src={`${BASE}images/annie.jpg`}
                alt="Daberechi Annie Nnamani"
                className="profile-img"
                onError={(e) => { e.target.src = `${BASE}images/Oluchi-main-pic.jpg`; }}
              />
            </div>

            {/* Floating stats */}
            <div className="hero-stats hero-stats-left">
              <div className="stat-card">
                <div className="stat-card-number">5+</div>
                <div className="stat-card-label">Years Exp.</div>
              </div>
              <div className="stat-card">
                <div className="stat-card-number">20+</div>
                <div className="stat-card-label">Projects</div>
              </div>
            </div>
            <div className="hero-stats hero-stats-right">
              <div className="stat-card">
                <div className="stat-card-number">2</div>
                <div className="stat-card-label">Domains</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Expertise Cards ──────────────────────────── */}
      <section className="expertise-strip">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 0 }}>
            <div className="section-badge">
              <span className="section-badge-dot" /> What I Do
            </div>
            <h2 className="section-title">
              Dual-Domain <span>Expertise</span>
            </h2>
            <p className="section-subtitle">
              Uniquely positioned at the intersection of business intelligence and
              healthcare data analytics — delivering insights that matter in both worlds.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <div key={item.title} className="expertise-card">
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools Strip ──────────────────────────────── */}
      <section className="tools-strip">
        <div className="container">
          <p className="tools-label">Tools &amp; Technologies I Work With</p>
          <div className="tools-row">
            {tools.map((t) => (
              <span key={t} className="tool-pill">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ padding: "100px 0", textAlign: "center", background: "var(--navy)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.15) 0%, transparent 65%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-badge" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", margin: "0 auto 20px" }}>
            <span className="section-badge-dot" style={{ background: "var(--accent)" }} /> Let's Collaborate
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.03em", marginBottom: 20 }}>
            Ready to turn your data<br />into decisions?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
            Whether it's a business dashboard, a clinical study, or an AI model — let's build something impactful together.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="hero-cta-primary" onClick={() => navigate("/contact")}>
              Start a Conversation
            </button>
            <button className="hero-cta-secondary" onClick={() => navigate("/projects")}>
              Explore Projects
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        © 2026 <strong>Oluchukwu Lawrencia Arua</strong>. All rights reserved.
      </footer>
    </div>
  );
}
