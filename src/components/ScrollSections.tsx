import { useRef } from 'react';
import { motion, useScroll, useTransform} from 'framer-motion';
import type { StackingProps } from '../types/types';

// This wrapper makes any section "pop" and "fade" in 3D space as it enters
export const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100, scale: 0.9, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // Custom "Luxe" cubic-bezier
      }}
      className="h-screen w-full flex items-center perspective-1000" // Adds 3D depth
    >
      {children}
    </motion.section>
  );
};

export const LuxurySection = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Section starts tilted back and scales up as it reaches center
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center justify-center sticky top-0 overflow-hidden">
      <motion.div 
        style={{ rotateX, opacity, scale, perspective: "1000px" }}
        className="w-full h-screen flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  );
};
//${index % 2 === 0 ? 'border-primary' : 'border-secondary'}
export const StackingSection = ({ children, index }: StackingProps) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  // 3D & Spatial Transforms
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const translateZ = useTransform(scrollYProgress, [0, 1], [0, -300]);
  
  // Glassmorphism Visuals
  // As the section stacks, it becomes more transparent and the blur intensifies
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]); 
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(12px)"]);

  // Fix for your Form Interaction
  const pointerEvents = useTransform(scrollYProgress, [0, 0.4], ['auto', 'none']);

  return (
    <div 
      ref={container} 
      style={{ perspective: "1500px" }} 
      className="min-h-screen w-full sticky top-0 py-4"
    >
      <motion.div 
        style={{ 
          scale, 
          opacity, 
          rotateX,
          z: translateZ,
          backdropFilter: blur, // Animates the frostiness
          pointerEvents,
          transformOrigin: "top center",
        }}
        className={`w-full min-h-[90vh] flex flex-col justify-start 
          bg-brand-bg/80 border border-white/20 
          rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
          overflow-hidden relative ${index % 2 === 0 ? 'border-primary' : 'border-secondary'}
        `}
      >
        {/* Glossy Reflection Overlay */}
        <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Content Container */}
        <div className="relative z-20 h-full w-full">
          {children}
        </div>

        {/* Dynamic Darkener: adds depth as it moves away */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 0.4]) }} 
          className="absolute inset-0 bg-black pointer-events-none" 
        />
      </motion.div>
    </div>
  );
};