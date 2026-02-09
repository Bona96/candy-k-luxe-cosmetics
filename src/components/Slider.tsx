import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type {  Variants } from 'framer-motion';
import { slides } from '../assets/constants';
import { TextSection } from './parts/TextParts';
import { SliderNavBtns } from './Buttons';
import { SliderImage } from './parts/Images';

const Slider: React.FC = () => {
  // 1. Directional State for "Lenis-style" transitions
  const [[page, direction], setPage] = useState([0, 0]);

  // Index math that handles negative numbers correctly
  const index = Math.abs(page % slides.length);

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  // 2. Automated Heartbeat (Autoplay)
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000); // 6 seconds for better readability
    return () => clearInterval(timer);
  }, [paginate]);

  // 3. Animation Variants for a "Depth" Effect
  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      filter: "blur(10px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
      transition: { duration: 0.4 },
    }),
  };

  return (
    <div className="relative flex flex-col w-full h-screen items-center justify-center overflow-hidden pointer-events-auto">
      {/* Dynamic Background Glow that matches the current slide shade */}
      <div 
        className="absolute w-125 h-125 rounded-full opacity-20 blur-[120px] transition-colors duration-1000"
        style={{ backgroundColor: slides[index].color || 'var(--secondary)' }}
      />

      <div className="relative w-full max-w-7xl px-6 md:px-12">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full min-h-125"
          >
            {/* COLUMN 1: IMAGE SECTION */}
            <div className="flex justify-center items-center perspective-1000">
              <SliderImage 
                src={slides[index].image} 
                alt={slides[index].title} 
                // Enhanced floating animation
                animate={{ 
                  y: [0, -25, 0],
                  rotateZ: [0, 3, 0]
                }} 
                transition={{ 
                  repeat: Infinity, 
                  duration: 6, 
                  ease: "easeInOut" 
                }}
                className="rounded-xl w-64 md:w-96 lg:w-100 drop-shadow-[0_40px_60px_rgba(0,0,0,0.3)] select-none"
                page='slider'
              />
            </div>

            {/* COLUMN 2: TEXT CONTENT */}
            <div className="flex flex-col justify-center">
              <TextSection 
                slides={slides} 
                index={index} 
                setIndex={(val: number) => setPage([val, val > index ? 1 : -1])}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls with localized positioning */}
      <div className="absolute bottom-10 md:bottom-20 z-30">
        <SliderNavBtns 
          prevSlide={() => paginate(-1)} 
          nextSlide={() => paginate(1)}
        />
      </div>

      {/* Slide Progress Indicator */}
      <div className="absolute bottom-8 flex gap-3 right-5">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            className={`h-1.5 rounded-full ${i === index ? 'bg-secondary' : 'bg-brand-text/20'}`}
            animate={{ width: i === index ? 32 : 8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;