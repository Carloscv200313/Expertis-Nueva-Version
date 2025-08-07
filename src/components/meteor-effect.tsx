'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Meteor {
  id: number
  x: number
  y: number
  angle: number
  speed: number
  size: number
}

export default function MeteorEffect() {
  const [meteors, setMeteors] = useState<Meteor[]>([])

  useEffect(() => {
    const createMeteor = () => {
      const meteor: Meteor = {
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: -50,
        angle: Math.random() * 30 + 15, // 15-45 degrees
        speed: Math.random() * 3 + 2, // 2-5 speed
        size: Math.random() * 3 + 1 // 1-4 size
      }
      return meteor
    }

    const interval = setInterval(() => {
      setMeteors(prev => {
        const newMeteors = prev.filter(meteor => 
          meteor.y < window.innerHeight + 100 && meteor.x < window.innerWidth + 100
        )
        
        if (Math.random() < 0.3) { // 30% chance to create new meteor
          newMeteors.push(createMeteor())
        }
        
        return newMeteors.map(meteor => ({
          ...meteor,
          x: meteor.x + Math.cos(meteor.angle * Math.PI / 180) * meteor.speed,
          y: meteor.y + Math.sin(meteor.angle * Math.PI / 180) * meteor.speed
        }))
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {meteors.map(meteor => (
        <motion.div
          key={meteor.id}
          className="absolute"
          style={{
            left: meteor.x,
            top: meteor.y,
            width: meteor.size,
            height: meteor.size * 20,
            background: `linear-gradient(${meteor.angle}deg, transparent, rgba(34, 211, 238, 0.8), rgba(59, 130, 246, 0.6), transparent)`,
            borderRadius: '50%',
            transform: `rotate(${meteor.angle}deg)`,
            boxShadow: `0 0 ${meteor.size * 2}px rgba(34, 211, 238, 0.5)`
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}
