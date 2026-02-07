import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MissionVision3D = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Items move at different speeds for a 3D effect
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={containerRef} id="mission" className="h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div style={{ y: yLeft }} className="p-10 rounded-[3rem] bg-surface border border-primary/20 shadow-2xl">
                <h2 className="text-secondary font-black text-4xl mb-4">Our Mission</h2>
                <p className="text-xl leading-relaxed opacity-80">
                    Crafting portable, elegant beauty that empowers women to shine boldly.
                </p>
            </motion.div>

            <motion.div style={{ y: yRight }} className="p-10 rounded-[3rem] bg-primary text-white shadow-2xl">
                <h2 className="font-black text-4xl mb-4 text-white">2031 Vision</h2>
                <p className="text-xl leading-relaxed text-white/90">
                    Establishing Candy K Luxe as a global empire of innovation and elegance.
                </p>
            </motion.div>
        </div>
    </section>
  );
};

export default MissionVision3D;