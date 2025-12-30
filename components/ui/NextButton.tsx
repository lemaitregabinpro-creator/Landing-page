'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface NextButtonProps {
  onNext: () => void
  static?: boolean
}

export default function NextButton({ onNext, static: isStatic = false }: NextButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onNext}
      className={`
        ${isStatic ? 'relative mx-auto' : 'fixed bottom-8 left-1/2 -translate-x-1/2 z-50'}
        px-6 py-3 md:px-8 md:py-4
        rounded-lg
        bg-white/5 backdrop-blur-md
        border border-neon-green/30
        text-neon-green font-semibold
        flex items-center gap-2
        transition-all duration-300
        hover:border-neon-green hover:bg-white/10
        hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]
        shadow-[0_0_10px_rgba(0,255,136,0.2)]
      `}
    >
      <span className="text-sm md:text-base">Continuer</span>
      <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
    </motion.button>
  )
}

