import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-peach-100 via-peach-200 to-peach-300 py-12 md:py-20 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-deepRed/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Main invitation message */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl mb-6 md:mb-8"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💕
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold mb-6 md:mb-8 leading-tight px-2">
            Join Us in Celebration
          </h2>

          <motion.div
            className="w-24 sm:w-28 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-deepRed to-transparent mx-auto mb-6 md:mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 'auto' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="bg-white/50 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border-2 border-gold/30 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-gold/30 rounded-tl-2xl md:rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-gold/30 rounded-br-2xl md:rounded-br-3xl" />

            <div className="relative z-10 space-y-5 md:space-y-6">
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                Your presence would be the greatest gift as we celebrate not one, but{' '}
                <span className="text-deepRed font-bold">two beautiful unions</span> of love and commitment.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Together, let us witness{' '}
                <span className="text-gold font-bold">Anumon & Dr. Ashith</span> and{' '}
                <span className="text-gold font-bold">Binumon & Aleena</span> begin their journey of forever.
              </motion.p>

              <motion.div
                className="pt-3 md:pt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.6 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-deepRed italic font-bold leading-tight">
                  With love and blessings,
                </p>
                <p className="text-base sm:text-lg md:text-xl font-serif text-gray-700 mt-3 md:mt-4">
                  Families and Friends
                </p>
              </motion.div>

              <motion.div
                className="pt-4 md:pt-6 text-gold text-2xl sm:text-3xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✦ ✦ ✦
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Date reminder */}
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-gold/20 via-deepRed/20 to-gold/20 rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 border border-gold/30">
            <p className="text-base sm:text-lg md:text-xl font-sans text-gray-700 mb-2">
              Save the Date
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-deepRed leading-tight">
              14 February 2026
            </p>
            <motion.div
              className="mt-4 text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💖
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright and credits */}
        <motion.div
          className="text-center space-y-3 md:space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.95, duration: 0.6 }}
        >
          <div className="w-32 sm:w-40 md:w-48 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4 md:mb-6" />
          
          <p className="text-sm sm:text-base md:text-lg font-sans text-gray-600">
            A Twin Wedding Celebration
          </p>
          
          <p className="text-xs sm:text-sm md:text-base font-sans text-gray-500 leading-relaxed">
            © 2026 • Created with love for Binumon & Aleena | Anumon & Dr. Ashith
          </p>

          <motion.div
            className="pt-3 md:pt-4 flex items-center justify-center gap-3 sm:gap-4 text-xl sm:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
            <span className="text-deepRed">❤</span>
            <motion.span
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
