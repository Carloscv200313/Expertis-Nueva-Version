'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])
  const textY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={sectionRef} className="relative py-32 px-6 bg-section">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            ref={imageRef}
            style={{ scale: imageScale }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src="/COLABORADORES-1.png"
                alt="Equipo EXPERTIS"
                width={1600}
                height={1800}
                unoptimized
                className="w-full h-auto object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/20 to-slate-900/30" />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            style={{ y: textY, opacity }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
                Nosotros
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-500 mb-8" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-slate-300 leading-relaxed"
            >
              En EXPERTIS somos especialistas en servicios de cobranza y gestión empresarial.
              Nuestro equipo altamente capacitado se dedica a brindar soluciones integrales
              que optimizan los procesos de nuestros clientes y maximizan sus resultados.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-slate-300 leading-relaxed"
            >
              Con años de experiencia en el mercado, hemos desarrollado metodologías
              innovadoras que nos permiten ofrecer un servicio de calidad superior,
              siempre enfocados en la excelencia y la satisfacción del cliente.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 gap-8 pt-8"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="text-3xl font-bold text-slate-400 mb-2"
                >
                  500+
                </motion.div>
                <p className="text-slate-300">Clientes</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="text-3xl font-bold text-slate-400 mb-2"
                >
                  10+
                </motion.div>
                <p className="text-slate-300">Años de Experiencia</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
