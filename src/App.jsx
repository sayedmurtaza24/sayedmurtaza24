import React, { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Landing from './components/Landing';
import "./App.css";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <div className={'loader-wrapper ' + (progress === 100 ? 'hidden' : '')}>
        <div className='loader'></div>
        <p>Coding stuff up, please wait!</p>
      </div>
      <div
        className='main-app'
        style={{ overflow: progress === 100 ? 'auto' : 'hidden' }}>
        <Landing onLoaded={setProgress} />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App