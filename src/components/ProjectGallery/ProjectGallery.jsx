import React from "react";
import "./ProjectGallery.css";

const tagColorMap = {
  "Illustrator": "#feeabc", // orange
  "After Effects": "#dcccec", // purple
  "JavaScript": "#fdf4c7", // yellow
  "Python": "#dcf0f7", // blue

  "React": "#ffcbe1", // pink
  "Flask": "#d6e5bd", // green
  "CSS": "#f9e1a8", //
  "Kotlin": "#bcd8ec", // blue
  "Figma": "#c0f3ea", // teal
};

const defaultTagColor = "#d6d6d6";
const getTagColor = (tag) => tagColorMap[tag] || defaultTagColor;

export default function ProjectGallery({ title, projects }) {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  const [selectedProject, setSelectedProject] = React.useState(null); // 👈 added

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth > 800;

  return (
    <section className="gallery-section">
      {title && <h2 className="gallery-title">{title}</h2>}

      {/* ===========================
          Gallery Grid
      ============================ */}
      <div className="gallery-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card"
            onClick={() => setSelectedProject(project)}
          >
            <div className="card-image">
              <img src={project.image} alt={project.title} />
              <div className="card-image-overlay">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="card-date">{project.date}</p>
              <p className="card-description">{project.description}</p>

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

      {/* ===========================
          Modal Popup
      ============================ */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Sticky Header */}
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <div className="modal-meta">
                <p className="modal-date">{selectedProject.date}</p>
                <div className="modal-tags">
                  {selectedProject.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="tag"
                      style={{ backgroundColor: getTagColor(tag) }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="modal-body">
              {/* <p className="modal-description">{selectedProject.description}</p> */}

              {/* Multiple sections */}
              {selectedProject.sections?.map((section, idx) => (
                <div key={idx} className="modal-section">
                  {section.heading && (
                    <h3 className="modal-section-heading">{section.heading}</h3>
                  )}

                  {section.text?.map((paragraph, i) => {
                    // Detect links in paragraph text
                    const urlRegex = /(https?:\/\/[^\s]+)/g;
                    const parts = paragraph.split(urlRegex);

                    return (
                      <p key={i} className="modal-section-text">
                        {parts.map((part, idx) =>
                          part.match(urlRegex) ? (
                            <a
                              key={idx}
                              href={part}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="modal-link-inline"
                            >
                              {part}
                            </a>
                          ) : (
                            part
                          )
                        )}
                      </p>
                    );
                  })}

                  {section.images && (
                    <div className="modal-images">
                      {section.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Process ${i}`}
                          className="modal-process-img"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  className="modal-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </a>
              )}
            </div>

            {/* Close button */}
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>
          </div>
        </div>
      )}


    </section>
  );
}

