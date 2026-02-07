import { useDarkMode } from '../contexts/DarkModeContext';
import { motion } from 'framer-motion';
import type { ModalBtnType, SliderNavBtnProps } from '../types/types';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import type React from 'react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button 
      className="group relative overflow-hidden px-6 py-2 rounded-full font-bold bg-secondary text-brand-bg transition-all"
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div 
        className="absolute inset-0 bg-linear-to-tr from-primary to-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"
      />
      <span className='relative z-10 group-hover:text-white'>
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark' }
      </span>
      {/* Subtle Specular Highlight (The Gloss) */}
      <div className="absolute top-1 left-1 w-full h-full bg-linear-to-br from-white/20 to-transparent rounded-full pointer-events-none" />
    </button>
  );
};
export const ModalBtn: React.FC<ModalBtnType> = ({ icon, onClick }) => {

  return (
    <button 
      className="group relative overflow-hidden px-6 py-2 rounded-full font-bold bg-secondary text-brand-bg transition-all"
      onClick={() => {
        return onClick()
      }} 
      aria-label={`Modal Button`}
    >
      <motion.div 
        className="absolute inset-0 bg-linear-to-tr from-primary to-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"
      />
      <span className='relative z-10 group-hover:text-white'>
        {icon}
      </span>
      {/* Subtle Specular Highlight (The Gloss) */}
      <div className="absolute top-1 left-1 w-full h-full bg-linear-to-br from-white/20 to-transparent rounded-full pointer-events-none" />
    </button>
  );
};

// Slider navigation buttons
export const SliderNavBtns: React.FC<SliderNavBtnProps> = ({ prevSlide, nextSlide }) => {

  return (
    <motion.section
      className='absolute left-60 bottom-5 flex justify-between gap-4'
    >
      <div className="right-10 flex gap-4 z-99">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all backdrop-blur-md"
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="right-10 flex gap-4 z-99">
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all backdrop-blur-md"
        >
          <FaArrowRight />
        </button>
      </div>
    </motion.section>
  )
}
