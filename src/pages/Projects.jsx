import React, { useState } from "react";
import { usePortfolioContent } from "../context/PortfolioContentContext.jsx";

export default function Projects() {
  const { content } = usePortfolioContent();
  const { projects: projectItems, filters, introBadge, introTitle, introSubtitle } = content.projects;
  const [active, setActive] = useState("all");

  const visible = active === "all"
    ? projectItems
    : projectItems.filter((p) => p.domain === active);

  return (
    <div className="projects-page">
      {/* ── Page hero ────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
            <div className="section-badge">
              <span className="section-badge-dot" /> {introBadge}
            </div>
            <h1 className="section-title">
              {introTitle.split(" ")[0]} <span>{introTitle.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="section-subtitle">{introSubtitle}</p>
          </div>
        </div>
      </section>

      {/* ── Filter tabs ──────────────────────────── */}
      <div className="projects-filter-bar">
        <div className="container">
          <div className="filter-tabs">
            {filters.map((f) => (
              <button
                key={f.key}
                id={`filter-${f.key}`}
                className={`filter-tab${active === f.key ? " active" : ""}`}
                onClick={() => setActive(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Projects grid ─────────────────────────── */}
      <section className="projects-grid-section">
        <div className="container">
          <div className="projects-grid">
            {visible.map((proj) => (
              <article key={proj.id} className="project-card">
                <div className="project-image-wrap">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    onError={(e) => { e.currentTarget.src = proj.fallback; }}
                  />
                  <span className={`project-domain-badge ${proj.domain === "bi" ? "badge-bi" : "badge-health"}`}>
                    {proj.domain === "bi" ? "Business Intelligence" : "Healthcare"}
                  </span>
                </div>
                <div className="project-body">
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                  <div className="project-actions">
                    <a
                      href={proj.links.dashboard}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn primary"
                    >
                      View Dashboard
                    </a>
                    <a
                      href={proj.links.article}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-btn ghost"
                    >
                      Read Article
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        © 2026 <strong>{content.meta.footerName}</strong>. All rights reserved.
      </footer>
    </div>
  );
}
