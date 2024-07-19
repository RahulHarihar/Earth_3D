import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Earth from './components/Earth'; // Ensure this path is correct
import Stars from './components/Stars'; // Ensure this path is correct

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.7} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth />
          <Stars />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      |<div className="container">
        <h1>Earth</h1>
        <p>Earth is the third planet from the Sun and the only astronomical object known to harbor life.<br/>
           This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water.<br/>
           Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust.</p>
      </div>
    </>
  );
}

export default App;
