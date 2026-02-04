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
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl"
        >
          {/* COLUMN 1: IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center order-2 lg:order-1"
          >
            <motion.img
              src={slides[index].image}
              alt={slides[index].name}
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="rounded-xl w-[250px] md:w-[400px] lg:w-[450px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)]"
            />
          </motion.div>

          {/* COLUMN 2: GLASSMORPHIC TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 mt-10"
          >
            <div className=" p-8 md:p-12 rounded-[2.5rem] bg-white/10 dark:bg-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl">
              <motion.span 
                style={{ color: slides[index].color }}
                className="text-sm font-bold tracking-[0.3em] uppercase mt-10 mb-3 block"
              >
                Candy.K Luxe Presents
              </motion.span>
              
              <h1 className="text-xl md:text-5xl font-black text-brand-text mb-5 leading-tight">
                {slides[index].name}
              </h1>
              
              <p className="text-xl md:text-2xl font-medium text-secondary italic mb-3">
                {slides[index].tagline}
              </p>
              
              <p className="text-brand-text/80 text-lg leading-relaxed mb-8 max-w-md">
                {slides[index].description}
              </p>

              <div className="flex items-center gap-5">
                <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105 active:scale-95">
                  Shop Shade
                </button>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-secondary' : 'w-2 bg-brand-text/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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