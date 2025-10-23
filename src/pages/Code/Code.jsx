import React from "react";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import "./Code.css"
import heroImg from "../../assets/Images/koibg.png"

export default function Code() {
  const codeProjects = [
    {
      id: 1,
      image: heroImg,
      title: "Generative Art Koi Fish",
      date: "October 2024",
      description: "Exoploring generative and autonomous art. This project was made using Object Oriented Programming (OOP) with p5.js, Adobe Illustrator, and Adobe After Effects, with an emphasis on the p5.play library.",
      tags: ["OOP", "JavaScript", "Illustrator", "After Effects"],
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=800&q=80",
      title: "Audio Kaleidoscope Visualizer",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      title: "Geese Invasion",
      date: "December 2024",
      description: "This project features a live server that supports an interactive multiplayer game, playable on any device, where users follow a goose from a third-person perspective and can interact with those around them, coded with p5.js and Three.js.",
      tags: ["OOP", "JavaScript"],
    },
  ];

  return (
    <>
      <section
        className="codehero"
        style={{
          backgroundImage: `url(${heroImg})`, // ✅ use imported image
        }}
      ></section>


      <ProjectGallery
        title="Featured Code Projects"
        subtitle="Apps, tools, and experiments inspired by climbing and nature."
        projects={codeProjects}
      />
    </>
  );
}
