'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMAGEN-DE-TODOS.png"
          alt="Equipo EXPERTIS"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-950/75" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ scale: 0 }} // Comienza invisible (escala 0)
          animate={{
            scale: [0, 1.1, 1, 1.05, 1], // Secuencia de escalas: pequeño -> grande -> palpitar
            transition: {
              duration: 1.5, // Duración total de la animación
              ease: "easeOut",
              times: [0, 0.6, 0.8, 0.9, 1], // Puntos de tiempo para cada keyframe
            }
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.03, 1], // Animación de palpitar que se repite
              transition: {
                delay: 4,
                duration: 2,
                repeat: Infinity, // Se repite indefinidamente
                repeatType: "reverse",
                ease: "easeInOut"
              }
            }}
            className="w-80 h-80 mx-auto mb-8 relative"
          >
            <Image
              src="/LOGO-CENTRAL.png"
              alt="EXPERTIS Logo"
              width={300}
              height={300}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }} // ⬅ más movimiento
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-cyan-200 drop-shadow-lg"
        >
          <a href="#about" className='flex flex-col items-center'>
            <ChevronDown size={40} className='translate-y-7 opacity-40' />
            <ChevronDown size={40} />
          </a>
        </motion.div>
      </motion.div>

    </section>
  )
}
