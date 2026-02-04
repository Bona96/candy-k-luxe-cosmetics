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



export const StackingSection = ({ children }: StackingProps) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"] // Track the section as it leaves the top
  });

  // As the section scrolls out:
  // 1. It scales down slightly (0.9)
  // 2. It dims (opacity 0.5)
  // 3. It tilts slightly back (rotateX)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <div ref={container} className="h-screen w-full sticky top-0 overflow-hidden">
      <motion.div 
        style={{ 
          scale, 
          opacity, 
          rotateX,
          transformOrigin: "top center",
          perspective: "1000px" 
        }}
        className="w-full h-full flex items-center justify-center bg-brand-bg shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"
      >
        {children}
      </motion.div>
    </div>
  );
};