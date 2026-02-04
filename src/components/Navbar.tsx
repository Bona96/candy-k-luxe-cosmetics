import React, { useState } from 'react';
import { ThemeToggle } from './Buttons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-3 md:px-8">
      {/* Container with Glassmorphism */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 
                      rounded-2xl transition-all duration-300
                      bg-white/30 dark:bg-black/20 
                      backdrop-blur-lg 
                      border border-white/40 dark:border-white/10 
                      shadow-[0_8px_32px_0_rgba(255,182,193,0.15)]">
        
        {/* Brand */}
        <div className="text-2xl font-bold tracking-tighter text-brandbg-600 dark:text-pink-400">
          Candy<span className="font-light italic">K</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-200">
          {['Shades', 'Formula', 'Sustainability', 'Reviews'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-500 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button className="hidden sm:block bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-transform active:scale-95 shadow-md">
            Shop Now
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-white/80 dark:bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-white/20 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-4 text-center text-lg font-medium dark:text-white">
            <a href="#shades" onClick={() => setIsOpen(false)}>Shades</a>
            <a href="#formula" onClick={() => setIsOpen(false)}>Formula</a>
            <a href="#reviews" onClick={() => setIsOpen(false)}>Reviews</a>
            <button className="bg-pink-500 text-white py-3 rounded-xl mt-2">Shop Now</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;