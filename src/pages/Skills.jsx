import React from "react";
import { usePortfolioContent } from "../context/PortfolioContentContext.jsx";
import { renderIcon } from "../content/iconLibrary.jsx";

export default function Skills() {
  const { content } = usePortfolioContent();
  const {
    skillBars,
    competencies,
    certifications,
    introBadge,
    introTitle,
    introSubtitle,
    introSubtitleSecondary,
  } = content.skills;

  return (
    <div className="skills-page">
      <div className="page-content">
      {/* ── Intro ──────────────────────────────────── */}
      <section className="skills-intro">
        <div className="container">
          <div className="skills-intro-grid">
            <div className="skills-intro-text">
              <div className="section-badge">
                <span className="section-badge-dot" /> {introBadge}
              </div>
              <h1 className="section-title">
                {introTitle.includes("&") ? introTitle.split("&")[0].trim() : introTitle.split(" ")[0]} <span>{introTitle.includes("&") ? introTitle.split("&")[1].trim() : introTitle.split(" ").slice(1).join(" ")}</span>
              </h1>
              <p className="section-subtitle">{introSubtitle}</p>
              <p className="section-subtitle" style={{ marginTop: 8 }}>{introSubtitleSecondary}</p>
            </div>

            <div className="skills-intro-visual">
              {skillBars.map((bar) => (
                <div key={bar.name} className="skill-bar-item">
                  <div className="skill-bar-label">
                    <span>{bar.name}</span>
                    <span style={{ color: "var(--blue)", fontWeight: 800 }}>{bar.pct}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div className="skill-bar-fill" style={{ width: `${bar.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Competency Cards ───────────────────────── */}
      <section className="competencies-section">
        <div className="container">
          <div className="competencies-header">
            <div className="section-badge">
              <span className="section-badge-dot" /> Core Competencies
            </div>
            <h2 className="section-title">What I Bring to the Table</h2>
            <p className="section-subtitle">
              Six domains of deep expertise spanning BI, healthcare, AI, and
              communication — covering every step from raw data to real impact.
            </p>
          </div>

          <div className="competencies-grid">
            {competencies.map((c) => (
              <div key={c.title} className="competency-card">
                <div className="competency-card-accent" />
                <div className="competency-icon-wrap">{renderIcon(c.icon, "competency-icon-svg")}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ─────────────────────────── */}
      <section style={{ padding: "60px 0 80px", background: "var(--pale)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 44, textAlign: "center", alignItems: "center" }}>
            <div className="section-badge"><span className="section-badge-dot" /> Credentials</div>
            <h2 className="section-title">Certifications &amp; Education</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {certifications.map((cert) => (
              <div key={cert.title} style={{ background: "var(--white)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "24px 28px", display: "flex", alignItems: "flex-start", gap: 16, boxShadow: "var(--shadow-sm)", transition: "all 0.25s var(--ease)" }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = "var(--shadow-md)"}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "var(--shadow-sm)"}
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--light-blue)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: "0.97rem", marginBottom: 4 }}>{cert.title}</div>
                  <div style={{ fontSize: "0.87rem", color: "var(--text-muted)" }}>{cert.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>{/* end page-content */}

      <footer className="site-footer">
        © 2026 <strong>{content.meta.footerName}</strong>. All rights reserved.
      </footer>
    </div>
  );
}
