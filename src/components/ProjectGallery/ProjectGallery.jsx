import React from "react";
import "./ProjectGallery.css";

// Predefined list of tags and their colors
const tagColorMap = {
  "React": "#ffcbe1", // pink
  "JavaScript": "#d6e5bd", // green
  "CSS": "#f9e1a8", // yellow
  "Python": "#bcd8ec", // blue
  "Flask": "#dcccec", // purple
  "Figma": "#c0f3ea", // teal
};

// Fallback color for tags not in the map
const defaultTagColor = "#d6d6d6";

const getTagColor = (tag) => tagColorMap[tag] || defaultTagColor;

export default function ProjectGallery({ title, projects }) {
  return (
    <section className="gallery-section">
      {title && <h2 className="gallery-title">{title}</h2>}

      <div className="gallery-grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              {project.description && (
                <div className="card-image-overlay">
                  <p>{project.description}</p>
                </div>
              )}
            </div>

            <div className="card-content">
              <h3>{project.title}</h3>
              {project.date && <p className="card-date">{project.date}</p>}

              {project.tags && (
                <div className="card-tags">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="tag"
                      style={{ backgroundColor: getTagColor(tag) }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
