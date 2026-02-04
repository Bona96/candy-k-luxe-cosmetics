import Ballpit from '../assets/3d/Ballpit.tsx';
import Slider from './Slider.tsx';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-bg">
      {/* Background Layer: Ballpit */}
      <div className="absolute inset-0 z-0">
        <Ballpit 
          count={100} 
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
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_20%,var(--brand-bg)_100%)] opacity-60" />
    </section>
  );
};

export default Hero;