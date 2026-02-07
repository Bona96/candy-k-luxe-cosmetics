import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { slides } from '../assets/constants';
import { TextSection } from './parts/TextParts';
import { SliderNavBtns } from './Buttons';
import { SliderImage } from './parts/Images';

const Slider: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1) % slides.length);

  // setInterval(() => {
  //   nextSlide()
  // }, 5000);

  return (
    <div className="relative flex flex-col w-full h-screen items-center justify-center pointer-events-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].id}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl md:p-10"
        >
          {/* COLUMN 1: IMAGE SECTION */}
          <SliderImage 
            src={slides[index].image} 
            alt={slides[index].title} 
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="rounded-xl w-62.5 md:w-100 lg:w-90 drop-shadow-[0_80px_90px_rgba(0,0,0,0.2)]"
            page='slider'
          />

          {/* COLUMN 2: GLASSMORPHIC TEXT SECTION */}
          <TextSection slides={slides} index={index} setIndex={setIndex}/>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <SliderNavBtns prevSlide={prevSlide} nextSlide={nextSlide}/>
    </div>
  );
};

export default Slider;