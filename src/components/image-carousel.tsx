'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  {
    src: '/images/equipo-completo.png',
    alt: 'Equipo completo EXPERTIS',
    title: 'Nuestro Equipo'
  },
  {
    src: '/images/contacta.png',
    alt: 'Contacta con EXPERTIS',
    title: 'Contáctanos'
  },
  {
    src: '/images/experiencia.png',
    alt: 'Experiencia EXPERTIS',
    title: 'Nuestra Experiencia'
  },
  {
    src: '/images/unete.png',
    alt: 'Únete al equipo EXPERTIS',
    title: 'Únete al Equipo'
  },
  {
    src: '/images/oportunidad.png',
    alt: 'Oportunidades en EXPERTIS',
    title: 'Oportunidades'
  },
  {
    src: '/images/IMAGEN-CENTRAL-NOSOTROS.jpg',
    alt: 'Nosotros EXPERTIS',
    title: 'Acerca de Nosotros'
  }
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
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
            Galería
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-400 mx-auto mb-8" />
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Conoce más sobre EXPERTIS a través de nuestras instalaciones y equipo
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Carousel */}
          <div className="relative h-96 md:h-[500px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex].src || "/placeholder.svg"}
                  alt={images[currentIndex].alt}
                  fill
                  className="object-cover"
                />
                {/* Dark overlay for better contrast */}
                <div className="absolute inset-0 bg-slate-900/60" />
                
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl font-bold text-white mb-2"
                  >
                    {images[currentIndex].title}
                  </motion.h3>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-800/80 hover:bg-slate-700/80 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
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

          {/* Thumbnails */}
          <div className="grid grid-cols-6 gap-2 mt-8">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-slate-400 opacity-100' 
                    : 'opacity-60 hover:opacity-80'
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
