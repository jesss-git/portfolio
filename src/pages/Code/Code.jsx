import React from "react";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import "./Code.css"
import heroImg from "../../assets/Images/koibg.png"

import kaleidoscopeImg from "../../assets/Images/kaleidoscope/kaleidoscope.png"
import kalCodeSnip1 from "../../assets/Images/kaleidoscope/kalCodeSnip1.png"
import kalCodeSnip2 from "../../assets/Images/kaleidoscope/kalCodeSnip2.png"
import kalCodeSnip3 from "../../assets/Images/kaleidoscope/kalCodeSnip3.png"
import kalDemo from "../../assets/Videos/kalDemo.mov"
import kalGallery1 from "../../assets/Images/kaleidoscope/kalGallery1.png"
import kalGallery2 from "../../assets/Images/kaleidoscope/kalGallery2.png"
import kalGallery4 from "../../assets/Images/kaleidoscope/kalGallery4.png"
import kalGallery6 from "../../assets/Images/kaleidoscope/kalGallery6.png"
import kalGallery7 from "../../assets/Images/kaleidoscope/kalGallery7.png"
import kalGallery8 from "../../assets/Images/kaleidoscope/kalGallery8.png"
import kalGallery9 from "../../assets/Images/kaleidoscope/kalGallery9.png"
import kalGallery10 from "../../assets/Images/kaleidoscope/kalGallery10.png"
import kalGallery12 from "../../assets/Images/kaleidoscope/kalGallery12.png"
import kalGallery13 from "../../assets/Images/kaleidoscope/kalGallery13.png"
import kalGallery14 from "../../assets/Images/kaleidoscope/kalGallery14.png"
import kalGallery15 from "../../assets/Images/kaleidoscope/kalGallery15.png"
import kalGallery16 from "../../assets/Images/kaleidoscope/kalGallery16.png"
import kalGallery17 from "../../assets/Images/kaleidoscope/kalGallery17.png"
import kalGallery18 from "../../assets/Images/kaleidoscope/kalGallery18.png"
import kalGallery19 from "../../assets/Images/kaleidoscope/kalGallery19.png"
import kalGallery20 from "../../assets/Images/kaleidoscope/kalGallery20.png"
import kalGallery21 from "../../assets/Images/kaleidoscope/kalGallery21.png"

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
            "▸ Start_recording() - opens an audio input stream and starts recording in a separate thread and prevents multiple recordings from starting simultaneously.",
            "▸ Record() - continuously reads audio data from the input stream in chunks and applies gain to amplify the audio and stores the amplified data.",
            "▸ Apply_gain(data) - amplifies audio data by multiplying it by the gain factor and ensures the amplified values stay within the valid range for 16-bit integers.",
            "▸ Stop_recording() - stops the recording process, closes the audio stream, and saves the recorded audio to a .wav file and automatically plays the latest track and visualizes it using the kaleidoscope animation [visualize_kaleidoscope()].",
            "▸ Save_file() - saves the recorded audio data as a .wav file, sequentially names the files and stores them in the current directory, and adds the saved file to self.tracks.",
            "▸ Play_tracks() - plays all saved tracks in a loop by starting a separate thread for each track.",
            "▸ Play_track(track) - plays a single .wav file by reading its data in chunks and writing it to the audio output stream and stops playback if self.playing is set to False.",
            "▸ Stop_playback() - stops all ongoing audio playback by setting self.playing to False.",
            "▸ Clear_tracks() - deletes all saved .wav files from the current directory and resets self.tracks and self.track_count and stops playback if it is active.",
            "▸ Visualize_kaleidoscope(filename) - creates a dynamic kaleidoscope animation using Pygame and Fast Fourier Transform (FFT) to analyze the audio signal. This function reads in the audio file and computes its FFT to extract frequency information and splits the FFT data into low, mid, and high frequencies. Then it maps the frequency bands to visual properties such as rotation (based on mid frequency), scaling (based on low frequencies), and colour shifts (based on high frequencies). The function creates a symmetrical pattern by mirroring and rotating a base image and adds radial patterns using sine waves. It continuously updates the visuals in sync with the audio playback.",
            "Buttons:",
            "▸ 'R' - starts recording",
            "▸ 'S' - stops recording, saves the audio, and visualizes it",
            "▸ 'P' - plays all saved tracks in a loop",
            "▸ 'C' - clears all saved tracks (requires pressing twice)",
            "▸ 'Q' - quits the program",
            "Features:",
            "▸ Audio recording - records audio in real-time and applies gain to amplify the signal",
            "▸ Audio playback - plays saved audio tracks individually or in a loop",
            "▸ Dynamic visualization - creates a kaleidoscope animation that responds to the audio signal",
            "▸ File management - saves audio files with sequential names and allows clearing all tracks"
          ]
        },
        {
          heading: "Code Snippets",
          text: [
            "For implementing recording audio in python, I referenced the following link and code snippets:",
            "Link - https://stackoverflow.com/questions/892199/detect-record-audio-in-python"
          ],
          images: [
            kalCodeSnip1,
            kalCodeSnip2,
          ]
        },
        {
          images: [
            kalCodeSnip3,
          ],
        },
        {
          text: [
            "For the Kaleidoscope animation, I used multiple references and came up with my own 'algorithm' by playing around with different parameters and seeing how it affects the visuals. I created a dynamic kaleidoscope animation using Pygame and Fast Fourier Transform (FFT) to analyze the audio signal. I read in the audio file and computed its FFT to extract frequency information about the audio file. I then split the FFT data into low, mid, and high frequencies / frequency bands. From here, I mapped the frequency bands to visual properties, such as rotation (based on mid frequencies), scaling (based on low frequencies), and colour shifts (based on high frequencies) in the visual output. I also created symmetrical patterns by mirroring and rotating a base image and adding radial patterns using sine waves. I continuously update the visuals to sync with the audio playback. Below, I provided various sources I looked into to try and generate my kaleidoscope design / animaiton.",
          ],
        },
        {
          heading: "Challenges",
          text: [
            "Some challenges I encountered with this project include the following:",
            "▸ Getting Python to record properly - it would only begin 'recording' but when I tried stopping it and saving it as a .wav file, it would crash or not respond.",
            "▸ Figuring out how to record multiple tracks on one session.",
            "▸ Figuring out how to get the tracks to loop automatically after stopping the recording - it would not play the loop automatically, you had to press 'p' to playback the recordings simultaneously.",
            "▸ Getting multiple tracks to loop at the same time - it was initially only looping the latest track.",
            "▸ Figuring out how to 'design' the kaleidoscope algorithm - deciding how the audio input would affect the various features of the kaleidoscope animation."
          ]
        },
        {
          heading: "Demo",
          text: [
            "Please note: My computer is very old, so the graphics and video might not be the best quality...",
            "Sorry in advanced and thanks for your understanding."
          ],
          images: [
            kalDemo,
          ],
        },
        {
          heading: "Gallery",
          text: [
            "The following are some screenshots of kaleidoscope patterns generated throughout the demo:"
          ],
          images: [
            kalGallery1, kalGallery2, kalGallery4,
            kalGallery6, kalGallery7, kalGallery8,
            kalGallery9, kalGallery10, kalGallery12,
            kalGallery13, kalGallery14, kalGallery15, kalGallery16,
            kalGallery17, kalGallery18, kalGallery19, kalGallery20,
            kalGallery21,
          ],
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
