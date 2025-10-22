import React from "react";
import ProjectGallery from "../components/ProjectGallery/ProjectGallery";

export default function Code() {
  const codeProjects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      title: "Climb Tracker App",
      date: "August 2010",
      description: "hello hello, description, description, description, description, description",
      tags: ["React", "CSS", "JavaScript"],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80",
      title: "Nature Data Visualizer",
      tags: ["Python", "Flask"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      title: "Gear Library",
      tags: ["React", "JavaScript", "Figma"],
    },
  ];

  return (
    <>
      <section className="hero">
        <h1>Code</h1>
      </section>

      <ProjectGallery
        title="Featured Code Projects"
        subtitle="Apps, tools, and experiments inspired by climbing and nature."
        projects={codeProjects}
      />
    </>
  );
}
