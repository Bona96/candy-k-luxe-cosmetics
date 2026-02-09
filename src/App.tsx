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
  // This hook automatically syncs Lenis scroll with GSAP ScrollTrigger
  useLenis(() => {
    ScrollTrigger.update();
  });

  return (
    <ReactLenis 
      root 
      options={{ 
        // autoRaf: true (default) is much safer for mobile
        duration: 1.2,
        syncTouch: true,      // Intercepts touch for smoothing
        touchMultiplier: 1.5, // Natural mobile speed
        orientation: 'vertical',
        gestureOrientation: 'vertical',
      }}
    >
      <div className="flex flex-col justify-center bg-brand-bg relative min-h-screen">
        <CustomCursor />
        <Navbar />
        <Hero />
        <Media />
        <AboutCandyK />
        {/* Sections */}
        <StackingSection index={1}><Testimonials /></StackingSection>
        <StackingSection index={2}><MissionVision3D /></StackingSection>
        <StackingSection index={3}><Values /></StackingSection>
        <StackingSection index={4}><Goals /></StackingSection>
        <StackingSection index={5}><Manifesto /></StackingSection>
        <StackingSection index={6}><Contact /></StackingSection>
        
        <Footer footerInfo={footerData}/>
        
        {/* Grain Overlay - Ensure z-index is lower than buttons */}
        {/* <div className="fixed inset-0 pointer-events-none z-100 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" /> */}
      </div>
    </ReactLenis>
  );
};

export default App;