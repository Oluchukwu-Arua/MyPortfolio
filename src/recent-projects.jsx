import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/css/recentprojects.css";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { recentProjects } from "./projects";


const RecentProjects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const openModal = (projectIndex, mediaIndex = 0) => {
    setActiveProjectIndex(projectIndex);
    setActiveMediaIndex(mediaIndex);
  };

  const closeModal = () => {
    setActiveProjectIndex(null);
    setActiveMediaIndex(0);
  };

  const nextMedia = () => {
    const project = recentProjects[activeProjectIndex];
    const totalMedia = project.images.length + (project.video ? 1 : 0);
    setActiveMediaIndex((prev) => (prev + 1) % totalMedia);
  };

  const prevMedia = () => {
    const project = recentProjects[activeProjectIndex];
    const totalMedia = project.images.length + (project.video ? 1 : 0);
    setActiveMediaIndex((prev) => (prev - 1 + totalMedia) % totalMedia);
  };

  return (
    <section className="recent-projects" id="projects">
      <h2 className="projects-title" data-aos="fade-up">
        Recent Projects
      </h2>

      {/* ====== PROJECT GRID ====== */}
      <div className="projects-container">
        {recentProjects.map((project, projectIndex) => (
          <div
          key={project.id}
          className={`project-card ${project.size}`}
          data-aos="fade-up"
          >
        <div className="project-collage">
            {project.video && (
              <div
                className="media-wrapper video collage-3"
                onClick={() => openModal(projectIndex, project.images.length)}
              >
                <video
                  src={project.video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="media-element"
                />
              </div>
            )}
        {project.images.slice(0, 3).map((img, imgIndex) => (
          <div
            key={imgIndex}
            className={`media-wrapper collage-${imgIndex + 1}`}
            onClick={() => openModal(projectIndex, imgIndex)}
          >
            <img
              src={img}
              alt={`${project.title} ${imgIndex + 1}`}
              className="media-element"
            />
          </div>
  ))}

  </div>
        <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-container" data-aos="fade-up">
        <Link to="/skills" className="view-all-btn">
          View All Projects
        </Link>
      </div>

      {activeProjectIndex !== null && (
  <div className="project-modal" onClick={closeModal}>
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) nextMedia();
        if (touchEndX - touchStartX > 50) prevMedia();
      }}
    >
      <button className="modal-close" onClick={closeModal}>
        <X size={20} />
      </button>

      <h3>{recentProjects[activeProjectIndex].title}</h3>

      {(() => {
        const project = recentProjects[activeProjectIndex];
        const totalImages = project.images.length;
        const isVideo = project.video && activeMediaIndex === totalImages;

        return isVideo ? (
          <video
            src={project.video}
            controls
            autoPlay
            loop
            className="modal-media"
          />
        ) : (
          <img
            src={project.images[activeMediaIndex]}
            alt={project.title}
            className="modal-media"
          />
        );
      })()}

      <p>{recentProjects[activeProjectIndex].description}</p>

      <div className="modal-dots">
        {(() => {
          const project = recentProjects[activeProjectIndex];
          const totalMedia = project.images.length + (project.video ? 1 : 0);
          return Array.from({ length: totalMedia }).map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeMediaIndex ? "active" : ""}`}
              onClick={() => setActiveMediaIndex(i)}
            />
          ));
        })()}
      </div>
    </div>
  </div>
)}


    </section>
  );
};

export default RecentProjects;
