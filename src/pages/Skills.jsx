import React from "react";

const skillBars = [
  { name: "Power BI & Tableau", pct: 95 },
  { name: "SQL & Data Engineering", pct: 90 },
  { name: "Clinical Informatics", pct: 88 },
  { name: "Python & Machine Learning", pct: 82 },
  { name: "R Studio & Statistics", pct: 80 },
  { name: "Azure & Cloud Analytics", pct: 75 },
];

const competencies = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>,
    title: "BI Dashboard Development",
    desc: "Designing end-to-end interactive dashboards in Power BI and Tableau that convert complex datasets into executive-ready visual intelligence.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/></svg>,
    title: "Data Engineering & SQL",
    desc: "Building robust data pipelines, warehouses, and transformation layers using advanced SQL, dbt, and ETL best practices.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
    title: "Clinical Data Analysis",
    desc: "Leveraging EHR data, ICD-10 coding, and patient outcome datasets to improve clinical decision-making and hospital performance.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M12 5v14"/><path d="M12 12h6"/><path d="M12 12H6"/></svg>,
    title: "AI & Predictive Analytics",
    desc: "Developing machine learning models for disease prediction, demand forecasting, and anomaly detection using Python and Azure ML.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
    title: "Epidemiology & Research",
    desc: "Conducting population health studies, disease surveillance analysis, and evidence-based research with rigorous statistical methods.",
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: "Executive Communication",
    desc: "Translating complex technical findings into compelling narratives and presentations for C-suite, clinicians, and non-technical stakeholders.",
  },
];

export default function Skills() {
  return (
    <div className="skills-page">
      <div className="page-content">
      {/* ── Intro ──────────────────────────────────── */}
      <section className="skills-intro">
        <div className="container">
          <div className="skills-intro-grid">
            <div className="skills-intro-text">
              <div className="section-badge">
                <span className="section-badge-dot" /> My Expertise
              </div>
              <h1 className="section-title">
                Skills &amp; <span>Competencies</span>
              </h1>
              <p className="section-subtitle">
                A dual-domain analyst with deep roots in both corporate business
                intelligence and healthcare informatics. My toolkit spans the full
                analytics stack — from raw data ingestion to executive dashboards.
              </p>
              <p className="section-subtitle" style={{ marginTop: 8 }}>
                I hold certifications in Power BI, Microsoft Azure, and Clinical
                Data Management, backed by years of hands-on delivery in both sectors.
              </p>
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
                <div className="competency-icon-wrap">{c.icon}</div>
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
            {[
              { title: "Microsoft Power BI Data Analyst", body: "Microsoft Certified — PL-300 · 2023" },
              { title: "Azure Data Fundamentals", body: "Microsoft Certified — DP-900 · 2023" },
              { title: "Google Data Analytics", body: "Google Career Certificate · 2022" },
              { title: "Clinical Data Management", body: "SCDM Certification · 2022" },
              { title: "Epidemiology & Public Health", body: "Coursera / Johns Hopkins University" },
              { title: "Machine Learning Specialisation", body: "DeepLearning.AI · Andrew Ng" },
            ].map((cert) => (
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
        © 2026 <strong>Oluchukwu Lawrencia Arua</strong>. All rights reserved.
      </footer>
    </div>
  );
}
