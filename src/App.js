import React from 'react'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import PortfolioSection from './PortfolioSection'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import FooterSection from './FooterSection'
import CopyrightSection from './CopyrightSection'
const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
      <CopyrightSection />
    </div>
  )
}
export default App
