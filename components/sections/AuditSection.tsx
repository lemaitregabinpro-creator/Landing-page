'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import AnimatedBackground from '../ui/AnimatedBackground'
import NextButton from '../ui/NextButton'

const TOTAL_DURATION = 225 // 3:45 in seconds
const BARS_COUNT = 25

interface AuditSectionProps {
  onNext: () => void
}

// Composant pour une barre du visualiseur
function AudioBar({ index, isPlaying }: { index: number; isPlaying: boolean }) {
  const getRandomHeight = () => {
    if (!isPlaying) {
      // État pause : respiration subtile
      return Math.random() * 20 + 10 // 10-30%
    }
    // État play : animation vigoureuse
    return Math.random() * 80 + 20 // 20-100%
  }

  return (
    <motion.div
      className="w-2 bg-gradient-to-t from-neon-green via-cyan-500 to-transparent rounded-full"
      animate={{
        height: `${getRandomHeight()}%`,
      }}
      transition={{
        duration: isPlaying ? 0.3 + Math.random() * 0.2 : 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        boxShadow: isPlaying
          ? '0 0 8px rgba(0, 255, 136, 0.6)'
          : '0 0 4px rgba(0, 255, 136, 0.2)',
      }}
    />
  )
}

export default function AuditSection({ onNext }: AuditSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Fonction pour toggle play/pause
  const togglePlay = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      try {
        await audioRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Erreur lors de la lecture audio:', error)
      }
    }
  }

  // Mise à jour du progress basé sur le temps réel de l'audio
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateProgress = () => {
      setProgress(audio.currentTime)
    }

    const handleTimeUpdate = () => {
      updateProgress()
    }

    const handleEnded = () => {
      setIsPlaying(false)
      setProgress(0)
    }

    audio.addEventListener('timeupdate', handleTimeUpdate)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [])

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progressPercentage = (progress / TOTAL_DURATION) * 100

  return (
    <section className="h-screen w-full overflow-y-auto overflow-x-hidden scrollbar-thin relative">
      <AnimatedBackground className="fixed inset-0" />
      
      {/* Contenu Scrollable */}
      <div className="flex flex-col items-center min-h-screen pt-10 pb-24 px-4 md:px-8 py-16 gap-8 relative z-10">
        <div className="w-full max-w-7xl relative pb-32">
          {/* Titre de la section */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-4xl font-mono mb-4 text-center"
          >
            {/* Préfixe Néon */}
            <span 
              className="font-bold mr-3"
              style={{
                background: 'linear-gradient(to right, #a855f7, #00ff88)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {"> 02 //"}
            </span>
            {/* Texte Principal Blanc */}
            <span className="text-gray-100">
              DEEP DIVE: AI-Powered Reconnaissance (Discovery)
            </span>
            {/* Curseur clignotant */}
            <span className="animate-pulse text-neon-green ml-1">_</span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-gray-400 text-sm md:text-base mb-12"
          >
            Analyse générée par NotebookLM à partir de vos données.
          </motion.p>

          {/* Lecteur Audio Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-2xl mx-auto"
          >
            <GlassCard className="h-64 p-8 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Visualiseur Audio */}
              <div className="flex items-end justify-center gap-1.5 h-32 w-full mb-6">
                {Array.from({ length: BARS_COUNT }).map((_, index) => (
                  <AudioBar key={index} index={index} isPlaying={isPlaying} />
                ))}
              </div>

              {/* Bouton Play/Pause Centré */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
                className="
                  w-16 h-16 rounded-full
                  bg-white text-black
                  flex items-center justify-center
                  transition-all duration-300
                  shadow-[0_0_30px_rgba(255,255,255,0.5)]
                  hover:shadow-[0_0_40px_rgba(255,255,255,0.7)]
                  z-10
                "
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7" fill="currentColor" />
                ) : (
                  <Play className="w-7 h-7 ml-0.5" fill="currentColor" />
                )}
              </motion.button>

              {/* Barre de progression discrète */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/5">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-green to-cyan-500"
                  style={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.1, ease: 'linear' }}
                />
              </div>
            </GlassCard>
          </motion.div>

          {/* Élément Audio Caché */}
          <audio
            ref={audioRef}
            onEnded={() => setIsPlaying(false)}
            className="hidden"
          >
            <source src="/audio/pitch_vocal.m4a" type="audio/mp4" />
          </audio>

          {/* Bouton "Continuer" en bas à droite */}
          <div className="absolute bottom-10 right-10 md:right-12 flex flex-col items-end z-20">
            <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 block text-right">
              Passer à la suite
            </span>
            <NextButton onNext={onNext} static />
          </div>
        </div>
      </div>
    </section>
  )
}

