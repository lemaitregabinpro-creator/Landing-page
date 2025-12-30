'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react'
import GlassCard from '../ui/GlassCard'
import AnimatedBackground from '../ui/AnimatedBackground'
import NextButton from '../ui/NextButton'

interface ProfileSectionProps {
  onNext: () => void
}

export default function ProfileSection({ onNext }: ProfileSectionProps) {
  // Données du carrousel
  const slides = [
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png',
    '/images/slide4.png',
    '/images/slide5.png',
    '/images/slide6.png',
  ]

  // State pour l'index actuel
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fonction pour aller à la slide précédente (bouclage infini)
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Fonction pour aller à la slide suivante (bouclage infini)
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

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
          className="text-2xl md:text-3xl lg:text-4xl font-mono mb-12 text-center"
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
            {"> 01 //"}
          </span>
          {/* Texte Principal Blanc */}
          <span className="text-gray-100">
            INITIALIZE: The Strategic Download (Context)
          </span>
          {/* Curseur clignotant */}
          <span className="animate-pulse text-neon-green ml-1">_</span>
        </motion.h1>

        {/* Layout principal : Flex colonne sur mobile, ligne sur desktop */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* COLONNE DE GAUCHE : Stack Verticale (Texte + Carte) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex-1 w-full lg:w-auto flex flex-col gap-8"
          >
            {/* 1. Titre */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-3xl font-bold text-white mb-8"
            >
              Learning Curve Verticale
            </motion.h2>

            {/* 2. Corps du Texte */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              <p className="mb-6">
                Malgré mes 20 ans, mon approche intensive sur 3 mois m&apos;a permis de maîtriser rapidement les technologies modernes du développement web.
              </p>
              <p className="mb-6">
                J&apos;ai développé une expertise solide en <strong>React, TypeScript et Next.js</strong>, en construisant des applications performantes avec une attention particulière à l&apos;expérience utilisateur et aux bonnes pratiques de code.
              </p>
              <p>
                Cette courbe d&apos;apprentissage verticale témoigne de ma capacité à assimiler rapidement de nouveaux concepts et à les appliquer dans des projets concrets, transformant chaque défi technique en opportunité de croissance.
              </p>
            </motion.div>

            {/* 3. Image de Setup de Coding */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="relative w-full rounded-xl shadow-lg border border-white/10 overflow-hidden"
            >
              <Image
                src="/images/fiche.png"
                alt="Session de coding intensive"
                width={800}
                height={600}
                className="w-full h-auto rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </motion.div>

          {/* COLONNE DE DROITE : Carrousel + Texte Storytelling */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex-1 w-full lg:w-auto flex flex-col gap-8"
          >
            {/* Carrousel */}
            <div className="flex flex-col items-center">
              {/* Conteneur Principal (Flex Row) : [Bouton Gauche] — [Image] — [Bouton Droite] */}
              <div className="flex items-center justify-center gap-4 md:gap-6 w-full">
                {/* Flèche Navigation Gauche */}
                <motion.button
                  onClick={prevSlide}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    shrink-0
                    w-12 h-12 md:w-14 md:h-14
                    rounded-full
                    bg-black/50 hover:bg-black/70
                    backdrop-blur-sm
                    border border-neon-green/30
                    flex items-center justify-center
                    text-neon-green
                    transition-all duration-300
                    hover:border-neon-green
                    hover:shadow-[0_0_15px_rgba(0,255,136,0.4)]
                  "
                  style={{
                    boxShadow: '0 0 10px rgba(0, 255, 136, 0.1)',
                  }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                {/* Zone des Slides - Conteneur principal simplifié */}
                <div className="
                  aspect-video w-full max-w-3xl min-h-[300px] md:min-h-[400px]
                  relative overflow-hidden rounded-2xl
                  shadow-lg
                ">
                  <Image
                    src={slides[currentIndex]}
                    alt={`Slide ${currentIndex + 1} sur ${slides.length}`}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Flèche Navigation Droite */}
                <motion.button
                  onClick={nextSlide}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    shrink-0
                    w-12 h-12 md:w-14 md:h-14
                    rounded-full
                    bg-black/50 hover:bg-black/70
                    backdrop-blur-sm
                    border border-neon-green/30
                    flex items-center justify-center
                    text-neon-green
                    transition-all duration-300
                    hover:border-neon-green
                    hover:shadow-[0_0_15px_rgba(0,255,136,0.4)]
                  "
                  style={{
                    boxShadow: '0 0 10px rgba(0, 255, 136, 0.1)',
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Compteur de pages (en dessous) */}
              <div className="mt-4 text-center">
                <span className="text-sm font-mono text-gray-400 tracking-widest">
                  {currentIndex + 1} / {slides.length}
                </span>
              </div>
            </div>

            {/* Bloc Texte Storytelling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-left"
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                De la théorie à la pratique.
              </h3>
              <div className="text-lg text-gray-300 leading-relaxed space-y-6">
                <p>
                  La théorie ne vaut rien sans la pratique. Pour cette candidature, j&apos;ai refusé l&apos;approche classique. J&apos;ai préféré simuler une journée type au sein de votre startup : <strong>identifier un besoin, concevoir une solution, et livrer</strong>.
                </p>
                <p>
                  Le résultat ? Ce <span className="text-neon-green font-medium">MVP &apos;Live Immobilier&apos;</span>. Repéré à 15h30, codé et déployé à 19h30 le jour même. Pas de sur-ingénierie, juste l&apos;essentiel pour rendre le produit testable.
                </p>
                <p>
                  C&apos;est ma carte de visite : itérer vite, casser des choses, et surtout, <strong>&apos;Shipper&apos; avant tout le monde</strong>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

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
