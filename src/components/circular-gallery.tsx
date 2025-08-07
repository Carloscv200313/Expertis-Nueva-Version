'use client'

import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import { TextureLoader, MeshBasicMaterial } from 'three'
import { Html } from '@react-three/drei' // HTML is for overlaying titles
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Image data - reusing from previous carousel
const imagesData = [
  { src: '/COLABORADORES.png', alt: 'Equipo completo EXPERTIS', title: 'Nuestro Equipo' },
  { src: '/IMAGEN-CENTRAL-CONTACTA.png', alt: 'Contacta con EXPERTIS', title: 'Contáctanos' },
  { src: '/IMAGEN-NEGOCIO-EXPERIENCIA.jpg', alt: 'Experiencia EXPERTIS', title: 'Nuestra Experiencia' },
  { src: '/IMAGEN-OPORTUNIDAD-UNETE.png', alt: 'Únete al equipo EXPERTIS', title: 'Únete al Equipo' },
  { src: '/IMAGEN-CALL-CENTER.jpg', alt: 'Oportunidades en EXPERTIS', title: 'Oportunidades' },
  { src: '/IMAGEN-DE-TODOS.png', alt: 'Nosotros EXPERTIS', title: 'Acerca de Nosotros' }
]

interface ImagePlaneProps {
  texture: THREE.Texture
  position: [number, number, number]
  rotation: [number, number, number]
  onClick: () => void
  isSelected: boolean
  title: string
}

function ImagePlane({ texture, position, rotation, onClick, isSelected, title }: ImagePlaneProps) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)

  // Use a memoized material to avoid re-creating on every render if possible
  const material = useMemo(() => new MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.9 }), [texture])

  useFrame(() => {
    // Basic scaling effect on hover
    if (ref.current) {
      ref.current.scale.lerp(
        new THREE.Vector3(hovered || isSelected ? 1.1 : 1, hovered || isSelected ? 1.1 : 1, 1),
        0.1
      )
    }
  })

  return (
    <group position={position} rotation={rotation} ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      <mesh material={material}>
        <planeGeometry args={[4, 3]} /> {/* Adjust size as needed */}
      </mesh>
      {isSelected && (
        <Html position={[0, -2.2, 0]} transform>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="text-white text-lg font-bold p-2 bg-black/60 rounded-md whitespace-nowrap"
          >
            {title}
          </motion.div>
        </Html>
      )}
    </group>
  )
}

interface CircularGalleryContentProps {
  imagesData: typeof imagesData
  currentIndex: number
  setCurrentIndex: (index: number) => void
}

function CircularGalleryContent({ imagesData, currentIndex, setCurrentIndex }: CircularGalleryContentProps) {
  const groupRef = useRef<THREE.Group>(null!)
  const textures = useLoader(TextureLoader, imagesData.map(img => img.src))
  const radius = 10 // Radius of the circle

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Automatic rotation
      groupRef.current.rotation.y += delta * 0.1; // Adjust speed as needed

      // Smoothly rotate to selected image
      const targetRotationY = -(currentIndex / imagesData.length) * Math.PI * 2
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.05
      )
    }
  })

  const imagePlanes = useMemo(() => {
    return imagesData.map((img, i) => {
      const angle = (i / imagesData.length) * Math.PI * 2
      const x = radius * Math.sin(angle)
      const z = radius * Math.cos(angle)
      return (
        <ImagePlane
          key={img.src}
          texture={textures[i]}
          position={[x, 0, z]}
          rotation={[0, angle + Math.PI / 2, 0]} // Rotate to face camera
          onClick={() => setCurrentIndex(i)}
          isSelected={i === currentIndex}
          title={img.title}
        />
      )
    })
  }, [imagesData, textures, radius, currentIndex, setCurrentIndex])

  return (
    <group ref={groupRef}>
      {imagePlanes}
    </group>
  )
}

export default function CircularGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length)
  }

  return (
    <section className="relative py-32 px-6 bg-slate-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Galería Experta
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-400 mx-auto mb-8" />
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Descubre momentos clave de EXPERTIS en acción
          </p>
        </motion.div>

        <div className="relative h-[60vh] max-h-[600px] w-full mx-auto rounded-2xl overflow-hidden">
          <Canvas camera={{ position: [0, 0, 15], fov: 60 }} style={{ background: 'transparent' }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} />
            <CircularGalleryContent imagesData={imagesData} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
          </Canvas>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {imagesData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-slate-400 scale-125' 
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
