'use client'

import { motion } from 'framer-motion'
import { Github, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="
      w-full py-12
      border-t border-white/10
      bg-[#0a0e27]/30 backdrop-blur-sm
    ">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Conteneur Principal */}
        <div className="flex flex-col items-center gap-6">
          {/* Titre Optionnel */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-500 font-mono uppercase tracking-widest"
          >
            Access the Source Code
          </motion.p>

          {/* Boutons (Flex horizontal sur desktop, vertical sur mobile) */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Bouton 1 : Repo MVP */}
            <motion.a
              href="https://github.com/lemaitregabinpro-creator/MVP-Chat"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center gap-2
                px-6 py-3 rounded-lg
                bg-white/5 backdrop-blur-sm
                border border-white/10
                text-gray-300 font-medium
                transition-all duration-300
                hover:border-neon-green hover:text-neon-green
                hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]
              "
            >
              <Github className="w-5 h-5" />
              <span>Repo MVP</span>
            </motion.a>

            {/* Bouton 2 : Repo Portfolio */}
            <motion.a
              href="https://github.com/lemaitregabinpro-creator/Landing-page"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center gap-2
                px-6 py-3 rounded-lg
                bg-white/5 backdrop-blur-sm
                border border-white/10
                text-gray-300 font-medium
                transition-all duration-300
                hover:border-purple-500 hover:text-purple-400
                hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]
              "
            >
              <Github className="w-5 h-5" />
              <span>Repo Portfolio</span>
            </motion.a>

            {/* Bouton 3 : Instagram */}
            <motion.a
              href="https://www.instagram.com/smartunityia/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                flex items-center gap-2
                px-6 py-3 rounded-lg
                bg-white/5 backdrop-blur-sm
                border border-white/10
                text-gray-300 font-medium
                transition-all duration-300
                hover:border-pink-500 hover:text-pink-500
                hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]
              "
            >
              <Instagram className="w-5 h-5" />
              <span>SmartUnity AI</span>
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xs text-gray-600 font-mono mt-8"
          >
            © 2024 Built with Next.js & Tailwind CSS.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

