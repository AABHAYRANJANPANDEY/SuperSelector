import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Abstract Cricket Ball / Global Talent Matrix 3D Sphere
function CricketBallWireframe() {
  const ballRef = useRef();
  const seamRef = useRef();
  const innerCoreRef = useRef();

  useFrame((state, delta) => {
    if (ballRef.current) {
      ballRef.current.rotation.y += delta * 0.22;
      ballRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
    }
    if (seamRef.current) {
      seamRef.current.rotation.y += delta * 0.22;
      seamRef.current.rotation.z += delta * 0.08;
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.15;
    }
  });

  // Create subtle seam ring geometry mimicking the cricket ball seam
  const seamPoints = useMemo(() => {
    const points = [];
    const count = 120;
    const radius = 2.04;
    for (let i = 0; i <= count; i++) {
      const theta = (i / count) * Math.PI * 2;
      // Elegant sinusoidal seam curvature
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      const z = Math.sin(theta * 4) * 0.15;
      points.push(new THREE.Vector3(x, y, z));
    }
    return points;
  }, []);

  const seamLineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(seamPoints);
  }, [seamPoints]);

  return (
    <group ref={ballRef}>
      {/* Outer Wireframe Sphere - Rajasthan Royals Glowing Pink */}
      <mesh>
        <sphereGeometry args={[2.0, 28, 28]} />
        <meshBasicMaterial
          wireframe
          color="#EB1460"
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Cricket Ball Elevated Seam Highlight */}
      <line ref={seamRef} geometry={seamLineGeometry}>
        <lineBasicMaterial color="#FF1F7D" linewidth={2} transparent opacity={0.85} />
      </line>

      {/* Second orthogonal seam ring for talent matrix dimension */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.02, 0.015, 16, 100]} />
        <meshBasicMaterial color="#E5A93C" transparent opacity={0.4} />
      </mesh>

      {/* Inner Glowing Deep Navy Core */}
      <mesh ref={innerCoreRef}>
        <sphereGeometry args={[1.4, 20, 20]} />
        <meshStandardMaterial
          color="#001D48"
          emissive="#001D48"
          emissiveIntensity={0.6}
          roughness={0.4}
          metalness={0.8}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
}

// Data Particles / Talent Pool Cloud
function TalentParticles({ count = 280 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const pinkColor = new THREE.Color("#EB1460");
    const navyColor = new THREE.Color("#00E5FF");
    const goldColor = new THREE.Color("#E5A93C");

    for (let i = 0; i < count; i++) {
      // Scatter in a hollow sphere shell
      const radius = 2.6 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = Math.random() > 0.6 ? pinkColor : (Math.random() > 0.4 ? navyColor : goldColor);
      cols[i * 3] = chosenColor.r;
      cols[i * 3 + 1] = chosenColor.g;
      cols[i * 3 + 2] = chosenColor.b;
    }

    return [pos, cols];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF1F7D" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#001D48" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <CricketBallWireframe />
          <TalentParticles count={320} />
        </Float>
      </Canvas>
    </div>
  );
}

