import React, { useState } from 'react';
import { ThemeToggle } from './Buttons';
import Logo from './Logo';
import { useDarkMode } from '../contexts/DarkModeContext';
import { Socials } from './Socials';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useDarkMode()
  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Values', href: '#values' },
    { name: 'Goals', href: '#goals' },
    { name: 'Order Now', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className="container mx-auto px-4">
        <div className={`
          flex items-center justify-between px-6 py-3 rounded-full
          bg-brand-bg/40 backdrop-blur-xl border border-secondary/20
          shadow-[0_10px_40px_rgba(109,40,217,0.1)]
        `}>
          {/* Logo Section */}
          <Logo />
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium hover:text-secondary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* <button className="hidden sm:block bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg">
              SHOP GLOSS
            </button> */}
            <Socials />
            <button 
              className="md:hidden text-brand-text" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-20 left-4 right-4 bg-surface/95 backdrop-blur-2xl rounded-3xl p-8 border border-secondary/20 md:hidden animate-in fade-in slide-in-from-top-5">
             <div className="flex flex-col gap-6 text-center">
                {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold">{link.name}</a>
                ))}
                <button className="bg-secondary text-white py-4 rounded-2xl font-bold">SHOP NOW</button>
             </div>
             <Socials />
             <ThemeToggle />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;