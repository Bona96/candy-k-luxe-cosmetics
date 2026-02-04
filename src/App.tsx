import './App.css'
import React, { useEffect } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Values from './components/Values'
import Manifesto from './components/Manifesto'
import MissionVision3D from './components/VisionMission'
import Goals from './components/Goals'
import CustomCursor from './components/CustomCusor'
import Media from './components/Media'

const App: React.FC = () => {
  const SmoothScroll = () => {
    useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        infinite: false,
      })

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
      return () => lenis.destroy()
    }, [])

    return null
  }
  return (
    <div className="relative bg-brand-bg">
      <SmoothScroll />
      <CustomCursor />
      <Navbar />
      
      <main>
        {/* Sections fade and transition based on the LuxurySection wrapper */}
        <Hero />
        <Media />
        <MissionVision3D />
        <div className="space-y-0"> {/* Use space-y-0 because sections are h-screen sticky */}
          <Values />
          <Goals />
          <Manifesto />
        </div>
      </main>
      
      {/* Optional: Add a subtle grain overlay for a film-like texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default App;

// const App = () => {

//   // Add this to your main layout or App.tsx
//   const SmoothScroll = () => {
//     useEffect(() => {
//       const lenis = new Lenis({
//         duration: 1.2,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//         wheelMultiplier: 1,
//         infinite: false,
//       })

//       function raf(time: number) {
//         lenis.raf(time)
//         requestAnimationFrame(raf)
//       }

//       requestAnimationFrame(raf)
//       return () => lenis.destroy()
//     }, [])

//     return null
//   }
//   return (
//     <div className='relative flex flex-col justify-center items-center min-h-screen py-2'>
//       {/* <h1>Candy K</h1> */}
//       <Navbar />
//       <Hero />
//       <MissionVision3D />
//       <FadeInSection>
//         <Values />
//       </FadeInSection>
//       <Goals />
//       <Manifesto />
//     </div>
//   )
// }

// export default App
