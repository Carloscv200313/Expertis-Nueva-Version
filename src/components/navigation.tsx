'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from "clsx";
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150)
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
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      className={clsx(
        "fixed w-full z-40 transition-all duration-100",
        scrolled && "bg-black/30 backdrop-blur-md border-b border-slate-800 py-2 shadow-2xl w-auto",
        !scrolled && "pt-2",
        !scrolled && isOpen && "bg-black/30 backdrop-blur-md border-b border-slate-800"
      )}
    >
      <div className="flex items-center justify-between w-full px-10">
        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={scrolled ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="flex items-center"
        >
          <Link href={"/"}>
            <Image
              src="/LOGO-EXPERTIS-1.png"
              alt="EXPERTIS Icon"
              width={300}
              height={300}
              className="w-auto h-10"
            />
          </Link>
        </motion.div>
        <div className={`hidden md:flex space-x-8`}>
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{
                scale: 1.02,
                y: -2
              }}
              className={`text-lg relative text-slate-300  ${scrolled ? "hover:text-[#01c9f0]" : "hover:text-slate-50"} transition-all duration-75 px-2 py-2 `}
            >
              {item.name}
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
            className="md:hidden mt-4 py-2 border-t border-slate-700/50"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="block py-2 px-4 text-slate-300 hover:text-cyan-500 hover:bg-slate-700/30 transition-colors duration-300"
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
