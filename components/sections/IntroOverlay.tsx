'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface IntroOverlayProps {
  onComplete?: () => void
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [line1, setLine1] = useState('')
  const [builderText, setBuilderText] = useState('')
  const [line2, setLine2] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const currentIndexRef = useRef(0)
  const builderIndexRef = useRef(0)
  const stateRef = useRef<'typing-line1' | 'pausing' | 'deleting' | 'typing-builder' | 'pausing-after-builder' | 'typing-line2' | 'complete'>('typing-line1')

  // Séquence de texte
  const line1Text = '> Analyse du profil : Junior...'
  const builderTextValue = 'Builder.'
  const line2Text = '> Mode : Fast Execution.'

  // Vitesses (en ms)
  const TYPING_SPEED = 60
  const DELETING_SPEED = 40
  const PAUSE_AFTER_LINE1 = 800
  const PAUSE_AFTER_BUILDER = 500
  const CHARS_TO_DELETE = 9 // "Junior..."

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    let isMounted = true

    const typeNext = () => {
      if (!isMounted) return
      
      const currentIndex = currentIndexRef.current
      const currentState = stateRef.current

      if (currentState === 'typing-line1') {
        // Étape 1 : Écrire "> Analyse du profil : Junior..."
        if (currentIndex < line1Text.length) {
          setIsTyping(true)
          setLine1(line1Text.slice(0, currentIndex + 1))
          currentIndexRef.current = currentIndex + 1
          timeoutId = setTimeout(typeNext, TYPING_SPEED)
        } else {
          // Fin de la ligne 1, passer à la pause
          setIsTyping(false)
          stateRef.current = 'pausing'
          currentIndexRef.current = 0
          timeoutId = setTimeout(typeNext, PAUSE_AFTER_LINE1)
        }
      } else if (currentState === 'pausing') {
        // Étape 2 : Pause terminée, commencer l'effacement
        stateRef.current = 'deleting'
        setIsDeleting(true)
        setIsTyping(true)
        currentIndexRef.current = line1Text.length
        timeoutId = setTimeout(typeNext, 100)
      } else if (currentState === 'deleting') {
        // Étape 3 : Effacer les 9 derniers caractères
        if (currentIndex > line1Text.length - CHARS_TO_DELETE) {
          setLine1(line1Text.slice(0, currentIndex - 1))
          currentIndexRef.current = currentIndex - 1
          timeoutId = setTimeout(typeNext, DELETING_SPEED)
        } else {
          // Fin de l'effacement, commencer à écrire "Builder."
          setIsDeleting(false)
          setIsTyping(true)
          stateRef.current = 'typing-builder'
          currentIndexRef.current = 0
          timeoutId = setTimeout(typeNext, 200)
        }
      } else if (currentState === 'typing-builder') {
        // Étape 4 : Écrire "Builder."
        const builderIndex = builderIndexRef.current
        if (builderIndex < builderTextValue.length) {
          setIsTyping(true)
          setBuilderText(builderTextValue.slice(0, builderIndex + 1))
          builderIndexRef.current = builderIndex + 1
          timeoutId = setTimeout(typeNext, TYPING_SPEED)
        } else {
          // Fin de "Builder.", pause puis nouvelle ligne
          setIsTyping(false)
          stateRef.current = 'pausing-after-builder'
          currentIndexRef.current = 0
          timeoutId = setTimeout(typeNext, PAUSE_AFTER_BUILDER)
        }
      } else if (currentState === 'pausing-after-builder') {
        // Étape 5 : Pause terminée, commencer la ligne 2
        stateRef.current = 'typing-line2'
        setIsTyping(true)
        currentIndexRef.current = 0
        timeoutId = setTimeout(typeNext, 200)
      } else if (currentState === 'typing-line2') {
        // Étape 6 : Écrire "> Mode : Fast Execution."
        if (currentIndex < line2Text.length) {
          setIsTyping(true)
          setLine2(line2Text.slice(0, currentIndex + 1))
          currentIndexRef.current = currentIndex + 1
          timeoutId = setTimeout(typeNext, TYPING_SPEED)
        } else {
          // Fin de toutes les étapes
          setIsTyping(false)
          stateRef.current = 'complete'
          timeoutId = setTimeout(() => {
            if (isMounted) {
              setIsVisible(false)
              if (onComplete) {
                setTimeout(() => onComplete(), 1000)
              }
            }
          }, 1500)
        }
      }
    }

    // Démarrer l'animation après un court délai
    timeoutId = setTimeout(typeNext, 300)

    return () => {
      isMounted = false
      clearTimeout(timeoutId)
    }
  }, [onComplete])

  // Animation du curseur clignotant (rythme rapide)
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 400)

    return () => clearInterval(cursorInterval)
  }, [])

  // Afficher le curseur si on est en train de taper ou si la séquence n'est pas complète
  const isComplete = stateRef.current === 'complete'
  const showCursor = (!isComplete || isTyping) && cursorVisible

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
          }}
        >
          {/* Background avec dégradé radial */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgb(15 23 42) 0%, rgb(10 14 39) 50%, rgb(0 0 0) 100%)',
            }}
          />
          
          {/* Texture de grille/points en arrière-plan */}
          <div 
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Glow vert/cyan derrière le terminal */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div 
              className="absolute w-[600px] h-[400px] blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15) 0%, rgba(0, 204, 255, 0.1) 50%, transparent 70%)',
              }}
            />
          </motion.div>

          {/* Terminal Container - Réacteur à Fusion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-3xl mx-4"
          >
            {/* Conteneur Principal - Effet Tube Néon */}
            <div 
              className="
                bg-black/60 backdrop-blur-xl
                border-[6px] border-gray-900 rounded-3xl
                overflow-hidden
              "
              style={{
                boxShadow: `
                  0 0 40px -10px rgba(139, 92, 246, 0.8),
                  0 0 80px -20px rgba(16, 185, 129, 0.8),
                  0 0 120px -30px rgba(139, 92, 246, 0.6),
                  inset 0 0 60px rgba(16, 185, 129, 0.1)
                `,
              }}
            >
              {/* Header Bar - Neural Link */}
              <div className="
                bg-black/40 backdrop-blur-sm
                border-b border-white/10
                px-4 py-3
                flex items-center justify-between
              ">
                {/* 3 points lumineux qui pulsent (heartbeat) */}
                <div className="flex gap-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 1.2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                    style={{
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                    }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 1.2,
                      repeat: Infinity,
                      delay: 0.2,
                      ease: 'easeInOut'
                    }}
                    style={{
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                    }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-white"
                    animate={{ 
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 1.2,
                      repeat: Infinity,
                      delay: 0.4,
                      ease: 'easeInOut'
                    }}
                    style={{
                      boxShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
                    }}
                  />
                </div>
                
                {/* Texte central - Neural Link */}
                <div className="flex-1 text-center">
                  <span 
                    className="
                      text-neon-green font-mono text-xs md:text-sm
                      uppercase tracking-wider
                    "
                    style={{
                      textShadow: '0 0 10px rgba(16, 185, 129, 0.8), 0 0 20px rgba(16, 185, 129, 0.4)',
                    }}
                  >
                    // INITIATING_NEURAL_LINK
                  </span>
                </div>
                
                {/* Espaceur pour l'alignement */}
                <div className="w-[60px]" />
              </div>

              {/* Contenu du Terminal */}
              <div className="p-6 md:p-8 lg:p-10">
                <div className="font-mono text-base md:text-lg lg:text-xl">
                  {/* Ligne 1 avec correction */}
                  <div className="my-4">
                    <span 
                      className="text-neon-green"
                      style={{
                        textShadow: '0 0 10px rgba(0, 255, 136, 0.8), 0 0 20px rgba(0, 255, 136, 0.4)',
                      }}
                    >
                      {line1}
                    </span>
                    {builderText && (
                      <span 
                        className="text-neon-green font-bold"
                        style={{
                          textShadow: '0 0 15px rgba(0, 255, 136, 1), 0 0 25px rgba(0, 255, 136, 0.6)',
                        }}
                      >
                        {builderText}
                      </span>
                    )}
                    {(stateRef.current === 'typing-line1' || stateRef.current === 'pausing' || stateRef.current === 'deleting' || stateRef.current === 'typing-builder' || stateRef.current === 'pausing-after-builder') && showCursor && (
                      <motion.span
                        className="
                          inline-block font-black text-white
                          ml-2
                        "
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ 
                          duration: 0.4,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                        style={{
                          textShadow: `
                            0 0 10px #fff,
                            0 0 20px #10B981,
                            0 0 30px #10B981,
                            0 0 40px #10B981
                          `,
                          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 1)) drop-shadow(0 0 12px rgba(16, 185, 129, 1))',
                        }}
                      >
                        |
                      </motion.span>
                    )}
                  </div>
                  
                  {/* Ligne 2 */}
                  {line2 && (
                    <div className="my-4">
                      <span 
                        className="text-neon-green"
                        style={{
                          textShadow: '0 0 10px rgba(0, 255, 136, 0.8), 0 0 20px rgba(0, 255, 136, 0.4)',
                        }}
                      >
                        {line2}
                      </span>
                      {stateRef.current === 'typing-line2' && showCursor && (
                        <motion.span
                          className="
                            inline-block font-black text-white
                            ml-2
                          "
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ 
                            duration: 0.4,
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                          style={{
                            textShadow: `
                              0 0 10px #fff,
                              0 0 20px #10B981,
                              0 0 30px #10B981,
                              0 0 40px #10B981
                            `,
                            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 1)) drop-shadow(0 0 12px rgba(16, 185, 129, 1))',
                          }}
                        >
                          |
                        </motion.span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
