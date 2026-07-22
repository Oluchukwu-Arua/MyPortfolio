import React from "react";
import { iconOptions } from "../content/iconLibrary.jsx";
import { usePortfolioContent } from "../context/PortfolioContentContext.jsx";
import { resolveMediaUrl } from "../utils/urls.js";

const createProject = () => ({
  id: Date.now(),
  domain: "bi",
  title: "New Project",
  desc: "Add a short summary of the project here.",
  image: "/images/pic01.jpg",
  fallback: "/images/pic01.jpg",
  links: { dashboard: "#", article: "#" },
});

const createTextLink = (label = "New Link", href = "#", icon = "linkedin") => ({ label, href, icon });

const createInfoItem = () => ({ label: "New Item", value: "Edit me", href: "" });

function updateAtIndex(list, index, nextValue) {
  return list.map((item, itemIndex) => (itemIndex === index ? nextValue : item));
}

function SectionShell({ title, description, children, actions }) {
  return (
    <section className="admin-section-card">
      <div className="admin-section-header">
        <div>
          <h3>{title}</h3>
          {description ? <p>{description}</p> : null}
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}

function Field({ label, children, help }) {
  return (
    <label className="admin-field">
      <span>{label}</span>
      {children}
      {help ? <small>{help}</small> : null}
    </label>
  );
}

function TextInput(props) {
  return <input className="admin-input" {...props} />;
}

function TextArea(props) {
  return <textarea className="admin-textarea" {...props} />;
}

function Select(props) {
  return <select className="admin-input" {...props} />;
}

function ImageUploadField({ label, value, onChange, uploadImage, help }) {
  const inputId = React.useId();
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadError, setUploadError] = React.useState("");
  const [previewFailed, setPreviewFailed] = React.useState(false);

  React.useEffect(() => {
    setPreviewFailed(false);
  }, [value]);

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    setIsUploading(true);
    setUploadError("");

    try {
      const uploaded = await uploadImage(file);
      onChange(uploaded.url);
    } catch (error) {
      setUploadError(error.message || "Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="admin-field admin-image-field">
      <span>{label}</span>
      {value && !previewFailed ? (
        <img
          className="admin-image-preview"
          src={resolveMediaUrl(value)}
          alt={`${label} preview`}
          onError={() => setPreviewFailed(true)}
        />
      ) : null}
      <div className="admin-image-controls">
        <TextInput
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="/images/example.jpg or https://..."
        />
        <label className={`btn-outline admin-upload-button${isUploading ? " is-disabled" : ""}`} htmlFor={inputId}>
          {isUploading ? "Uploading..." : "Upload image"}
        </label>
        <input
          id={inputId}
          className="admin-file-input"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif,image/avif"
          disabled={isUploading}
          onChange={handleUpload}
        />
      </div>
      <small>{help || "Upload an image up to 5 MB, or enter an existing path or URL. Save Changes after uploading."}</small>
      {uploadError ? <small className="admin-upload-error">{uploadError}</small> : null}
    </div>
  );
}

export default function Admin() {
  const { content, setContent, persist, refresh, uploadImage, isSaving, error, clearError } = usePortfolioContent();
  const [draft, setDraft] = React.useState(content);
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    setDraft(content);
  }, [content]);

  const updateDraft = React.useCallback((path, value) => {
    setDraft((current) => {
      const next = structuredClone(current);
      let cursor = next;

      for (let index = 0; index < path.length - 1; index += 1) {
        cursor = cursor[path[index]];
      }

      cursor[path[path.length - 1]] = value;
      return next;
    });
  }, []);

  const save = async () => {
    clearError();
    setMessage("");
    const saved = await persist(draft);
    setContent(saved);
    setMessage("Content saved to Cloudflare KV.");
  };

  const resetToSaved = () => {
    setDraft(content);
    setMessage("Draft reverted to the last saved version.");
  };

  const addProject = () => {
    setDraft((current) => ({ ...current, projects: { ...current.projects, projects: [...current.projects.projects, createProject()] } }));
  };

  return (
    <div className="admin-page">
      <header className="admin-hero container">
        <div>
          <div className="section-badge">
            <span className="section-badge-dot" /> Content Dashboard
          </div>
          <h1 className="section-title">Edit your portfolio content</h1>
          <p className="section-subtitle">
            Update the live site content from one place. Every section below maps directly to the public website.
          </p>
        </div>
        <div className="admin-hero-actions">
          <button className="btn-outline" onClick={refresh} type="button">Reload Live Content</button>
          <button className="btn-outline" onClick={resetToSaved} type="button">Reset Draft</button>
          <button className="btn-primary" onClick={save} type="button" disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </header>

      <div className="container admin-notice-row">
        {error ? <div className="admin-banner admin-banner-warn">{error}</div> : null}
        {message ? <div className="admin-banner admin-banner-success">{message}</div> : null}
      </div>

      <div className="container admin-grid">
        <SectionShell title="Brand and Hero" description="Main name, headline, call to actions, and hero image.">
          <div className="admin-two-col">
            <Field label="Brand name"><TextInput value={draft.meta.brandName} onChange={(e) => updateDraft(["meta", "brandName"], e.target.value)} /></Field>
            <Field label="Footer name"><TextInput value={draft.meta.footerName} onChange={(e) => updateDraft(["meta", "footerName"], e.target.value)} /></Field>
            <Field label="Badge"><TextInput value={draft.home.hero.badge} onChange={(e) => updateDraft(["home", "hero", "badge"], e.target.value)} /></Field>
            <Field label="Hero line 1"><TextInput value={draft.home.hero.titleLine1} onChange={(e) => updateDraft(["home", "hero", "titleLine1"], e.target.value)} /></Field>
            <Field label="Hero highlight"><TextInput value={draft.home.hero.titleHighlight} onChange={(e) => updateDraft(["home", "hero", "titleHighlight"], e.target.value)} /></Field>
            <Field label="Hero description"><TextArea rows={5} value={draft.home.hero.description} onChange={(e) => updateDraft(["home", "hero", "description"], e.target.value)} /></Field>
            <Field label="Primary CTA label"><TextInput value={draft.home.hero.primaryCtaLabel} onChange={(e) => updateDraft(["home", "hero", "primaryCtaLabel"], e.target.value)} /></Field>
            <Field label="Primary CTA link"><TextInput value={draft.home.hero.primaryCtaHref} onChange={(e) => updateDraft(["home", "hero", "primaryCtaHref"], e.target.value)} /></Field>
            <Field label="Secondary CTA label"><TextInput value={draft.home.hero.secondaryCtaLabel} onChange={(e) => updateDraft(["home", "hero", "secondaryCtaLabel"], e.target.value)} /></Field>
            <Field label="Secondary CTA link"><TextInput value={draft.home.hero.secondaryCtaHref} onChange={(e) => updateDraft(["home", "hero", "secondaryCtaHref"], e.target.value)} /></Field>
            <ImageUploadField label="Hero image" value={draft.home.hero.image.src} onChange={(value) => updateDraft(["home", "hero", "image", "src"], value)} uploadImage={uploadImage} />
            <ImageUploadField label="Fallback image" value={draft.home.hero.image.fallback} onChange={(value) => updateDraft(["home", "hero", "image", "fallback"], value)} uploadImage={uploadImage} />
            <Field label="Image alt"><TextInput value={draft.home.hero.image.alt} onChange={(e) => updateDraft(["home", "hero", "image", "alt"], e.target.value)} /></Field>
          </div>

          <div className="admin-list-block">
            <div className="admin-list-header">
              <strong>Hero stats</strong>
            </div>
            {draft.home.hero.stats.map((stat, index) => (
              <div className="admin-list-row" key={`${stat.label}-${index}`}>
                <TextInput value={stat.value} onChange={(e) => updateDraft(["home", "hero", "stats"], updateAtIndex(draft.home.hero.stats, index, { ...stat, value: e.target.value }))} />
                <TextInput value={stat.label} onChange={(e) => updateDraft(["home", "hero", "stats"], updateAtIndex(draft.home.hero.stats, index, { ...stat, label: e.target.value }))} />
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell title="Home Content" description="Social links, expertise cards, and tools list.">
          <div className="admin-list-block">
            <div className="admin-list-header">
              <strong>Social links</strong>
              <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["home", "socials"], [...draft.home.socials, createTextLink()])}>Add link</button>
            </div>
            {draft.home.socials.map((social, index) => (
              <div className="admin-list-row admin-stack-row" key={`${social.label}-${index}`}>
                <TextInput value={social.label} onChange={(e) => updateDraft(["home", "socials"], updateAtIndex(draft.home.socials, index, { ...social, label: e.target.value }))} />
                <TextInput value={social.href} onChange={(e) => updateDraft(["home", "socials"], updateAtIndex(draft.home.socials, index, { ...social, href: e.target.value }))} />
                <Select value={social.icon} onChange={(e) => updateDraft(["home", "socials"], updateAtIndex(draft.home.socials, index, { ...social, icon: e.target.value }))}>
                  {iconOptions.filter((option) => ["linkedin", "github", "medium", "twitter"].includes(option.value)).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>
                <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["home", "socials"], draft.home.socials.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>
              </div>
            ))}
          </div>

          <div className="admin-list-block">
            <div className="admin-list-header">
              <strong>Expertise cards</strong>
              <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["home", "expertise"], [...draft.home.expertise, { icon: "growth", title: "New expertise", desc: "Describe the capability here." }])}>Add card</button>
            </div>
            {draft.home.expertise.map((item, index) => (
              <div className="admin-card-editor" key={`${item.title}-${index}`}>
                <div className="admin-list-row admin-stack-row">
                  <Select value={item.icon} onChange={(e) => updateDraft(["home", "expertise"], updateAtIndex(draft.home.expertise, index, { ...item, icon: e.target.value }))}>
                    {iconOptions.filter((option) => ["growth", "heart", "clock"].includes(option.value)).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </Select>
                  <TextInput value={item.title} onChange={(e) => updateDraft(["home", "expertise"], updateAtIndex(draft.home.expertise, index, { ...item, title: e.target.value }))} />
                  <TextArea rows={3} value={item.desc} onChange={(e) => updateDraft(["home", "expertise"], updateAtIndex(draft.home.expertise, index, { ...item, desc: e.target.value }))} />
                  <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["home", "expertise"], draft.home.expertise.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <Field label="Tools and technologies" help="Comma separate the list items.">
            <TextArea rows={4} value={draft.home.tools.join(", ")} onChange={(e) => updateDraft(["home", "tools"], e.target.value.split(",").map((item) => item.trim()).filter(Boolean))} />
          </Field>
        </SectionShell>

        <SectionShell title="Skills Section" description="The skills bar values, competencies, and certifications.">
          <div className="admin-list-block">
            <div className="admin-list-header">
              <strong>Skill bars</strong>
              <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["skills", "skillBars"], [...draft.skills.skillBars, { name: "New skill", pct: 50 }])}>Add skill</button>
            </div>
            {draft.skills.skillBars.map((skill, index) => (
              <div className="admin-list-row admin-stack-row" key={`${skill.name}-${index}`}>
                <TextInput value={skill.name} onChange={(e) => updateDraft(["skills", "skillBars"], updateAtIndex(draft.skills.skillBars, index, { ...skill, name: e.target.value }))} />
                <TextInput type="number" min="0" max="100" value={skill.pct} onChange={(e) => updateDraft(["skills", "skillBars"], updateAtIndex(draft.skills.skillBars, index, { ...skill, pct: Number(e.target.value) }))} />
                <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["skills", "skillBars"], draft.skills.skillBars.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>
              </div>
            ))}
          </div>

          <div className="admin-list-block">
            <div className="admin-list-header">
              <strong>Competencies</strong>
              <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["skills", "competencies"], [...draft.skills.competencies, { icon: "growth", title: "New competency", desc: "Describe the capability here." }])}>Add competency</button>
            </div>
            {draft.skills.competencies.map((item, index) => (
              <div className="admin-card-editor" key={`${item.title}-${index}`}>
                <div className="admin-list-row admin-stack-row">
                  <Select value={item.icon} onChange={(e) => updateDraft(["skills", "competencies"], updateAtIndex(draft.skills.competencies, index, { ...item, icon: e.target.value }))}>
                    {iconOptions.filter((option) => ["growth", "heart", "clock", "database", "sparkles", "research", "message"].includes(option.value)).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </Select>
                  <TextInput value={item.title} onChange={(e) => updateDraft(["skills", "competencies"], updateAtIndex(draft.skills.competencies, index, { ...item, title: e.target.value }))} />
                  <TextArea rows={3} value={item.desc} onChange={(e) => updateDraft(["skills", "competencies"], updateAtIndex(draft.skills.competencies, index, { ...item, desc: e.target.value }))} />
                  <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["skills", "competencies"], draft.skills.competencies.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="admin-list-block">
            <div className="admin-list-header">
              <strong>Certifications</strong>
              <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["skills", "certifications"], [...draft.skills.certifications, { title: "New certification", body: "Certification details." }])}>Add certification</button>
            </div>
            {draft.skills.certifications.map((cert, index) => (
              <div className="admin-list-row admin-stack-row" key={`${cert.title}-${index}`}>
                <TextInput value={cert.title} onChange={(e) => updateDraft(["skills", "certifications"], updateAtIndex(draft.skills.certifications, index, { ...cert, title: e.target.value }))} />
                <TextInput value={cert.body} onChange={(e) => updateDraft(["skills", "certifications"], updateAtIndex(draft.skills.certifications, index, { ...cert, body: e.target.value }))} />
                <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["skills", "certifications"], draft.skills.certifications.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>
              </div>
            ))}
          </div>
        </SectionShell>

        <SectionShell title="Projects Section" description="Add, remove, and update the portfolio projects and their links." actions={<button className="btn-outline admin-inline-button" type="button" onClick={addProject}>Add project</button>}>
          {draft.projects.projects.map((project, index) => (
            <div className="admin-project-card" key={project.id}>
              <div className="admin-list-header">
                <strong>Project {index + 1}</strong>
                <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["projects", "projects"], draft.projects.projects.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>
              </div>
              <div className="admin-two-col">
                <Field label="Title"><TextInput value={project.title} onChange={(e) => updateDraft(["projects", "projects"], updateAtIndex(draft.projects.projects, index, { ...project, title: e.target.value }))} /></Field>
                <Field label="Domain">
                  <Select value={project.domain} onChange={(e) => updateDraft(["projects", "projects"], updateAtIndex(draft.projects.projects, index, { ...project, domain: e.target.value }))}>
                    <option value="bi">Business Intelligence</option>
                    <option value="health">Healthcare</option>
                  </Select>
                </Field>
                <Field label="Description"><TextArea rows={5} value={project.desc} onChange={(e) => updateDraft(["projects", "projects"], updateAtIndex(draft.projects.projects, index, { ...project, desc: e.target.value }))} /></Field>
                <ImageUploadField label="Image" value={project.image} onChange={(value) => updateDraft(["projects", "projects"], updateAtIndex(draft.projects.projects, index, { ...project, image: value }))} uploadImage={uploadImage} />
                <ImageUploadField label="Fallback image" value={project.fallback} onChange={(value) => updateDraft(["projects", "projects"], updateAtIndex(draft.projects.projects, index, { ...project, fallback: value }))} uploadImage={uploadImage} />
                <Field label="Dashboard link"><TextInput value={project.links.dashboard} onChange={(e) => updateDraft(["projects", "projects"], updateAtIndex(draft.projects.projects, index, { ...project, links: { ...project.links, dashboard: e.target.value } }))} /></Field>
                <Field label="Article link"><TextInput value={project.links.article} onChange={(e) => updateDraft(["projects", "projects"], updateAtIndex(draft.projects.projects, index, { ...project, links: { ...project.links, article: e.target.value } }))} /></Field>
              </div>
            </div>
          ))}
        </SectionShell>

        <SectionShell title="Contact Section" description="Contact details, social links, and availability copy.">
          <div className="admin-list-block">
            <div className="admin-list-header">
              <strong>Contact information</strong>
              <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["contact", "infoItems"], [...draft.contact.infoItems, createInfoItem()])}>Add item</button>
            </div>
            {draft.contact.infoItems.map((item, index) => (
              <div className="admin-list-row admin-stack-row" key={`${item.label}-${index}`}>
                <TextInput value={item.label} onChange={(e) => updateDraft(["contact", "infoItems"], updateAtIndex(draft.contact.infoItems, index, { ...item, label: e.target.value }))} />
                <TextInput value={item.value} onChange={(e) => updateDraft(["contact", "infoItems"], updateAtIndex(draft.contact.infoItems, index, { ...item, value: e.target.value }))} />
                <TextInput value={item.href} onChange={(e) => updateDraft(["contact", "infoItems"], updateAtIndex(draft.contact.infoItems, index, { ...item, href: e.target.value }))} />
                <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["contact", "infoItems"], draft.contact.infoItems.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>
              </div>
            ))}
          </div>

          <div className="admin-list-block">
            <div className="admin-list-header">
              <strong>Social links</strong>
              <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["contact", "socialLinks"], [...draft.contact.socialLinks, createTextLink()])}>Add link</button>
            </div>
            {draft.contact.socialLinks.map((social, index) => (
              <div className="admin-list-row admin-stack-row" key={`${social.label}-${index}`}>
                <TextInput value={social.label} onChange={(e) => updateDraft(["contact", "socialLinks"], updateAtIndex(draft.contact.socialLinks, index, { ...social, label: e.target.value }))} />
                <TextInput value={social.href} onChange={(e) => updateDraft(["contact", "socialLinks"], updateAtIndex(draft.contact.socialLinks, index, { ...social, href: e.target.value }))} />
                <Select value={social.icon} onChange={(e) => updateDraft(["contact", "socialLinks"], updateAtIndex(draft.contact.socialLinks, index, { ...social, icon: e.target.value }))}>
                  {iconOptions.filter((option) => ["linkedin", "github", "medium", "twitter"].includes(option.value)).map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                </Select>
                <button className="btn-outline admin-inline-button" type="button" onClick={() => updateDraft(["contact", "socialLinks"], draft.contact.socialLinks.filter((_, itemIndex) => itemIndex !== index))}>Remove</button>
              </div>
            ))}
          </div>

          <div className="admin-two-col">
            <Field label="Availability title"><TextInput value={draft.contact.availabilityTitle} onChange={(e) => updateDraft(["contact", "availabilityTitle"], e.target.value)} /></Field>
            <Field label="Availability body"><TextArea rows={4} value={draft.contact.availabilityBody} onChange={(e) => updateDraft(["contact", "availabilityBody"], e.target.value)} /></Field>
            <Field label="Intro subtitle"><TextArea rows={4} value={draft.contact.introSubtitle} onChange={(e) => updateDraft(["contact", "introSubtitle"], e.target.value)} /></Field>
          </div>
        </SectionShell>
      </div>
    </div>
  );
}
