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

import geeseinvasionImg from "../../assets/Images/geeseInvasion/geeseinvasion.png"
import gooseQRcode from "../../assets/Images/geeseInvasion/gooseQRcode.png"
import geeseDemo from "../../assets/Videos/geeseDemo.mov"

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
      sections: [
        {
          images: [
            geeseinvasionImg,
          ]
        },
        {
          heading: "Project Overview",
          text: [
            "This is an interactive art piece where users can join a server and appear on screen as a goose by either copying and pasting the link into a browser or by scanning a QR code. Users are able to walk around as the goose and observe the area from a third person perspective, shadowing the goose, while seeing all the connected users live.",
          ]
        },
        {
          heading: "Artist Statement",
          text: [
            "The University of Waterloo has been my home for the past couple years during my time as an undergraduate student, but it is also home to many Canadian geese as well. For the final project of the course, CS/FINE 383, I wanted to somewhat recreate life on campus and the community by imitating the hordes of geese we constantly see on campus. I wanted to create a project that people could interact with and enjoy, while being able to feel as though they are in Waterloo.",
          ],
        },
        {
          heading: "Formal Qualities",
          text: [
            "The piece is interactive and encourages people to interact with it on various technological devices, including laptop, mobile, and tablet. In an exhibit, my laptop would start the server, displaying one goose assigned to the user in the middle and can be controlled by my laptop by pressing the arrow keys, using wasd, or by clicking on the screen directly. The goose, created in Blender, is animated and will move around based on user input and the camera follows it as a third person perspective or shadow. As people look at the piece, they will notice a QR code on a table. If they scan this, they will be able to join the server. When they join, they will be given a goose to follow and control, while being able to see all the active connected users on their screen. As users leave and disconnect from the server, their goose will disappear from other people's screens as well.",
          ],
          images: [
            gooseQRcode,
          ],
        },
        {
          text: [
            "Above is a screenshot of the QR code users can use to join the server on their devices. When they scan this, they will be connected to the server, brought to a page, be given an interactive and moveable goose, see all online users moving around, and be removed when they disconnect.",
          ],
        },
        {
          heading: "Context",
          text: [
            "With this piece, I really wanted to imitate and recreate the feeling of walking around on Waterloo campus and seeing the hordes of geese. One aspect I noticed and always thought was interesting was that geese would often be in very large groups or hordes which can further intimidate people. However, it can also reflect and signify the community and bond that they have with each other. For instance, when a flock of geese fly, they fly in a V formation, which helps them conserve energy and allows them to fly longer distances than if they were alone. In addition, if a goose is sick or injured, two other geese will follow it to help and protect it, either until it dies or is well enough to join the flock again. They have such a great sense of community and are often seen in large groups. I really wanted to encapsulate this idea of community and being with others through this project.",
          ],
        },
        {
          heading: "Technical Description",
          text: [
            "To begin, there is one main technical piece, but it involves many aspects, such as creating visuals, animations, and functionality / backend and communication with the server. I found this extremely difficult and especially hard to debug, as well as a huge learning curve, because I have never worked with Blender, Three.js, Node.js or servers before."
          ],
        },
        {
          heading: "Code Structure and Flow",
          text: [
            "I initially began this piece by creating a 3D animated goose in Blender, composed of 8 body parts. From there, I initially created a sketch.js file that drew the goose out on a plane and had a walking animation when the user pressed certain buttons or touched certain areas. After this, I began setting up the server that I wanted to host my project on. Once the server had all the basics, I began incorporating the 3D models and code from my initial sketch.js file into the sketchy.js file in the public --> client folder. The code begins by setting up a server. Every time someone new joins the server, socket.io assigns new parameter values to the particular client and broadcasts this information to all online users. The draw function then creates a new goose drawing for each client online. If the user moves by pressing specific keys or touching specific areas on the screen, their information or data gets updated. They will see their input in response as a walking animation. In addition, these changes that were made to particular paramters are also sent to the server. The server receives this data and broadcasts the particular changes to all the connected clients that that particular player moved. This allows all the user inputs to be shown visibly across all screens. Finally, when a user disconnects, the particular player will be deleted from the list of online players and be cleared from the display."
          ],
        },
        {
          heading: "Key Aspect",
          text: [
            "One key aspect of this project would be creating all the 3D geometries in Blender, then creating the goose and animation in p5.js. Creating this code, I did a lot of brute forcing and set very specific parameters. However, one interesting way I decided to create the animation was setting up the legs a particular way. With the legs, I used push() and pop() functions so taht the particular translations I was using would not affect other aspects later on. I also decided to 'connect' all three limbs of the leg, topLeg, botLeg, and foot. This made it much easier to control translations with the limbs together. This is because I wanted to best imitate 'rigging' animations and prevent really awkward motions between these particular joints and components. By connecting all these ligaments to each other and referencing their positions, it made it a lot easier to animate and move the components.",
            "Another key aspect was figuring out how to identify which goose to move, replicate it on other clients, while keeping the camera focused on the client's goose. To try and solve this, I created a for loop within the draw function that would 'draw' a new goose for every online user. Outside of the loop, I would identify whether the user that moved was the user on that client, using socket.id. If it was, then their translation would be updated, as well as their camera. After updating their location, I would emit these new data points (x, y) to the server. The server would receive them, update the coordinates of the particular client with specified id, then broadcast it out to all other online clients."
          ],
        },
        {
          heading: "Demo",
          images: [
            geeseDemo,
          ],
        },
      ],
      link: "https://github.com/jesss-git/Geese-Invasion"
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
