// src/components/Stars.jsx
import React, { useMemo } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Stars = () => {
  const { size } = useThree();

  const starGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = [];
    const sizes = [];
    const starDensity = 0.0099; 
    const numStars = Math.floor(window.innerWidth * window.innerHeight * starDensity);
    
    for (let i = 0; i < numStars; i++) {
      positions.push((Math.random() - 0.5) * 2000);
      positions.push((Math.random() - 0.5) * 2000);
      positions.push((Math.random() - 0.5) * 2000);
      sizes.push(1 + Math.random() * 4); 
    }

    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geo.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    return geo;
  }, []);

  const starMaterial = useMemo(
    () => new THREE.PointsMaterial({ color: 0xffffff, size: 1.5, sizeAttenuation: true }),
    []
  );

  return <points geometry={starGeo} material={starMaterial} />;
};

export default Stars;
