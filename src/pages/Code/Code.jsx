import React from "react";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import "./Code.css"
import heroImg from "../../assets/Images/koibg.png"
import kaleidoscopeImg from "../../assets/Images/kaleidoscope.png"
import geeseinvasionImg from "../../assets/Images/geeseinvasion.png"

export default function Code() {
  const codeProjects = [
    {
      id: 1,
      image: kaleidoscopeImg,
      title: "Audio Kaleidoscope Visualizer",
      date: "April 2025",
      description: "Exploring computational sound, I wanted to visualize sound, creating a looper pedal effect where users can record themselves and play back audio, while observing their audio being transformed into a kaleidoscope visual.",
      tags: ["Python"],
      sections: [
        {
          images: [
            kaleidoscopeImg,
          ]
        },
        {
          heading: "Project Overview",
          text: [
            "The main goal I want to achieve with this project is to visualize sound - generating animations from sound input. This project aims to develop a real-time kaleidoscope geometric audio visualization system and animations that converts recorded sounds and sound loops into an aesthetic visual experience. The system functions similarly to a looper station or a looper pedal, allowing users to record multiple layers of sound that will generate superimposed visual patterns. The aesthetics is inspired by Kaleidosync and the works of various audio-visual artists, including Antoine Schmitt and Ryoji Ikeda, and it will explore alternative representations of sound.",
          ]
        },
        {
          heading: "Functionality",
          text: [
            "My program handles audio recording, playback, and visualization using Python libraries such as pyaudio, wave, pygame, and numpy. I used libraries, such as pyaudio (for audio recording and playback), wave (for saving audio), pygame (for visualization), numpy (for numerical operations), and scipy (for image processing in the kaleidoscope visualization). Then I defined various audio recording parameters, such as format, channels, rate, chunk, and gain. Then I have my AudioRecorder class and various functions within it. I implemented...",
            ""
          ],
          images: [
            kaleidoscopeImg,
            "../../assets/Images/kaleidoscope.png"
          ]
        },
        {
          heading: "Challenges & Next Steps",
          text: [
            "I experimented with different visual mapping techniques to prevent chaotic visuals.",
            "Future iterations will explore more complex waveform-driven shapes and rhythm-based animation triggers."
          ]
        }
      ],
      link: "https://github.com/jesss-git/Audio-Kaleidoscope-Visualizer"
    },
    {
      id: 2,
      image: geeseinvasionImg,
      title: "Geese Invasion",
      date: "December 2024",
      description: "This project features a live server that supports an interactive multiplayer game, playable on any device, where users follow a goose from a third-person perspective and can interact with those around them, coded with p5.js and Three.js.",
      tags: ["OOP", "JavaScript"],
    },
    {
      id: 3,
      image: heroImg,
      title: "Generative Art Koi Fish",
      date: "October 2024",
      description: "Exoploring generative and autonomous art. This project was made using Object Oriented Programming (OOP) with p5.js, Adobe Illustrator, and Adobe After Effects, with an emphasis on the p5.play library.",
      tags: ["OOP", "JavaScript", "Illustrator", "After Effects"],
    },
    
    
  ];

  return (
    <>
      <section
        className="codehero"
        style={{
          backgroundImage: `url(${heroImg})`, 
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
