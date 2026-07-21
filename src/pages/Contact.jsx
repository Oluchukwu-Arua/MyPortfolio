import React, { useState } from "react";

export default function Contact() {
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
              <span className="section-badge-dot" /> Get In Touch
            </div>
            <h1 className="section-title">
              Let's <span>Connect</span>
            </h1>
            <p className="section-subtitle">
              Whether you have a data project in mind, want to discuss a collaboration,
              or are interested in the analytics masterclass — I'd love to hear from you.
            </p>
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

            {[
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                label: "Email",
                value: <a href="mailto:oluchukwu.lawrencia@gmail.com">oluchukwu.lawrencia@gmail.com</a>,
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l.91-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
                label: "Phone / WhatsApp",
                value: "+234 800 000 0000",
              },
              {
                icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                label: "Location",
                value: "Lagos, Nigeria · Available Remotely",
              },
            ].map((item) => (
              <div key={item.label} className="contact-info-item">
                <div className="contact-info-icon">{item.icon}</div>
                <div>
                  <div className="contact-info-label">{item.label}</div>
                  <div className="contact-info-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Socials card */}
          <div className="contact-info-card">
            <h3>Follow My Work</h3>
            <div className="social-links-grid">
              {[
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
                {
                  label: "Twitter",
                  href: "https://x.com",
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-btn"
                  id={`social-${s.label.toLowerCase()}`}
                >
                  {s.icon} {s.label}
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
              Open to freelance projects, consulting engagements, and full-time opportunities in BI and Healthcare Analytics.
            </p>
          </div>
        </aside>
      </div>

      <footer className="site-footer">
        © 2026 <strong>Oluchukwu Lawrencia Arua</strong>. All rights reserved.
      </footer>
    </div>
  );
}
