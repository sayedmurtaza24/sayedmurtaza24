import React from 'react'
import ThreeScene from './components/ThreeScene'
import { Canvas } from '@react-three/fiber'
import Links from './components/Links'
import About from './components/About'
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
      {/* <section className='projects-section'>
          <h2>Projects</h2>
          <div className='abouts__projects-grid'>
            {projects.map(project => <Project key={project.name} project={project} />)}
          </div>
        </section> */}
    </div>
  )
}

export default App