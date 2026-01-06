import React from 'react'
import { motion } from 'framer-motion'

const Locations = () => {
  const locations = [
    {
      name: 'CSI Holy Trinity Cathedral',
      type: 'Wedding Ceremony',
      address: 'Kottayam, Kerala',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.7234!2d76.5220!3d9.5915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba56fc0e88d%3A0x5e8c5e5e5e5e5e5e!2sCSI%20Cathedral%20Church%2C%20Kottayam!5e0!3m2!1sen!2sin!4v1234567890',
      icon: '⛪',
    },
    {
      name: 'Benjamin Bailey Auditorium',
      type: 'Reception',
      address: 'Kottayam, Kerala',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.8234!2d76.5240!3d9.5895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ba56fc0e99e%3A0x6f9d6f9d6f9d6f9d!2sBenjamin%20Bailey%20Auditorium%2C%20Kottayam!5e0!3m2!1sen!2sin!4v1234567890',
      icon: '🏛️',
    },
  ]

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-peach-200 via-peach-100 to-peach-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-3 md:mb-4 leading-tight px-2">
            Find Us Here
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-sans text-deepRed mt-3 md:mt-4 px-2">
            Locations for our special day
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-deepRed to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="space-y-8 md:space-y-12 lg:space-y-16">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="bg-white/60 backdrop-blur-lg rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-2 border-gold/30">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Info Section */}
                  <motion.div
                    className="p-6 sm:p-8 md:p-12 flex flex-col justify-center relative overflow-hidden order-2 lg:order-1"
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background decoration */}
                    <motion.div
                      className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {location.icon}
                      </motion.div>

                      {/* Type badge */}
                      <motion.div
                        className="inline-block mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className="bg-gradient-to-r from-gold to-gold-dark text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-sans font-semibold uppercase tracking-wider shadow-lg">
                          {location.type}
                        </span>
                      </motion.div>

                      {/* Name */}
                      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gold mb-3 md:mb-4 leading-tight">
                        {location.name}
                      </h3>

                      {/* Divider */}
                      <motion.div
                        className="w-20 sm:w-24 h-0.5 md:h-1 bg-deepRed mb-4 md:mb-6"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                      />

                      {/* Address */}
                      <div className="flex items-start mb-4 md:mb-6">
                        <span className="text-xl sm:text-2xl mr-2 sm:mr-3 mt-0.5 sm:mt-1">📍</span>
                        <p className="text-lg sm:text-xl md:text-2xl font-sans text-gray-700 leading-relaxed">
                          {location.address}
                        </p>
                      </div>

                      {/* Get Directions Button */}
                      <motion.a
                        href={`https://www.google.com/maps/search/${encodeURIComponent(location.name + ' ' + location.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-deepRed to-deepRed-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-sans font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                        whileHover={{ scale: 1.03, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Get Directions</span>
                        <span className="text-xl">→</span>
                      </motion.a>

                      {/* Decorative element */}
                      <motion.div
                        className="mt-8 text-gold text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
                      >
                        ✦ ✦ ✦
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Map Section */}
                  <motion.div
                    className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-full lg:min-h-[400px] order-1 lg:order-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-deepRed/20 rounded-r-3xl overflow-hidden">
                      <iframe
                        src={location.mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map for ${location.name}`}
                        className="w-full h-full"
                      />
                    </div>

                    {/* Overlay border */}
                    <div className="absolute inset-0 border-2 md:border-4 border-gold/20 rounded-r-2xl md:rounded-r-3xl pointer-events-none" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="text-center mt-12 md:mt-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-700 italic leading-relaxed">
            We can't wait to see you there
          </p>
          <motion.div
            className="mt-4 text-deepRed text-3xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ❤
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Locations
