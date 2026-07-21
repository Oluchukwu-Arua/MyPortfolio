import React, { useState } from "react";

const BASE = import.meta.env.BASE_URL;

const ALL_PROJECTS = [
  // ── Business Intelligence ──────────────────────────────────────────────
  {
    id: 1,
    domain: "bi",
    title: "AdventureWorks Data Analysis",
    desc: "Comprehensive analysis of Adventure Works sales data to identify key performance trends, top-selling customer segments, and high-margin products — directly supporting data-driven retail decision-making.",
    img: `${BASE}images/adventureworks.jpg`,
    fallback: `${BASE}images/pic01.jpg`,
    links: { dashboard: "https://app.powerbi.com", article: "https://medium.com" },
  },
  {
    id: 2,
    domain: "bi",
    title: "Sales & Revenue Performance Dashboard",
    desc: "A dynamic KPI dashboard tracking corporate sales cycles, pipeline health, and regional revenue growth — enabling executive teams to identify bottlenecks and accelerate sales velocity.",
    img: `${BASE}images/sales_dashboard.jpg`,
    fallback: `${BASE}images/pic02.jpg`,
    links: { dashboard: "https://app.powerbi.com", article: "https://medium.com" },
  },
  {
    id: 3,
    domain: "bi",
    title: "Supply Chain & Inventory Optimisation",
    desc: "Engineered an inventory optimisation model using SQL and Python to forecast seasonal demand fluctuations and set safety stock thresholds, reducing warehouse holding costs by 15%.",
    img: `${BASE}images/financial_forecast.jpg`,
    fallback: `${BASE}images/pic03.jpg`,
    links: { dashboard: "https://app.powerbi.com", article: "https://medium.com" },
  },
  // ── Healthcare ─────────────────────────────────────────────────────────
  {
    id: 4,
    domain: "health",
    title: "Massachusetts General Hospital: Data Insights for a Decade",
    desc: "Analysis of MGH data highlighting high readmissions, robust insurance coverage, and clinical gaps to improve care management for chronic and maternal patients.",
    img: `${BASE}images/HEALTHCA.jpeg`,
    fallback: `${BASE}images/pic04.jpg`,
    links: { dashboard: "#", article: "#" },
  },
  {
    id: 5,
    domain: "health",
    title: "Nigeria's Monkeypox Outbreak Analysis (2017–2024)",
    desc: "Epidemiological analysis of Nigeria's Monkeypox outbreak using surveillance data, identifying transmission hotspots, demographic risk profiles, and intervention effectiveness.",
    img: `${BASE}images/FECIM INC.jpeg`,
    fallback: `${BASE}images/pic05.jpg`,
    links: { dashboard: "#", article: "#" },
  },
  {
    id: 6,
    domain: "health",
    title: "COVID-19 Vaccination & Patient Safety Analysis",
    desc: "Assessed COVID-19 vaccination rollout effectiveness and patient safety outcomes across multiple regions, providing evidence-based recommendations for public health campaigns.",
    img: `${BASE}images/FOODMA.jpeg`,
    fallback: `${BASE}images/pic06.jpg`,
    links: { dashboard: "#", article: "#" },
  },
];

const FILTERS = [
  { key: "all",    label: "All Projects" },
  { key: "bi",     label: "Business Intelligence" },
  { key: "health", label: "Healthcare Analytics" },
];

export default function Projects() {
  const [active, setActive] = useState("all");

  const visible = active === "all"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.domain === active);

  return (
    <div className="projects-page">
      {/* ── Page hero ────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
            <div className="section-badge">
              <span className="section-badge-dot" /> Portfolio
            </div>
            <h1 className="section-title">
              Project <span>Showcase</span>
            </h1>
            <p className="section-subtitle">
              A curated collection of data projects across Business Intelligence
              and Healthcare Analytics — each solving a real-world challenge with
              rigorous analysis and compelling visualisation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filter tabs ──────────────────────────── */}
      <div className="projects-filter-bar">
        <div className="container">
          <div className="filter-tabs">
            {FILTERS.map((f) => (
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
                    src={proj.img}
                    alt={proj.title}
                    onError={(e) => { e.target.src = proj.fallback; }}
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
        © 2026 <strong>Oluchukwu Lawrencia Arua</strong>. All rights reserved.
      </footer>
    </div>
  );
}
