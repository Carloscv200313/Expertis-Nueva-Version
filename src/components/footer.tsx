'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10 py-16 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Image
                src="/images/logo-footer.png"
                alt="EXPERTIS Logo"
                width={200}
                height={80}
                className="h-16 w-auto mb-4"
              />
              <p className="text-white/70 leading-relaxed max-w-md">
                EXPERTIS es tu socio estratégico en servicios de cobranza y gestión empresarial. 
                Transformamos procesos para maximizar resultados.
              </p>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail size={16} />
                  <span>contacto@expertis.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone size={16} />
                  <span>+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin size={16} />
                  <span>Ciudad de México, México</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, color: "#22d3ee" }}
                  className="text-white/70 hover:text-cyan-400 transition-colors"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, color: "#22d3ee" }}
                  className="text-white/70 hover:text-cyan-400 transition-colors"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, color: "#22d3ee" }}
                  className="text-white/70 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 mt-12 pt-8 text-center"
        >
          <p className="text-white/60">
            © 2024 EXPERTIS Master Servicer & Collections. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
