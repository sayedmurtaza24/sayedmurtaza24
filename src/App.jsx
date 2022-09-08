import React from 'react'
import ThreeScene from './components/ThreeScene'
import { Canvas } from '@react-three/fiber'
import Links from './components/Links'
import About from './components/About'
import Projects from './components/Projects'
import "./App.css"

function App() {

  return (
    <div className='main-app'>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 50, position: window.innerHeight > 760 ? [44, 15, -40] : [64, 19, -55] }}>
        <ThreeScene />
      </Canvas>
      <Links />
      <About />
      <Projects />
    </div>
  )
}

export default App