import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slides } from '../assets/constants';

const Slider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 1.2, rotateY: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Layer 2: The Image (Floating 3D Effect) */}
          <motion.img
            src={slides[index].image}
            alt={slides[index].name}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="w-[280px] md:w-[450px] drop-shadow-[0_50px_50px_rgba(0,0,0,0.3)] z-10"
          />

          {/* Layer 3: The Typography Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-20">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-9xl font-black text-brand-text drop-shadow-2xl"
            >
              {slides[index].name.split(' ')[0]}
              <span style={{ color: slides[index].color }}>
                {slides[index].name.split(' ')[1] ? ` ${slides[index].name.split(' ')[1]}` : ''}
              </span>
            </motion.h1>
            <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.8 }}
               className="text-sm md:text-xl font-light tracking-[0.5em] text-brand-text mt-4 uppercase"
            >
              {slides[index].tagline}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-30">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all backdrop-blur-md"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default Slider;