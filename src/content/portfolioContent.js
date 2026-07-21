export const defaultPortfolioContent = {
  meta: {
    brandName: "Arua Oluchukwu",
    footerName: "Oluchukwu Lawrencia Arua",
  },
  home: {
    hero: {
      badge: "Data Analytics Consultant · AI Engineer",
      titleLine1: "Oluchukwu",
      titleHighlight: "Lawrencia Arua",
      description:
        "Transforming complex data — business and clinical alike — into clear, actionable intelligence. I bridge Business Intelligence and Healthcare Analytics to empower smarter decisions at every level.",
      primaryCtaLabel: "View My Work",
      primaryCtaHref: "/projects",
      secondaryCtaLabel: "Get in Touch",
      secondaryCtaHref: "/contact",
      image: {
        src: "/images/annie.jpg",
        fallback: "/images/Oluchi-main-pic.jpg",
        alt: "Daberechi Annie Nnamani",
      },
      stats: [
        { value: "5+", label: "Years Exp." },
        { value: "20+", label: "Projects" },
        { value: "2", label: "Domains" },
      ],
    },
    socials: [
      {
        label: "Twitter",
        href: "https://x.com",
        icon: "twitter",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com",
        icon: "linkedin",
      },
      {
        label: "GitHub",
        href: "https://github.com",
        icon: "github",
      },
      {
        label: "Medium",
        href: "https://medium.com",
        icon: "medium",
      },
    ],
    expertise: [
      {
        icon: "growth",
        title: "Business Intelligence",
        desc: "Transforming raw business data into strategic insights using Power BI, SQL, and advanced analytics to drive measurable growth.",
      },
      {
        icon: "heart",
        title: "Healthcare Analytics",
        desc: "Applying clinical informatics and epidemiology to analyse patient outcomes, disease patterns, and hospital performance metrics.",
      },
      {
        icon: "clock",
        title: "AI & Predictive Modelling",
        desc: "Building machine learning models and AI-driven forecasting pipelines that predict trends before they happen.",
      },
    ],
    tools: [
      "SQL",
      "Power BI",
      "Tableau",
      "Python",
      "R Studio",
      "Excel",
      "Machine Learning",
      "EHR Systems",
      "SPSS",
      "DAX",
      "Data Warehousing",
      "Azure",
      "Clinical Informatics",
      "Epidemiology",
    ],
    cta: {
      badge: "Let's Collaborate",
      title: "Ready to turn your data into decisions?",
      description:
        "Whether it's a business dashboard, a clinical study, or an AI model — let's build something impactful together.",
      primaryLabel: "Start a Conversation",
      primaryHref: "/contact",
      secondaryLabel: "Explore Projects",
      secondaryHref: "/projects",
    },
  },
  skills: {
    introBadge: "My Expertise",
    introTitle: "Skills & Competencies",
    introSubtitle:
      "A dual-domain analyst with deep roots in both corporate business intelligence and healthcare informatics. My toolkit spans the full analytics stack — from raw data ingestion to executive dashboards.",
    introSubtitleSecondary:
      "I hold certifications in Power BI, Microsoft Azure, and Clinical Data Management, backed by years of hands-on delivery in both sectors.",
    skillBars: [
      { name: "Power BI & Tableau", pct: 95 },
      { name: "SQL & Data Engineering", pct: 90 },
      { name: "Clinical Informatics", pct: 88 },
      { name: "Python & Machine Learning", pct: 82 },
      { name: "R Studio & Statistics", pct: 80 },
      { name: "Azure & Cloud Analytics", pct: 75 },
    ],
    competencies: [
      {
        icon: "growth",
        title: "BI Dashboard Development",
        desc: "Designing end-to-end interactive dashboards in Power BI and Tableau that convert complex datasets into executive-ready visual intelligence.",
      },
      {
        icon: "database",
        title: "Data Engineering & SQL",
        desc: "Building robust data pipelines, warehouses, and transformation layers using advanced SQL, dbt, and ETL best practices.",
      },
      {
        icon: "heart",
        title: "Clinical Data Analysis",
        desc: "Leveraging EHR data, ICD-10 coding, and patient outcome datasets to improve clinical decision-making and hospital performance.",
      },
      {
        icon: "sparkles",
        title: "AI & Predictive Analytics",
        desc: "Developing machine learning models for disease prediction, demand forecasting, and anomaly detection using Python and Azure ML.",
      },
      {
        icon: "research",
        title: "Epidemiology & Research",
        desc: "Conducting population health studies, disease surveillance analysis, and evidence-based research with rigorous statistical methods.",
      },
      {
        icon: "message",
        title: "Executive Communication",
        desc: "Translating complex technical findings into compelling narratives and presentations for C-suite, clinicians, and non-technical stakeholders.",
      },
    ],
    certifications: [
      { title: "Microsoft Power BI Data Analyst", body: "Microsoft Certified — PL-300 · 2023" },
      { title: "Azure Data Fundamentals", body: "Microsoft Certified — DP-900 · 2023" },
      { title: "Google Data Analytics", body: "Google Career Certificate · 2022" },
      { title: "Clinical Data Management", body: "SCDM Certification · 2022" },
      { title: "Epidemiology & Public Health", body: "Coursera / Johns Hopkins University" },
      { title: "Machine Learning Specialisation", body: "DeepLearning.AI · Andrew Ng" },
    ],
  },
  projects: {
    introBadge: "Portfolio",
    introTitle: "Project Showcase",
    introSubtitle:
      "A curated collection of data projects across Business Intelligence and Healthcare Analytics — each solving a real-world challenge with rigorous analysis and compelling visualisation.",
    filters: [
      { key: "all", label: "All Projects" },
      { key: "bi", label: "Business Intelligence" },
      { key: "health", label: "Healthcare Analytics" },
    ],
    projects: [
      {
        id: 1,
        domain: "bi",
        title: "AdventureWorks Data Analysis",
        desc: "Comprehensive analysis of Adventure Works sales data to identify key performance trends, top-selling customer segments, and high-margin products — directly supporting data-driven retail decision-making.",
        image: "/images/adventureworks.jpg",
        fallback: "/images/pic01.jpg",
        links: { dashboard: "https://app.powerbi.com", article: "https://medium.com" },
      },
      {
        id: 2,
        domain: "bi",
        title: "Sales & Revenue Performance Dashboard",
        desc: "A dynamic KPI dashboard tracking corporate sales cycles, pipeline health, and regional revenue growth — enabling executive teams to identify bottlenecks and accelerate sales velocity.",
        image: "/images/sales_dashboard.jpg",
        fallback: "/images/pic02.jpg",
        links: { dashboard: "https://app.powerbi.com", article: "https://medium.com" },
      },
      {
        id: 3,
        domain: "bi",
        title: "Supply Chain & Inventory Optimisation",
        desc: "Engineered an inventory optimisation model using SQL and Python to forecast seasonal demand fluctuations and set safety stock thresholds, reducing warehouse holding costs by 15%.",
        image: "/images/financial_forecast.jpg",
        fallback: "/images/pic03.jpg",
        links: { dashboard: "https://app.powerbi.com", article: "https://medium.com" },
      },
      {
        id: 4,
        domain: "health",
        title: "Massachusetts General Hospital: Data Insights for a Decade",
        desc: "Analysis of MGH data highlighting high readmissions, robust insurance coverage, and clinical gaps to improve care management for chronic and maternal patients.",
        image: "/images/HEALTHCA.jpeg",
        fallback: "/images/pic04.jpg",
        links: { dashboard: "#", article: "#" },
      },
      {
        id: 5,
        domain: "health",
        title: "Nigeria's Monkeypox Outbreak Analysis (2017–2024)",
        desc: "Epidemiological analysis of Nigeria's Monkeypox outbreak using surveillance data, identifying transmission hotspots, demographic risk profiles, and intervention effectiveness.",
        image: "/images/FECIM INC.jpeg",
        fallback: "/images/pic05.jpg",
        links: { dashboard: "#", article: "#" },
      },
      {
        id: 6,
        domain: "health",
        title: "COVID-19 Vaccination & Patient Safety Analysis",
        desc: "Assessed COVID-19 vaccination rollout effectiveness and patient safety outcomes across multiple regions, providing evidence-based recommendations for public health campaigns.",
        image: "/images/FOODMA.jpeg",
        fallback: "/images/pic06.jpg",
        links: { dashboard: "#", article: "#" },
      },
    ],
  },
  contact: {
    introBadge: "Get In Touch",
    introTitle: "Let's Connect",
    introSubtitle:
      "Whether you have a data project in mind, want to discuss a collaboration, or are interested in the analytics masterclass — I'd love to hear from you.",
    infoItems: [
      {
        label: "Email",
        value: "oluchukwu.lawrencia@gmail.com",
        href: "mailto:oluchukwu.lawrencia@gmail.com",
      },
      {
        label: "Phone / WhatsApp",
        value: "+234 800 000 0000",
        href: "tel:+2348000000000",
      },
      {
        label: "Location",
        value: "Lagos, Nigeria · Available Remotely",
        href: "",
      },
    ],
    socialLinks: [
      { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
      { label: "GitHub", href: "https://github.com", icon: "github" },
      { label: "Medium", href: "https://medium.com", icon: "medium" },
      { label: "Twitter", href: "https://x.com", icon: "twitter" },
    ],
    availabilityTitle: "Currently Available",
    availabilityBody:
      "Open to freelance projects, consulting engagements, and full-time opportunities in BI and Healthcare Analytics.",
    formNote: "Fill in the form and I'll get back to you within 24 hours.",
    formSuccessTitle: "Message Sent!",
    formSuccessBody: "Thank you for reaching out. I'll respond shortly.",
  },
};
