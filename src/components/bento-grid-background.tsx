'use client'

import React, { useRef, useEffect, useState, memo } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CellProps {
  initialOpacity?: number
  animateOpacity?: number
  transitionDuration?: number
  delayFactor?: number
  className?: string
}

// Memoized Cell component for performance
const Cell = memo(({
  initialOpacity = 0,
  animateOpacity = 0.3,
  transitionDuration = 2,
  delayFactor = 0.0005,
  className
}: CellProps) => {
  const [delay, setDelay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      const { x, y } = ref.current.getBoundingClientRect()
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
      setDelay(distance * delayFactor)
    }
  }, [delayFactor])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: initialOpacity }}
      animate={{ opacity: animateOpacity }}
      transition={{ 
        delay: delay, 
        duration: transitionDuration, 
        repeat: Infinity, 
        repeatType: "reverse",
        ease: "easeOut" 
      }}
      className={cn("bg-slate-700/10 rounded-sm", className)}
    />
  )
})

Cell.displayName = 'Cell'

export default function BentoGridBackground() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 })

  useEffect(() => {
    const calculateGridSize = () => {
      if (gridRef.current) {
        const { clientWidth, clientHeight } = gridRef.current
        const cellSize = 50 // px
        setGridSize({
          cols: Math.ceil(clientWidth / cellSize),
          rows: Math.ceil(clientHeight / cellSize)
        })
      }
    }

    calculateGridSize()
    window.addEventListener('resize', calculateGridSize)
    return () => window.removeEventListener('resize', calculateGridSize)
  }, [])

  return (
    <div
      ref={gridRef}
      className="absolute inset-0 w-full h-full flex flex-wrap justify-center items-center overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fill, minmax(50px, 1fr))`,
        gridTemplateRows: `repeat(auto-fill, minmax(50px, 1fr))`
      }}
    >
      {Array.from({ length: gridSize.cols * gridSize.rows }).map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
