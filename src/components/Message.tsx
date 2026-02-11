import { motion, AnimatePresence } from 'framer-motion';

export const SuccessSparkle = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center pointer-events-none px-6"
        >
          {/* Darkened Backdrop Blur for focus */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Frosted Glass Success Card */}
          <motion.div 
            initial={{ scale: 0.8, y: 20, rotateX: 15 }}
            animate={{ scale: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 1.1, opacity: 0 }}
            className={`
              relative z-10
              bg-white/5 dark:bg-black/40 
              backdrop-blur-3xl 
              border border-white/10 dark:border-white/5 
              p-10 md:p-16 rounded-[3.5rem] 
              text-center 
              shadow-[0_0_80px_-10px_rgba(var(--secondary-rgb),0.3)]
              max-w-md w-full
            `}
          >
            {/* Subtle inner glow for depth */}
            <div className="absolute inset-0 rounded-[3.5rem] bg-linear-to-b from-white/10 to-transparent pointer-events-none" />

            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1],
                filter: ["drop-shadow(0 0 0px var(--secondary))", "drop-shadow(0 0 20px var(--secondary))", "drop-shadow(0 0 0px var(--secondary))"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-7xl mb-6 inline-block"
            >
              ✨
            </motion.div>

            <h2 className="text-4xl font-black text-white tracking-tighter mb-4">
              Sent <span className="text-secondary italic">Beautifully!</span>
            </h2>
            <p className="text-white/60 font-medium tracking-wide uppercase text-xs">
              Establishing Connection... We'll reach out soon, Luxe.
            </p>
          </motion.div>

          {/* Particle Burst Effect with Glow */}
          {[...Array(16)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
              animate={{ 
                x: (Math.random() - 0.5) * 600, 
                y: (Math.random() - 0.5) * 600,
                opacity: 0,
                scale: Math.random() * 1.5
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute w-1.5 h-1.5 bg-secondary rounded-full shadow-[0_0_12px_var(--secondary)]"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};