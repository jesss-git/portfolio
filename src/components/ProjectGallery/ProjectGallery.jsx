import React from "react";
import "./ProjectGallery.css";

const tagColorMap = {
  "Illustrator": "#feeabc", // orange
  "After Effects": "#dcccec", // purple
  "JavaScript": "#fef9d6", // yellow

  "React": "#ffcbe1", // pink
  "Flask": "#d6e5bd", // green
  "CSS": "#f9e1a8", //
  "Python": "#bcd8ec", // blue
  "Figma": "#c0f3ea", // teal
};

const defaultTagColor = "#d6d6d6";
const getTagColor = (tag) => tagColorMap[tag] || defaultTagColor;

export default function ProjectGallery({ title, projects }) {
  // Detect window width for responsive overlay logic
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth > 800;

  return (
    <section className="gallery-section">
      {title && <h2 className="gallery-title">{title}</h2>}

      <div className="gallery-grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              {/* Only render overlay for desktop */}
              {isDesktop && project.description && (
                <div className="card-image-overlay">
                  <p>{project.description}</p>
                </div>
              )}
            </div>

            <div className="card-content">
              <h3>{project.title}</h3>
              {project.date && <p className="card-date">{project.date}</p>}
              {project.description && !isDesktop && (
                <p className="card-description">{project.description}</p>
              )}
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
