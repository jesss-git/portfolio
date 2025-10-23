import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import UXUI from "./pages/UXUI";
import Graphics from "./pages/Graphics";
import Gallery from "./pages/Gallery";
import Code from "./pages/Code/Code";
import About from "./pages/About";
import Connect from './pages/Connect'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/ux-ui" element={<UXUI />} />
          <Route path="/graphics" element={<Graphics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/code" element={<Code />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        
      </main>
      <Footer />
    </Router>
  )
}

export default App
