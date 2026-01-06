import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-[85vh] md:min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-peach-50 via-peach-100 to-peach-200 py-12 md:py-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-deepRed/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-deepRed mb-6 md:mb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          >
            We're Getting Married
          </motion.h1>
        </motion.div>

        {/* Couples Names */}
        <motion.div
          className="space-y-4 sm:space-y-6 md:space-y-8 mb-8 md:mb-12 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {/* Couple 1 */}
          <motion.div
            className="grid items-center gap-1 sm:gap-4 md:gap-8"
            style={{ gridTemplateColumns: '1fr auto 1fr' }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-gold tracking-wide text-right whitespace-nowrap leading-tight">
              Anumon Jacob
            </h2>
            <motion.span
              className="text-lg sm:text-2xl md:text-4xl text-deepRed flex-shrink-0 px-0.5 sm:px-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ❤
            </motion.span>
            <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-gold tracking-wide text-left whitespace-nowrap leading-tight">
              Dr. Ashith Thomas
            </h2>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-20 sm:w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ delay: 0.9, duration: 0.6 }}
          />

          {/* Couple 2 */}
          <motion.div
            className="grid items-center gap-1 sm:gap-4 md:gap-8"
            style={{ gridTemplateColumns: '1fr auto 1fr' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-gold tracking-wide text-right whitespace-nowrap leading-tight">
              Binumon Jacob
            </h2>
            <motion.span
              className="text-lg sm:text-2xl md:text-4xl text-deepRed flex-shrink-0 px-0.5 sm:px-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ❤
            </motion.span>
            <h2 className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-serif font-semibold text-gold tracking-wide text-left whitespace-nowrap leading-tight">
              Aleena C Jose
            </h2>
          </motion.div>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-light text-deepRed mb-3 md:mb-4 leading-tight tracking-wide">
            14 February 2026 • 11:00 AM
          </p>
          <p className="text-base sm:text-lg md:text-2xl font-sans text-gray-600 tracking-wider leading-relaxed">
            CSI Cathedral Church, Kottayam
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-gold rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
