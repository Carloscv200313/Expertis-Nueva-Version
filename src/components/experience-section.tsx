'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Award, Target, Users, TrendingUp } from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Reconocidos por nuestra calidad de servicio',
    number: '98%',
    label: 'Satisfacción'
  },
  {
    icon: Target,
    title: 'Precisión',
    description: 'Resultados efectivos en gestión de cobranza',
    number: '85%',
    label: 'Efectividad'
  },
  {
    icon: Users,
    title: 'Experiencia',
    description: 'Equipo altamente capacitado y especializado',
    number: '150+',
    label: 'Profesionales'
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento',
    description: 'Expansión constante y mejora continua',
    number: '25%',
    label: 'Crecimiento Anual'
  }
]

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background Image for the section */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMAGEN-NEGOCIO-EXPERIENCIA.jpg"
          alt="Experiencia EXPERTIS Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Nuestra Experiencia
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Años de experiencia nos respaldan en cada proyecto que emprendemos
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              En EXPERTIS, nuestra trayectoria se define por la constante búsqueda de la excelencia y la innovación. 
              Hemos consolidado una vasta experiencia en la gestión de cobranza y servicios empresariales, 
              adaptándonos a las necesidades cambiantes del mercado.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Cada proyecto es una oportunidad para demostrar nuestro compromiso con la eficiencia y la obtención de resultados tangibles, 
              respaldados por un equipo de profesionales altamente cualificados y metodologías probadas.
            </p>
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
                <p className="text-slate-300">Clientes Satisfechos</p>
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
                <p className="text-slate-300">Años en el Mercado</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Achievements Grid (Smaller Cards) */}
          <div className="grid grid-cols-2 gap-4"> {/* Reduced gap */}
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-slate-400/30 transition-all duration-300" // Reduced padding
              >
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-500 rounded-lg mb-3"> {/* Reduced size */}
                  <achievement.icon className="w-5 h-5 text-white" /> {/* Reduced icon size */}
                </div>
                <div className="text-xl font-bold text-slate-400 mb-1"> {/* Reduced font size */}
                  {achievement.number}
                </div>
                <div className="text-xs text-white/60 mb-2"> {/* Reduced font size */}
                  {achievement.label}
                </div>
                <h3 className="text-white text-lg font-semibold mb-1"> {/* Reduced font size */}
                  {achievement.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
