import React from "react";
import { useNavigate } from "react-router-dom";
import { usePortfolioContent } from "../context/PortfolioContentContext.jsx";
import { renderIcon } from "../content/iconLibrary.jsx";

export default function Home() {
  const navigate = useNavigate();
  const { content } = usePortfolioContent();
  const { hero, socials, expertise, tools, cta } = content.home;

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
              {hero.badge}
            </div>

            <h1 className="hero-title">
              {hero.titleLine1}<br />
              <span className="highlight">{hero.titleHighlight}</span>
            </h1>

            <p className="hero-desc">{hero.description}</p>

            <div className="hero-ctas">
              <button
                className="hero-cta-primary"
                onClick={() => navigate(hero.primaryCtaHref)}
              >
                {hero.primaryCtaLabel}
              </button>
              <button
                className="hero-cta-secondary"
                onClick={() => navigate(hero.secondaryCtaHref)}
              >
                {hero.secondaryCtaLabel}
              </button>
            </div>

            <div className="hero-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="hero-social-link"
                >
                  {renderIcon(s.icon, "hero-social-icon")}
                </a>
              ))}
            </div>
          </div>

          {/* Right – image */}
          <div className="hero-image-side">
            <div className="hero-image-ring">
              <img
                src={hero.image.src}
                alt={hero.image.alt}
                className="profile-img"
                onError={(e) => { e.currentTarget.src = hero.image.fallback; }}
              />
            </div>

            {/* Floating stats */}
            <div className="hero-stats hero-stats-left">
              {hero.stats.slice(0, 2).map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-card-number">{stat.value}</div>
                  <div className="stat-card-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="hero-stats hero-stats-right">
              <div className="stat-card">
                <div className="stat-card-number">{hero.stats[2].value}</div>
                <div className="stat-card-label">{hero.stats[2].label}</div>
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
                <div className="expertise-icon">{renderIcon(item.icon, "expertise-icon-svg")}</div>
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
            <span className="section-badge-dot" style={{ background: "var(--accent)" }} /> {cta.badge}
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "var(--white)", letterSpacing: "-0.03em", marginBottom: 20 }}>
            {cta.title}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", marginBottom: 40, maxWidth: 520, margin: "0 auto 40px" }}>
            {cta.description}
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="hero-cta-primary" onClick={() => navigate(cta.primaryHref)}>
              {cta.primaryLabel}
            </button>
            <button className="hero-cta-secondary" onClick={() => navigate(cta.secondaryHref)}>
              {cta.secondaryLabel}
            </button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        © 2026 <strong>{content.meta.footerName}</strong>. All rights reserved.
      </footer>
    </div>
  );
}
