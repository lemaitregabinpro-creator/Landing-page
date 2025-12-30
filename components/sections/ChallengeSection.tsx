'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'
import Header from '../layout/Header'
import GlassCard from '../ui/GlassCard'
import AnimatedBackground from '../ui/AnimatedBackground'
import NextButton from '../ui/NextButton'

interface ChallengeSectionProps {
  onNext: () => void
}

export default function ChallengeSection({ onNext }: ChallengeSectionProps) {
  return (
    <section className="h-screen w-full overflow-y-auto overflow-x-hidden scrollbar-thin relative">
      <AnimatedBackground className="fixed inset-0" />
      
      {/* Header Sticky */}
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      
      {/* Contenu Scrollable */}
      <div className="flex flex-col items-center min-h-screen pt-10 pb-20 px-4 md:px-8 relative z-10">
        {/* Layout principal : 3 éléments alignés horizontalement */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          
          {/* À GAUCHE : Le Déclencheur */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <GlassCard 
              className="
                w-[300px] h-[533px]
                p-0 overflow-hidden
                border-2 border-orange-500/30
                hover:border-orange-500/50
                transition-all duration-300
              "
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="relative w-full h-full bg-black/40 rounded-[20px]"
              >
                <Image
                  src="/images/challenge-source.png"
                  alt="L'Annonce LinkedIn - Le Besoin"
                  fill
                  className="object-contain rounded-[20px]"
                  sizes="300px"
                  priority
                />
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* AU CENTRE : Timeline Verticale */}
          <div className="flex flex-col items-center justify-center gap-6">
            {/* 1. Badge "Début : 15h24" (Tout en haut) */}
            <div
              className="
                px-3 py-1 rounded-full
                border border-orange-500/50
                bg-orange-500/10 backdrop-blur-sm
                text-orange-400 text-xs font-mono
                whitespace-nowrap
                shadow-[0_0_10px_rgba(255,165,0,0.2)]
              "
            >
              Début : 15h24
            </div>

            {/* 2. Ligne verticale de connexion */}
            <div className="w-0.5 h-12 bg-gradient-to-b from-orange-500/30 to-neon-green/30" />

            {/* 3. Badge "24H CHRONO" */}
            <div
              className="
                px-4 py-2 md:px-6 md:py-3
                rounded-lg
                border-2 border-neon-green
                bg-neon-green/20
                backdrop-blur-sm
                text-neon-green font-bold text-sm md:text-base
                flex items-center gap-2
                whitespace-nowrap
                shadow-[0_0_25px_rgba(0,255,136,0.5)]
              "
            >
              <Clock className="w-4 h-4 md:w-5 md:h-5" />
              <span>24H CHRONO</span>
            </div>

            {/* 4. Flèche/Loading (Statique) */}
            <div className="relative">
              {/* Ligne de progression */}
              <div className="w-16 md:w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full w-full bg-gradient-to-r from-neon-green to-neon-cyan rounded-full"
                  style={{
                    boxShadow: '0 0 10px rgba(0, 255, 136, 0.6)',
                  }}
                />
              </div>
              
              {/* Icône flèche */}
              <div className="absolute -right-6 md:-right-8 top-1/2 -translate-y-1/2">
                <ArrowRight className="w-6 h-6 md:w-8 md:h-8 text-neon-green" />
              </div>
            </div>

            {/* 5. Ligne verticale de connexion (vers le bas) */}
            <div className="w-0.5 h-12 bg-gradient-to-b from-neon-green/30 to-neon-green/20" />

            {/* 6. Badge "Fin : 19h24" (Tout en bas) */}
            <div
              className="
                px-3 py-1 rounded-full
                border border-neon-green/50
                bg-neon-green/10 backdrop-blur-sm
                text-neon-green text-xs font-mono
                whitespace-nowrap
                shadow-[0_0_10px_rgba(0,255,136,0.2)]
              "
            >
              Fin : 19h24
            </div>
          </div>

          {/* À DROITE : Le Résultat */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <GlassCard 
              className="
                w-[300px] h-[533px]
                p-0 overflow-hidden
                border-2 border-neon-green/30
                hover:border-neon-green/50
                transition-all duration-300
              "
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="relative w-full h-full bg-black/40 rounded-[20px]"
              >
                <Image
                  src="/images/mail-go.jpeg"
                  alt="MVP Déployé & Fonctionnel"
                  fill
                  className="object-contain rounded-[20px]"
                  sizes="300px"
                  priority
                />
              </motion.div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Nouveau bloc de texte */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="max-w-3xl text-center mt-16"
        >
          {/* Titre */}
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-white">3 mois de code. 24 heures d&apos;exécution.</span>{' '}
            <span className="text-neon-green">100% Motivé.</span>
          </h2>
          
          {/* Sous-titre */}
          <p className="text-lg text-gray-300 leading-relaxed">
            L&apos;expérience, c&apos;est ce qu&apos;on a fait hier. La vélocité, c&apos;est ce qu&apos;on est capable de faire aujourd&apos;hui. J&apos;ai relevé ce défi pour vous prouver qu&apos;avec moi, il n&apos;y a pas de temps de latence. Je vois, je construis, je déploie.
          </p>
        </motion.div>

        {/* Bouton Continuer (Static) */}
        <div className="mt-12">
          <NextButton onNext={onNext} static />
        </div>
      </div>
    </section>
  )
}
