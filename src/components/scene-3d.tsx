'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const ref = useRef<THREE.Points>(null!)
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    const colors = new Float32Array(5000 * 3)
    
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100
      
      const color = new THREE.Color()
      color.setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.5)
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    
    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.05
      ref.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        vertexColors
        size={2}
        sizeAttenuation={false}
        depthWrite={false}
      />
    </Points>
  )
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 2
    }
  })

  return (
    <mesh ref={meshRef} position={[10, 0, -20]}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial
        color="#22d3ee"
        transparent
        opacity={0.1}
        wireframe
      />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 75 }}
      style={{ background: 'transparent' }}
    >
      <StarField />
      <FloatingGeometry />
      <ambientLight intensity={0.5} />
    </Canvas>
  )
}
