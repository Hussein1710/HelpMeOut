import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Features from '../Components/Features'
import HowItWorks from '../Components/HowItWorks'
import Footer from '../Components/Footer'

const LandingPage = () => {
  return (
    <div className="bg-[#faf9f9] flex flex-col">
    <Navbar />
    <HeroSection />
    <Features />
    <HowItWorks />
    <Footer />
  </div>
  )
}

export default LandingPage