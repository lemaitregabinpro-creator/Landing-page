'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { useForm } from '@formspree/react'
import AnimatedBackground from '../ui/AnimatedBackground'
import GlassCard from '../ui/GlassCard'
import Footer from '../layout/Footer'

interface MVPSectionProps {
  onNext?: () => void
}

export default function MVPSection({ onNext }: MVPSectionProps) {
  const [state, handleSubmit] = useForm('mnneyjoj')
  const [theme, setTheme] = useState<string>('')
  const [hypeValue, setHypeValue] = useState(50)
  const [roast, setRoast] = useState('')
  const [message, setMessage] = useState('')
  const [pillChoice, setPillChoice] = useState<'red' | 'blue' | null>(null)

  const getHypeFeedback = (value: number) => {
    if (value <= 40) return "Il y a du boulot 🚧"
    if (value <= 80) return "Solide pour 24h 🛠️"
    return "On signe où ? 🚀"
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Formspree gère automatiquement la soumission via handleSubmit
    // Les champs personnalisés sont envoyés via les inputs cachés
    await handleSubmit(e)
  }

  const handlePillClick = (choice: 'red' | 'blue') => {
    setPillChoice(choice)
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
              {"> 03 //"}
            </span>
            {/* Texte Principal Blanc */}
            <span className="text-gray-100">
              ENGAGE JUMP DRIVE: The Twin-Engine Architecture (Execution)
            </span>
            {/* Curseur clignotant */}
            <span className="animate-pulse text-neon-green ml-1">_</span>
          </motion.h1>

          {/* Grid 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* COLONNE DE GAUCHE : Identité du MVP */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col items-center lg:items-start space-y-8"
            >
              {/* Logo avec Pulse */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 136, 0.4)',
                    '0 0 40px rgba(0, 255, 136, 0.6)',
                    '0 0 20px rgba(0, 255, 136, 0.4)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="
                  w-24 h-24 rounded-2xl
                  bg-white/5 backdrop-blur-md
                  border-2 border-neon-green/50
                  flex items-center justify-center
                  p-2
                "
              >
                <Image
                  src="/images/logo1.png"
                  alt="Weliive Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Titre du Projet */}
              <h2 className="text-5xl md:text-6xl font-bold text-white text-center lg:text-left">
                Weliive MVP
              </h2>

              {/* Badge Principal */}
              <div className="
                px-6 py-3 rounded-full
                border-2 border-neon-green/50
                bg-neon-green/10 backdrop-blur-sm
                text-neon-green font-semibold
                text-center lg:text-left
              ">
                Fonctionnalité : Real-Time Matching
              </div>

              {/* Grille de Stats (2x2) */}
              <div className="grid grid-cols-2 gap-4 w-full lg:w-auto">
                <GlassCard className="p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Build Time</p>
                  <p className="text-white font-bold text-lg">24h Chrono</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Stack</p>
                  <p className="text-white font-bold text-lg">Next.js + TypeScript</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Status</p>
                  <p className="text-neon-green font-bold text-lg">Deployed</p>
                </GlassCard>
                <GlassCard className="p-4 text-center">
                  <p className="text-gray-400 text-xs mb-1">Niveau</p>
                  <p className="text-white font-bold text-lg">Échauffement</p>
                </GlassCard>
              </div>

              {/* Bloc Texte Argumentatif */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="
                  text-base text-gray-300
                  max-w-md
                  my-6
                  text-center lg:text-left
                "
              >
                Dans une startup Early Stage, la <span className="text-neon-green font-semibold">vélocité</span> est une question de survie. Ces métriques prouvent qu&apos;avec moi, l&apos;Onboarding sera rapide. Donnez-moi une feature le matin, elle sera <span className="text-neon-green font-semibold">en test l&apos;après-midi</span>.
              </motion.p>

              {/* Bouton d'Action Principal */}
              <motion.a
                href="https://mvp-chatt-weliive.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 255, 136, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                className="
                  w-full lg:w-auto px-8 py-4 rounded-lg
                  border-2 border-neon-green
                  bg-transparent text-neon-green
                  font-bold text-xl
                  flex items-center justify-center gap-3
                  transition-all duration-300
                  hover:bg-neon-green/10
                  hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]
                  cursor-pointer
                  inline-block
                "
              >
                LANCER LE MVP
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* COLONNE DE DROITE : Formulaire Gamifié */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <GlassCard className="p-8">
                {state.succeeded ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <p className="text-neon-green text-lg font-semibold">
                      Message transmis. Le protocole est lancé. Merci pour votre feedback.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-8">
                    {/* Champs cachés pour Formspree */}
                    <input type="hidden" name="theme" value={theme} />
                    <input type="hidden" name="hypeValue" value={hypeValue} />
                    <input type="hidden" name="pillChoice" value={pillChoice === 'red' ? 'On descend au terrier du lapin' : pillChoice === 'blue' ? 'Fin de la simulation' : ''} />
                    
                    {/* 1. Sélecteur de Thème */}
                    <div>
                      <label className="block text-sm text-gray-400 mb-4">
                        Quelle interface a votre vote ?
                      </label>
                      <div className="flex justify-center gap-12">
                        {[
                          { value: 'cyberpunk', image: '/images/bg-theme-1.webp', label: 'Cyberpunk' },
                          { value: 'minimalist', image: '/images/bg-theme-2.webp', label: 'Minimalist' },
                          { value: 'corporate', image: '/images/bg-theme-3.webp', label: 'Corporate' },
                        ].map(({ value, image, label }) => (
                          <motion.button
                            key={value}
                            type="button"
                            onClick={() => setTheme(value)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`
                              w-20 h-20 rounded-full
                              border-2 transition-all duration-300
                              overflow-hidden relative shrink-0
                              ${theme === value
                                ? 'border-neon-green shadow-[0_0_15px_rgba(52,211,153,0.5)]'
                                : 'border-white/10 hover:border-white/20'
                              }
                            `}
                          >
                            {/* Image de fond */}
                            <div className={`
                              absolute inset-0
                              transition-all duration-300
                              ${theme === value ? 'opacity-100 grayscale-0' : 'opacity-50 grayscale'}
                            `}>
                              <Image
                                src={image}
                                alt={label}
                                fill
                                className="object-cover"
                                sizes="80px"
                              />
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* 2. Hype Meter */}
                    <div>
                      <label className="block text-sm text-gray-400 mb-4">
                        Hype Meter : À quel point ce MVP vous a convaincu ?
                      </label>
                      <div className="space-y-3">
                        <input
                          type="range"
                          name="hypeValue"
                          min="0"
                          max="100"
                          value={hypeValue}
                          onChange={(e) => setHypeValue(Number(e.target.value))}
                          className="
                            w-full h-2 rounded-lg
                            bg-white/10
                            appearance-none cursor-pointer
                            [&::-webkit-slider-thumb]:appearance-none
                            [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
                            [&::-webkit-slider-thumb]:rounded-full
                            [&::-webkit-slider-thumb]:bg-neon-green
                            [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(0,255,136,0.6)]
                            [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5
                            [&::-moz-range-thumb]:rounded-full
                            [&::-moz-range-thumb]:bg-neon-green
                            [&::-moz-range-thumb]:border-0
                          "
                        />
                        <div className="flex justify-between items-center">
                          <span className="text-white font-mono text-sm">{hypeValue}%</span>
                          <span className="text-neon-green font-semibold text-sm">
                            {getHypeFeedback(hypeValue)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* 3. Roast Zone */}
                    <div>
                      <label htmlFor="roast" className="block text-sm text-gray-400 mb-2">
                        La &apos;Roast&apos; Zone (Critiques)
                      </label>
                      <textarea
                        id="roast"
                        name="roast"
                        value={roast}
                        onChange={(e) => setRoast(e.target.value)}
                        rows={4}
                        className="
                          w-full px-4 py-3 rounded-lg
                          bg-white/5 backdrop-blur-sm
                          border border-white/10
                          text-white placeholder-gray-500
                          focus:outline-none focus:border-neon-green
                          focus:ring-2 focus:ring-neon-green/20
                          transition-all duration-300
                          resize-none
                        "
                        placeholder="Soyez brutaux. Qu'est-ce qui manque ? Qu'est-ce qui a buggé ? J'apprends de mes erreurs, dites-moi tout."
                      />
                    </div>

                    {/* 4. Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                        Un dernier mot ?
                      </label>
                      <input
                        type="text"
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="
                          w-full px-4 py-3 rounded-lg
                          bg-white/5 backdrop-blur-sm
                          border border-white/10
                          text-white placeholder-gray-500
                          focus:outline-none focus:border-neon-green
                          focus:ring-2 focus:ring-neon-green/20
                          transition-all duration-300
                        "
                        placeholder="Détails sur le poste, disponibilités, ou juste un feedback..."
                      />
                    </div>

                    {/* 5. Le Final : Pilule Rouge ou Bleue */}
                    <div className="pt-4 border-t border-white/10 space-y-6">
                      <div>
                        <h3 className="text-white font-bold text-lg mb-1">
                          Le choix de Morphée
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Il n&apos;y a pas de retour en arrière.
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center gap-8">
                        {/* 🔴 PILULE ROUGE - Image Simple */}
                        <motion.button
                          type="button"
                          onClick={() => handlePillClick('red')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative w-64 aspect-[3/1] shrink-0 cursor-pointer ${
                            pillChoice === 'red' ? 'ring-2 ring-neon-green ring-offset-2 ring-offset-transparent' : ''
                          }`}
                        >
                          <Image
                            src="/images/pilule-rouge.png"
                            alt="Pilule Rouge - On descend au terrier du lapin"
                            fill
                            className="object-contain"
                            priority
                            sizes="256px"
                          />
                        </motion.button>

                        {/* 🔵 PILULE BLEUE - Image Simple */}
                        <motion.button
                          type="button"
                          onClick={() => handlePillClick('blue')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`relative w-64 aspect-[3/1] shrink-0 cursor-pointer ${
                            pillChoice === 'blue' ? 'ring-2 ring-neon-green ring-offset-2 ring-offset-transparent' : ''
                          }`}
                        >
                          <Image
                            src="/images/pilule-bleue.png"
                            alt="Pilule Bleue - Fin de la simulation"
                            fill
                            className="object-contain"
                            priority
                            sizes="256px"
                          />
                        </motion.button>
                      </div>
                    </div>

                    {/* Bouton d'envoi */}
                    <div className="pt-4">
                      <motion.button
                        type="submit"
                        disabled={state.submitting || !pillChoice}
                        whileHover={{ scale: state.submitting ? 1 : 1.05 }}
                        whileTap={{ scale: state.submitting ? 1 : 0.95 }}
                        className="
                          w-full px-6 py-3 rounded-lg
                          bg-neon-green/10 backdrop-blur-sm
                          border-2 border-neon-green
                          text-neon-green font-semibold
                          transition-all duration-300
                          hover:bg-neon-green/20
                          hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]
                          disabled:opacity-50 disabled:cursor-not-allowed
                          disabled:hover:scale-100
                        "
                      >
                        {state.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
                      </motion.button>
                    </div>

                    {/* Message d'erreur */}
                    {state.errors && Object.keys(state.errors).length > 0 && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm text-center"
                      >
                        Erreur lors de l&apos;envoi. Veuillez réessayer.
                      </motion.p>
                    )}
                  </form>
                )}
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  )
}

