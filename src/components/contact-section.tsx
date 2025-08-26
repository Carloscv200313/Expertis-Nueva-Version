'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" ref={sectionRef} className="relative pt-20 pb-8 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
            Contacto
          </h2>
          <div className="w-1/4 h-1 bg-gradient-to-r from-slate-600 to-slate-500 mx-auto mb-8" />
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            ¿Necesitas optimizar tus procesos de cobranza? Contáctanos hoy mismo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Image */}
            <div className="mb-8 relative overflow-hidden rounded-2xl">
              <Image
                src="/IMAGEN-CENTRAL-CONTACTA.png"
                alt="Contacta con EXPERTIS"
                width={800}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/60 to-slate-900/60" />
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-slate-900/30 rounded-lg border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-white/70">contacto@expertis.com</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-slate-900/30 rounded-lg border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Teléfono</h3>
                  <p className="text-white/70">+52 (55) 1234-5678</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-4 bg-slate-900/30 rounded-lg border border-white/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Ubicación</h3>
                  <p className="text-white/70">Ciudad de México, México</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-slate-900/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-slate-600 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-slate-900/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-slate-600 focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  placeholder="Tu mensaje"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-6 py-4 bg-slate-900/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-slate-600 focus:outline-none transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg text-white font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-slate-600/25 transition-all duration-300"
              >
                <span>Enviar Mensaje</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
