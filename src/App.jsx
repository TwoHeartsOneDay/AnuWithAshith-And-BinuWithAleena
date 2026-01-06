import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Couples from './components/Couples'
import Countdown from './components/Countdown'
import OurStory from './components/OurStory'
import EventDetails from './components/EventDetails'
import Locations from './components/Locations'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Couples />
      <Countdown />
      <OurStory />
      <EventDetails />
      <Locations />
      <Footer />
    </div>
  )
}

export default App
