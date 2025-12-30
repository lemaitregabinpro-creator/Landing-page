'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import IntroOverlay from '@/components/sections/IntroOverlay'
import ChallengeSection from '@/components/sections/ChallengeSection'
import ProfileSection from '@/components/sections/ProfileSection'
import AuditSection from '@/components/sections/AuditSection'
import MVPSection from '@/components/sections/MVPSection'

const slides = [
  { id: 0, component: IntroOverlay },
  { id: 1, component: ChallengeSection },
  { id: 2, component: ProfileSection },
  { id: 3, component: AuditSection },
  { id: 4, component: MVPSection },
]

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const CurrentComponent = slides[currentSlide].component

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="h-full w-full"
        >
          {currentSlide === 0 ? (
            <CurrentComponent onComplete={handleNext} />
          ) : (
            <CurrentComponent onNext={handleNext} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
