import { motion, AnimatePresence } from 'framer-motion';

export const SuccessSparkle = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="fixed inset-0 z-100 flex items-center justify-center pointer-events-none"
        >
          {/* Frosted Glass Success Card */}
          <div className="bg-white/20 backdrop-blur-2xl border border-white/40 p-12 rounded-[3rem] text-center shadow-[0_20px_50px_rgba(219,39,119,0.3)]">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-7xl mb-6"
            >
              ✨
            </motion.div>
            <h2 className="text-3xl font-black text-white glossy-text">Sent Beautifully!</h2>
            <p className="text-white/80 mt-2">We'll get back to you soon, Luxe.</p>
          </div>

          {/* Particle Burst Effect */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ 
                x: (Math.random() - 0.5) * 400, 
                y: (Math.random() - 0.5) * 400,
                opacity: 0 
              }}
              className="absolute w-2 h-2 bg-secondary rounded-full"
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};