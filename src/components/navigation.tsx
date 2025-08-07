'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' }
  ]

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ 
        y: 0,
        paddingLeft: scrolled ? '2rem' : '1.5rem',
        paddingRight: scrolled ? '2rem' : '1.5rem',
        top: scrolled ? '1rem' : '0rem',
        left: scrolled ? '2rem' : '0rem',
        right: scrolled ? '2rem' : '0rem'
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`fixed z-40 transition-all duration-400 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-md rounded-full border border-slate-700/50 py-3 shadow-2xl' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo - Solo visible cuando está scrolled */}
        <AnimatePresence>
          {scrolled && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="flex items-center"
            >
              <Image
                src="/favicon.ico"
                alt="EXPERTIS Icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Menu */}
        <div className={`hidden md:flex ${scrolled ? 'space-x-6 ml-4' : 'space-x-8 mx-auto'}`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                textShadow: "0 0 8px rgba(34, 211, 238, 0.8)"
              }}
              className={`relative text-slate-300 hover:text-cyan-400 transition-all duration-300 ${
                scrolled ? 'px-3 py-2' : 'px-4 py-2'
              } rounded-full hover:bg-slate-700/30`}
            >
              {item.name}
              <motion.div
                className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-slate-700/50"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/30 rounded-lg transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
