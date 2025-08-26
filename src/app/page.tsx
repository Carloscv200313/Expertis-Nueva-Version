'use client'
import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import ContactSection from '@/components/contact-section'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ExperienceSection from '@/components/experience-section'
import JoinTeamSection from '@/components/join-team-section'
//import CircularGallery from '@/components/circular-gallery' // Updated import

export default function Home() {
  const { scrollYProgress } = useScroll()
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative bg-slate-950 text-white overflow-x-hidden min-h-dvh">
      {/* Navigation */}
      <Navigation />
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <JoinTeamSection />
        <ContactSection />
        <Footer />
      </main>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      >
        <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-sm opacity-75" />
        </div>
      </motion.div>
    </div>
  )
}
