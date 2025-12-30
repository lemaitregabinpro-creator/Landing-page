'use client'

import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  className?: string
}

export default function AnimatedBackground({ className = 'absolute inset-0 z-0' }: AnimatedBackgroundProps) {
  return (
    <motion.div
      className={className}
      style={{
        background: `
          radial-gradient(circle at 20% 50%, rgba(138, 43, 226, 0.3) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 191, 255, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 40% 20%, rgba(0, 255, 136, 0.1) 0%, transparent 50%)
        `,
      }}
      animate={{
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

