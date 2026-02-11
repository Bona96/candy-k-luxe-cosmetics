import React from 'react'
// import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Values from './components/Values'
import Manifesto from './components/Manifesto'
import MissionVision3D from './components/VisionMission'
import Goals from './components/Goals'
import CustomCursor from './components/CustomCusor'
import Media from './components/Media'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { StackingSection } from './components/ScrollSections'
import AboutCandyK from './pages/AboutCandyK'
import { footerData } from './assets/constants'
// import { useGlobalContext } from './contexts/GlobalContext'
// import PrivacyPolicy from './pages/PrivacyPolicy'
import { ReactLenis, useLenis } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Testimonials from './components/Testimonials'

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  useLenis(() => {
    ScrollTrigger.update();
  });

  return (
    <ReactLenis root options={{ duration: 1.2, syncTouch: true }}>
      <CustomCursor />
      <div className="bg-brand-bg relative">
        <Navbar />
        
        {/* 1. Introductory Sections (Natural Scroll) */}
        <Hero />
        <Media />
        <AboutCandyK />

        {/* 2. The Interactive Stack (3D Experience) */}
        <div className="relative z-10">
          <StackingSection index={1}><Testimonials /></StackingSection>
          <StackingSection index={2}><MissionVision3D /></StackingSection>
          <StackingSection index={3}><Values /></StackingSection>
          <StackingSection index={4}><Goals /></StackingSection>
          <StackingSection index={5}><Manifesto /></StackingSection>
          
          {/* Contact as the FINAL piece of the stack */}
          <StackingSection index={6}><Contact /></StackingSection>
        </div>

        {/* 3. The Reveal (Footer) */}
        {/* We place the footer at a higher z-index or keep it simple below the stack */}
        <Footer footerInfo={footerData}/>
      </div>
    </ReactLenis>
  );
};

export default App;