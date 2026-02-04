import { useDarkMode } from '../contexts/DarkModeContext';
import { motion } from 'framer-motion';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button 
      className="group relative overflow-hidden px-6 py-2 rounded-full font-bold bg-secondary text-brand-bg transition-all"
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"
      />
      <span className='relative z-10 group-hover:text-white'>
        {theme === 'dark' ? '☀️ Light' : '🌙 Dark' }
      </span>
      {/* Subtle Specular Highlight (The Gloss) */}
      <div className="absolute top-1 left-1 w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full pointer-events-none" />
    </button>
  );
};
