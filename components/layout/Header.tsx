'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Hexagon, ShieldCheck } from 'lucide-react'

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Afficher le header après 0.5s
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="
        sticky top-0 left-0 w-full z-50
        bg-[#0a0e27]/30 backdrop-blur-md
        border-b border-white/5
        px-4 md:px-6 py-3 md:py-4
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Gauche */}
        <div className="flex items-center gap-2 md:gap-3">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          >
            <Hexagon 
              className="w-6 h-6 md:w-7 md:h-7 text-neon-cyan" 
              fill="currentColor"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(0, 204, 255, 0.6))',
              }}
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="
              font-bold text-white text-lg md:text-xl
              tracking-widest
            "
          >
            WELIIVE
          </motion.span>
        </div>

        {/* Infos Profil - Droite */}
        <div className="flex items-center gap-2 md:gap-4 text-sm md:text-base">
          {/* Phrase d'accroche */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.48 }}
            className="text-gray-400 text-sm italic font-light mr-2 hidden md:block"
          >
            Vous vouliez Sam Altman ? Et bien moi, je suis
          </motion.span>

          {/* Nom */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-white font-bold"
          >
            Gabin Lemaitre
          </motion.span>

          {/* Diviseur */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="text-white/20 hidden md:inline"
          >
            |
          </motion.span>

          {/* Âge - Caché sur mobile */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-white/70 hidden md:inline"
          >
            20 ans
          </motion.span>

          {/* Diviseur */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.65 }}
            className="text-white/20 hidden md:inline"
          >
            |
          </motion.span>

          {/* XP - Badge Prestige avec icône */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.6, type: 'spring', stiffness: 200 }}
            className="
              flex items-center gap-2
              px-3 py-1 rounded-full
              bg-white/5 border border-white/10
              backdrop-blur-sm
              shadow-[0_0_15px_rgba(0,255,136,0.2)]
              hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]
              transition-all duration-300
            "
          >
            <ShieldCheck 
              className="w-5 h-5 md:w-6 md:h-6"
              style={{
                background: 'linear-gradient(to right, #a855f7, #00ff88)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 8px rgba(168, 85, 247, 0.6))',
              }}
            />
            <span className="text-gray-300 font-medium text-sm md:text-base">
              3 Mois d&apos;XP
            </span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}

