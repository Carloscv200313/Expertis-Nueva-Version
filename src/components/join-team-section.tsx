'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { Users, Briefcase, GraduationCap, Heart } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Ambiente Colaborativo',
    description: 'Trabaja en un equipo dinámico y profesional'
  },
  {
    icon: Briefcase,
    title: 'Crecimiento Profesional',
    description: 'Oportunidades de desarrollo y promoción'
  },
  {
    icon: GraduationCap,
    title: 'Capacitación Continua',
    description: 'Programas de formación y actualización'
  },
  {
    icon: Heart,
    title: 'Bienestar Laboral',
    description: 'Beneficios y ambiente de trabajo saludable'
  }
]

export default function JoinTeamSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} className="relative py-32 px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(34,211,238,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Únete al Equipo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Forma parte de un equipo líder en servicios de cobranza y gestión empresarial
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">
                ¿Por qué trabajar con nosotros?
              </h3>
              
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-slate-900/30 rounded-lg border border-white/10 hover:border-slate-600/30 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-white/70">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-slate-600/25 transition-all duration-300"
              >
                Ver Vacantes Disponibles
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/IMAGEN-OPORTUNIDAD-UNETE.png"
                alt="Únete al equipo EXPERTIS"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/50 to-slate-900/50" />
            </div>

            {/* Secondary Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/IMAGEN-CALL-CENTER.jpg"
                alt="Oportunidades en EXPERTIS"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/50 to-slate-900/50" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
