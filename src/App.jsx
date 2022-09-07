import React from 'react'
import ThreeScene from './components/ThreeScene'
import { Canvas } from '@react-three/fiber'
import "./App.css"
import MenuButton from './components/Menu'

function App() {

  return (
    <div className='main-app'>
      <Canvas
        gl={{ preserveDrawingBuffer: true }}
        shadows
        // dpr={[1, 1.5]}
        camera={{ fov: 50, position: window.innerHeight > 760 ? [44, 15, -40] : [64, 19, -55] }}>
        <ThreeScene />
      </Canvas>
      <MenuButton />
    </div>
  )
}

export default App