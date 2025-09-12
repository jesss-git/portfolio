import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "80px" }}>
        <section className='hero'>
          <h1>Hero Section</h1>
        </section>
        <section style={{ height: "200vh" }}>
          <p>Scroll down to see navbar background change</p>
        </section>
      </main>
    </>
  )
}

export default App
