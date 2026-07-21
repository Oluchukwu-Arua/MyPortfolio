import React, { useState } from "react";
import { usePortfolioContent } from "../context/PortfolioContentContext.jsx";
import { renderIcon } from "../content/iconLibrary.jsx";

export default function Contact() {
  const { content } = usePortfolioContent();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send — wire to EmailJS / Formspree in production
    setSent(true);
  };

  return (
    <div className="contact-page">
      {/* ── Page hero ────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 640 }}>
            <div className="section-badge">
              <span className="section-badge-dot" /> {content.contact.introBadge}
            </div>
            <h1 className="section-title">
              {content.contact.introTitle.split(" ")[0]} <span>{content.contact.introTitle.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="section-subtitle">{content.contact.introSubtitle}</p>
          </div>
        </div>
      </section>

      {/* ── Contact grid ─────────────────────────── */}
      <div className="contact-grid container">

        {/* Form */}
        <div className="contact-form-card">
          <h2>Send a Message</h2>
          <p>Fill in the form and I'll get back to you within 24 hours.</p>

          {sent ? (
            <div className="success-msg">
              <div style={{ fontSize: "2rem", marginBottom: 12 }}>🎉</div>
              <h4>Message Sent!</h4>
              <p>Thank you for reaching out. I'll respond shortly.</p>
              <button
                style={{ marginTop: 20, padding: "10px 24px", borderRadius: 50, background: "var(--blue)", color: "var(--white)", fontWeight: 700, border: "none", cursor: "pointer" }}
                onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group" style={{ marginTop: 20 }}>
                <label htmlFor="contact-subject">Subject *</label>
                <select
                  id="contact-subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                >
                  <option value="">Select a topic…</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Masterclass Inquiry">Masterclass Inquiry</option>
                  <option value="Consulting Request">Consulting Request</option>
                  <option value="Speaking / Conference">Speaking / Conference</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div className="form-group" style={{ marginTop: 20 }}>
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Tell me about your project or question…"
                  required
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" id="submit-contact-btn" className="form-submit-btn">
                Send Message →
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <aside className="contact-sidebar">
          {/* Info card */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>

            {content.contact.infoItems.map((item) => (
              <div key={item.label} className="contact-info-item">
                <div className="contact-info-icon">{renderIcon(item.label === "Email" ? "message" : item.label === "Phone / WhatsApp" ? "clock" : "research", "contact-info-icon-svg")}</div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value">
                    {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Socials card */}
          <div className="contact-info-card">
            <h3>Follow My Work</h3>
            <div className="social-links-grid">
              {content.contact.socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  id={`social-${s.label.toLowerCase()}`}
                >
                  {renderIcon(s.icon, "social-link-icon")} {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div className="contact-info-card" style={{ background: "var(--navy)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22C55E", display: "inline-block", boxShadow: "0 0 8px #22C55E" }} />
              <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, fontSize: "0.95rem" }}>Currently Available</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.65 }}>
              {content.contact.availabilityBody}
            </p>
          </div>
        </aside>
      </div>

      <footer className="site-footer">
        © 2026 <strong>{content.meta.footerName}</strong>. All rights reserved.
      </footer>
    </div>
  );
}
