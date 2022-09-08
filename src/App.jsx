import React from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Landing from './components/Landing'
import "./App.css"

function App() {
  return (
    <div className='main-app'>
      <Landing />
      <About />
      <Projects />
    </div>
  )
}

export default App