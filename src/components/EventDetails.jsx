import React from 'react'
import { motion } from 'framer-motion'

const EventDetails = () => {
  const events = [
    {
      title: 'Wedding Ceremony',
      icon: '💒',
      date: '14 February 2026',
      time: '11:00 AM',
      venue: 'CSI Holy Trinity Cathedral',
      location: 'Kottayam',
      description: 'Witness the sacred union of two beautiful couples in the presence of God, family, and friends.',
    },
    {
      title: 'Reception',
      icon: '🎊',
      date: '14 February 2026',
      time: 'Celebrate with us',
      venue: 'Benjamin Bailey Auditorium',
      location: 'Kottayam',
      description: 'Join us for an evening of joy, music, and celebration as we begin our new journey together.',
    },
  ]

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-peach-50 via-peach-100 to-peach-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-deepRed/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-3 md:mb-4 leading-tight px-2">
            Wedding Events
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-sans text-deepRed mt-3 md:mt-4 px-2">
            Mark your calendars for these special moments
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-deepRed to-transparent mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <motion.div
                className="bg-white/60 backdrop-blur-lg rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-gold/30 relative overflow-hidden h-full"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepRed/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-2 md:border-t-4 border-l-2 md:border-l-4 border-gold/40 rounded-tl-2xl md:rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b-2 md:border-b-4 border-r-2 md:border-r-4 border-gold/40 rounded-br-2xl md:rounded-br-3xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl sm:text-6xl md:text-7xl mb-4 md:mb-6 text-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {event.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gold text-center mb-3 md:mb-4 tracking-wide leading-tight">
                    {event.title}
                  </h3>

                  {/* Divider */}
                  <motion.div
                    className="w-16 sm:w-20 h-0.5 bg-deepRed mx-auto mb-4 md:mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 'auto' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                  />

                  {/* Date */}
                  <p className="text-xl sm:text-2xl md:text-3xl font-serif text-deepRed text-center mb-2 font-semibold leading-tight">
                    {event.date}
                  </p>

                  {/* Time description */}
                  <p className="text-base sm:text-lg md:text-xl font-sans text-gray-600 text-center mb-4 md:mb-6 italic">
                    {event.time}
                  </p>

                  {/* Venue details */}
                  <div className="bg-white/60 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 mb-4 md:mb-6 border border-gold/20">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-xl sm:text-2xl mr-2 sm:mr-3">📍</span>
                      <h4 className="text-lg sm:text-xl md:text-2xl font-serif font-semibold text-gold leading-tight">
                        {event.venue}
                      </h4>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl font-sans text-gray-700 text-center">
                      {event.location}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg font-sans text-gray-700 text-center leading-relaxed">
                    {event.description}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    className="mt-6 text-center text-gold text-xl"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
                  >
                    ✦ ✦ ✦
                  </motion.div>
                </div>
              </motion.div>
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
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-deepRed italic font-medium leading-relaxed">
            Your presence would make our day complete
          </p>
          <motion.div
            className="mt-4 text-gold text-3xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default EventDetails
