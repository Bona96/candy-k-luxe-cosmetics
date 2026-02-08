import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring physics for "liquid" movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* The Main Glow */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-secondary/40 blur-md pointer-events-none -z-99 mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
      {/* The Center Point */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-99"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
};

export default CustomCursor;