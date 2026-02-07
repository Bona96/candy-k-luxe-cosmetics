import Ballpit from '../assets/3d/Ballpit.tsx';
import { useDarkMode } from '../contexts/DarkModeContext.tsx';
import Slider from './Slider.tsx';

const Hero = () => {
  const { theme } = useDarkMode();

  // Define our "Candy" palettes based on the design system
  const lightModeColors = ['#db2777', '#6d28d9', '#f5f3ff', '#ffffff']; // Deep Pink, Vivid Purple, Soft Lavender
  const darkModeColors = ['#a78bfa', '#f472b6', '#1e112f', '#0f0716'];  // Lavender, Soft Pink, Dark Grape

  return (
    <section id='hero' className="relative h-screen w-full overflow-hidden bg-brand-bg">
      {/* Background Layer: Ballpit */}
      <div className="absolute inset-0 z-0">
        <Ballpit 
          count={100} 
          // The Ballpit now re-renders or updates colors when the theme shifts
          colors={theme === 'light' ? lightModeColors : darkModeColors}
          gravity={0.01} 
          friction={0.9975} 
          wallBounce={0.95} 
          followCursor={false} 
        />
      </div>

      {/* Reusable Slider Layer (Layer 2 & 3 Combined) */}
      <div className="relative z-10 w-full h-full">
        <Slider />
      </div>

      {/* Luxe Vignette Overlay to focus the center */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle,transparent_20%,var(--brand-bg)_100%)] opacity-60" />
    </section>
  );
};

export default Hero;