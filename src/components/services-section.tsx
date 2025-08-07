'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Users, BarChart, Shield } from 'lucide-react'

const services = [
  {
    icon: Phone,
    title: 'Gestión de Cobranza',
    description: 'Servicios especializados en recuperación de cartera con metodologías efectivas.',
    color: 'from-cyan-600 to-blue-500' // Updated colors
  },
  {
    icon: Users,
    title: 'Atención al Cliente',
    description: 'Call center profesional con personal altamente capacitado y tecnología avanzada.',
    color: 'from-blue-500 to-purple-600' // Updated colors
  },
  {
    icon: BarChart,
    title: 'Análisis y Reportes',
    description: 'Informes detallados y análisis de datos para optimizar procesos empresariales.',
    color: 'from-purple-600 to-pink-500' // Updated colors
  },
  {
    icon: Shield,
    title: 'Cumplimiento Legal',
    description: 'Procesos que cumplen con todas las normativas legales y mejores prácticas.',
    color: 'from-pink-500 to-red-400' // Updated colors
  }
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Light Rays Background Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 animate-light-rays">
          <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-radial-gradient-lg animate-rotate-gradient" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Transformamos ideas en realidades digitales con tecnología de vanguardia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative p-8 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-slate-600/30 transition-all duration-300">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} p-4 shadow-lg`}
                >
                  <service.icon className="w-full h-full text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-white/70 text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute -inset-1 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-2xl blur-xl -z-10"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
