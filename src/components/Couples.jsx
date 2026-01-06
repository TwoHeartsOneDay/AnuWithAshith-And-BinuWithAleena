import React from 'react'
import { motion } from 'framer-motion'

const Couples = () => {
  const couples = [
    {
      groom: 'Anumon Jacob',
      bride: 'Dr. Ashith Thomas',
      description: 'A journey of love beginning together',
    },
    {
      groom: 'Binumon Jacob',
      bride: 'Aleena C Jose',
      description: 'Two hearts united in love and devotion',
    },
  ]

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-peach-100 to-peach-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-3 md:mb-4 leading-tight">
            The Couples
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-deepRed to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {couples.map((couple, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <motion.div
                className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-gold/20 relative overflow-hidden"
                whileHover={{ scale: 1.01, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold/50 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold/50 rounded-br-2xl" />

                {/* Background glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepRed/5 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 text-center space-y-6">
                  {/* Groom Name */}
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold tracking-wide leading-tight"
                    whileHover={{ scale: 1.03 }}
                  >
                    {couple.groom}
                  </motion.h3>

                  {/* Heart with animation */}
                  <motion.div
                    className="flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-3xl sm:text-4xl md:text-5xl text-deepRed">❤</span>
                  </motion.div>

                  {/* Bride Name */}
                  <motion.h3
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold tracking-wide leading-tight"
                    whileHover={{ scale: 1.03 }}
                  >
                    {couple.bride}
                  </motion.h3>

                  {/* Divider */}
                  <motion.div
                    className="w-16 h-0.5 bg-deepRed mx-auto my-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                  />

                  {/* Description */}
                  <p className="text-base sm:text-lg md:text-xl font-sans text-gray-700 italic leading-relaxed">
                    {couple.description}
                  </p>

                  {/* Decorative flourish */}
                  <motion.div
                    className="mt-8 text-gold text-2xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.8, duration: 0.8 }}
                  >
                    ✦ ✦ ✦
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Celebration message */}
        <motion.div
          className="mt-12 md:mt-16 text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-deepRed italic leading-relaxed">
            A double celebration of love, family, and unity
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Couples
