import React from 'react';
import '../styles/App.css';
import RotatingEarth from '../components/rotatingEarth'
import Sun from '../assets/SVGs/Sun'

function App() {
  return (
    <div className="root">
      <div className="hangBox">
        <Sun styles={{
          height: '140%',
          zindex: '9'
        }}></Sun>
        <RotatingEarth></RotatingEarth>
      </div>
    </div>
  );
}

export default App;
