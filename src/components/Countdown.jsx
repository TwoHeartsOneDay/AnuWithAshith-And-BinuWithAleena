import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Countdown = () => {
  const weddingDate = new Date('2026-02-14T11:00:00')
  
  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = weddingDate - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        hasEnded: false,
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0, hasEnded: true }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [confetti, setConfetti] = useState([])

  useEffect(() => {
    if (timeLeft.hasEnded && confetti.length === 0) {
      // Generate confetti particles
      const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        color: ['#D4AF37', '#8B1538', '#F5E6D3', '#FFD700'][Math.floor(Math.random() * 4)],
      }))
      setConfetti(particles)
    }
  }, [timeLeft.hasEnded])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ]

  // If wedding has begun, show celebration
  if (timeLeft.hasEnded) {
    return (
      <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-peach-50 via-peach-100 to-peach-200 relative overflow-hidden">
        {/* Confetti Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {confetti.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-3 h-3 rounded-full"
              style={{
                left: `${particle.left}%`,
                backgroundColor: particle.color,
                top: '-10%',
              }}
              animate={{
                y: ['0vh', '110vh'],
                rotate: [0, 360, 720],
                x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gold mb-6"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉 The Wedding Has Begun! 🎉
            </motion.h2>
            
            <motion.p
              className="text-2xl sm:text-3xl md:text-4xl font-sans text-deepRed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Binumon & Aleena | Anumon & Ashith
            </motion.p>

            <motion.div
              className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-700 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Two hearts, one beautiful celebration of love
            </motion.div>

            <motion.div
              className="mt-8 flex justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <motion.span
                className="text-5xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💑
              </motion.span>
              <motion.span
                className="text-5xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                💖
              </motion.span>
              <motion.span
                className="text-5xl"
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💑
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-peach-50 via-peach-100 to-peach-200 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 right-20 w-40 h-40 bg-gold/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-56 h-56 bg-deepRed/10 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gold mb-3 md:mb-4 leading-tight px-2">
            Counting Down to Forever
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-sans text-deepRed mt-3 md:mt-4">
            Until we say "I do"
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-12">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <motion.div
                className="bg-white/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-2 border-gold/30 relative overflow-hidden"
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ duration: 0.3 }}
              >
                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />

                <div className="relative z-10">
                  {/* Number */}
                  <motion.div
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-gold mb-1 md:mb-2"
                    key={unit.value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.div>

                  {/* Label */}
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-sans font-medium text-deepRed uppercase tracking-wider">
                    {unit.label}
                  </div>

                  {/* Decorative line */}
                  <motion.div
                    className="w-12 h-0.5 bg-gold mx-auto mt-3"
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="text-center mt-12 md:mt-16 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-gray-700 italic leading-relaxed">
            Every moment brings us closer to our special day
          </p>
          <motion.div
            className="mt-6 text-gold text-3xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Countdown
