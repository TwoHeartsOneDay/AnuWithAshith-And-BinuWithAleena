import React from 'react'
import { motion } from 'framer-motion'

const OurStory = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-peach-200 via-peach-100 to-peach-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-4 md:mb-6 leading-tight px-2">
            A Bond Beyond Words
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-deepRed to-transparent mx-auto" />
        </motion.div>

        <motion.div
          className="bg-white/50 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl border border-gold/20 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-gold/30 rounded-tl-2xl md:rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-gold/30 rounded-br-2xl md:rounded-br-3xl" />

          {/* Quote mark */}
          <motion.div
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-gold/20 absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.2, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            "
          </motion.div>

          <div className="relative z-10 space-y-6 md:space-y-8 text-center">
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-gold leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              "This is the Lord's doing; it is marvelous in our eyes." - Psalms 118:23
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-deepRed leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Today, two brothers embark on a journey side by side, as they always have.
            </motion.p>

            <motion.div
              className="py-4 md:py-6"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <span className="text-3xl sm:text-4xl md:text-5xl text-gold">✦</span>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <span className="text-gold font-semibold">Anumon</span> and{' '}
              <span className="text-gold font-semibold">Binumon</span>, brothers not just by blood but by spirit, 
              have chosen to begin their married lives together, on the same blessed day.
            </motion.p>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75, duration: 0.6 }}
            >
              United with their soulmates,{' '}
              <span className="text-gold font-semibold">Dr. Ashith</span> and{' '}
              <span className="text-gold font-semibold">Aleena</span>, they write a new chapter
              where love multiplies and joy knows no bounds.
            </motion.p>

            <motion.div
              className="pt-6 md:pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-serif text-deepRed italic font-medium leading-relaxed">
                Two weddings, one heart, infinite blessings
              </p>
              <motion.div
                className="mt-6 text-gold text-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ❤ ❤
              </motion.div>
            </motion.div>
          </div>

          {/* Closing quote mark */}
          <motion.div
            className="text-8xl md:text-9xl font-serif text-gold/20 absolute bottom-8 right-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 0.2, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            "
          </motion.div>
        </motion.div>

        {/* Bottom decorative text */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <p className="text-lg md:text-xl font-sans text-gray-600 italic">
            A celebration of family, love, and the beautiful journey ahead
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory
