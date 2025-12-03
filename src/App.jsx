import React from "react";
import "./assets/css/App.css";
import Header from "./header";
import { FiDatabase, FiUsers, FiBarChart2 } from "react-icons/fi";
import Footer from "./footer";
import RecentProjects from "./recent-projects";

export default function App() {
  return (
    <>
      <Header />


        <section className="hero-section">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm Oluchukwu Arua</h1>
        <p className="hero-subtitle">
          Your Favorite Data Analyst, with passion for transforming complex
          datasets into clear and concise actionable insights. I am dedicated to
          helping businesses make smarter, data-driven decisions. By utilizing
          the power of data analysis and visualization tools like Excel, Power
          BI, SQL and Python, I turn complex data into clear insights that
          support strategic growth and informed decision-making. Let's unlock
          the power of data together!
        </p>

        <button className="hero-btn">Learn more about me</button>
      </div>
      </section>

      <section id="work" className="skills-section">
  <div className="skills-container">
    <header className="skills-header">
      <h2>Skills and Experiences</h2>
    </header>

    <div className="skills-grid">
      <div className="skill-card">
        <span className="skill-icon">
          <FiDatabase />
        </span>
        <h3>Analytical Intelligence (Excel, Power BI, SQL)</h3>
        <p>
          I analyze data to extract insights that guide business decisions using
          Power BI, Excel and SQL. I also query and manage databases.
        </p>
      </div>
      <div className="skill-card">
        <span className="skill-icon">
          <FiUsers />
        </span>
        <h3>Analytical Soft Skills</h3>
        <p>
          I apply critical thinking to identify trends, solve complex problems,
          and communicate insights effectively across teams and stakeholders.
        </p>
      </div>
    </div>
    <div className="skf-section">
      <div className="skill-card-full">
        <span className="skill-icon">
          <FiBarChart2 />
        </span>
        <h3>Advanced Visualization Techniques (Power BI, Excel)</h3>
        <p>
          I transform raw data into interactive dashboards using Power BI and
          Excel, making insights easy to understand for decision-making.
        </p>
      </div>
    </div>

    <footer className="skills-footer">
      <a href="#portfolio" className="skills-btn">
        See more details
      </a>
    </footer>
  </div>
</section>

      <RecentProjects />
      

      <Footer />
    </>
  );
}
