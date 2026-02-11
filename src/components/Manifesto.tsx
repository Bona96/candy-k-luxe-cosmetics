import { motion } from 'framer-motion';

const Manifesto = () => {
  return (
    /* flex-1 and justify-center to fill the StackingSection glass pane */
    <div className="flex-1 flex flex-col justify-center items-center w-full px-6 relative py-20">
      
      {/* Dynamic Background Glows - Pulsing subtly */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 blur-[150px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1] 
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 blur-[150px] rounded-full pointer-events-none" 
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12"
        >
          {/* Subtle Label */}
          <p className="text-secondary font-bold uppercase tracking-[0.5em] text-xs">
            The Manifesto
          </p>

          {/* The Statement */}
          <p className="text-3xl md:text-5xl font-light leading-[1.4] text-brand-text tracking-tight italic">
            "We exist to <span className="text-brand-text font-medium not-italic">enhance</span>—not replace, natural beauty. Our products are designed to make every customer feel <span className="relative inline-block">
              bold
              <motion.span 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-2 left-0 h-0.5 bg-secondary/40"
              />
            </span>, confident and unapologetic."
          </p>
          
          {/* Hero Slogan with Animated Gradient */}
          <div className="flex flex-col items-center pt-8">
            <motion.h3 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-brand-text via-secondary to-brand-text bg-size-[:100%_200%] animate-gradient-y"
              style={{ lineHeight: '1.1' }}
            >
              Your Lips, <br /> Your Power.
            </motion.h3>
            
            {/* Minimalist Divider */}
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="h-px bg-linear-to-r from-transparent via-secondary to-transparent mt-10" 
            />
          </div>
          
          {/* Brand Seal */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center gap-2 pt-12"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-brand-text">
              Candy K Luxe Cosmetics • Uganda
            </p>
            <span className="text-[10px] opacity-50">EST. 2026</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Manifesto;