import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="hero-title">Hi, I’m Jessica</h1>
          <p className="hero-subtitle">
            Designer • Developer • Visual Creator
          </p>
        </div>
      </section>

      {/* Mini Bio */}
      <section className="bio">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I’m a multidisciplinary creative who bridges design and development
            to bring ideas to life. Whether it’s intuitive UX, striking graphics,
            or interactive code, I thrive on building impactful experiences.
          </p>
        </div>
      </section>

      {/* Quick Links to Disciplines */}
      <section className="disciplines">
        <h2>Explore My Work</h2>
        <div className="discipline-grid">
          <a href="/ux-ui" className="discipline-card">UX / UI</a>
          <a href="/graphics" className="discipline-card">Graphics</a>
          <a href="/gallery" className="discipline-card">Gallery</a>
          <a href="/code" className="discipline-card">Code</a>
        </div>
      </section>

      <section className="explore">
        <h2>Explore My Work</h2>
        <div className="discipline-grid">
          {/* 4 disciplines */}
        </div>

        <h2 className="sub-heading">Featured Projects</h2>
        <div className="project-grid">
          {/* project cards */}
        </div>
      </section>


      {/* Featured Work */}
      <section className="projects">
        <div className="container">
          <h2>Favourite Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <h3>Portfolio Redesign</h3>
              <p>A fresh take on my personal portfolio showcasing design + dev.</p>
            </div>
            <div className="project-card">
              <h3>Brand Identity</h3>
              <p>Logo, visuals, and identity for a creative brand launch.</p>
            </div>
            <div className="project-card">
              <h3>Interactive Art</h3>
              <p>Creative coding experiments blending visuals & interactivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Let’s Work Together</h2>
        <p>
          Have a project in mind or just want to connect? I’d love to hear from you.
        </p>
        <a href="/connect" className="cta-btn">Contact Me</a>
      </section>

    </div>
  );
}
