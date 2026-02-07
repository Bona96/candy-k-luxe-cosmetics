import './App.css'
import React, { useEffect, useRef } from 'react'
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

import { ReactLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ... (your other imports)

gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    // 1. Link Lenis to GSAP's Ticker
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    // 2. Ensure ScrollTrigger updates when Lenis scrolls
    lenisRef.current?.lenis?.on('scroll', ScrollTrigger.update)

    return () => {
      gsap.ticker.remove(update)
    }
  }, [])

  return (
    // Add "lenis-content" or similar class if needed, but 'root' usually handles it
    <ReactLenis 
      ref={lenisRef} 
      root 
      options={{ 
        autoRaf: false, 
        duration: 1.2,
        syncTouch: true,      // Essential for mobile responsiveness
        touchMultiplier: 2,   // Makes touch scrolling feel natural
        wheelMultiplier: 1,
      }}
    >
      <div className="bg-brand-bg space-y-0">
        <CustomCursor />
        <Navbar />
        <Hero />
        <Media />
        <AboutCandyK />
        
        {/* Your Stacking Sections */}
        <StackingSection index={1}><MissionVision3D /></StackingSection> 
        <StackingSection index={2}><Values /></StackingSection>
        <StackingSection index={3}><Goals /></StackingSection>
        <StackingSection index={4}><Manifesto /></StackingSection>
        <StackingSection index={5}><Contact /></StackingSection>
        
        <Footer footerInfo={footerData}/>
        
        {/* Grain Overlay */}
        <div className="fixed inset-0 pointer-events-none z-100 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </ReactLenis>
  );
};

export default App;