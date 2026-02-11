import { motion } from "framer-motion";

const MissionVision3D = () => {
  return (
    /* CHANGE: flex-1 and justify-center to stay perfectly aligned 
       within the StackingSection wrapper.
    */
    <div className="flex-1 flex flex-col justify-center items-center w-full py-12 px-6">
      
      {/* Decorative Branding Label */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-12 text-center"
      >
        Purpose & Future
      </motion.p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
        
        {/* Mission Card: Glassmorphism style */}
        <motion.div 
          whileHover={{ y: -10, rotateY: -5, rotateX: 5 }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative group p-10 md:p-14 rounded-[3.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-secondary font-black text-6xl opacity-10 absolute -top-4 -left-2 italic">01</span>
            <h2 className="text-secondary font-black text-4xl mb-6 tracking-tighter">Our Mission</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-brand-text/80 font-medium italic">
              "Crafting portable, elegant beauty that empowers women to <span className="text-brand-text">shine boldly</span>."
            </p>
          </div>
          
          {/* Shine Sweep Effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </motion.div>

        {/* Vision Card: Bold Primary style with Glass overlay */}
        <motion.div 
          whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
          className="relative group p-10 md:p-14 rounded-[3.5rem] bg-primary shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)] overflow-hidden"
        >
          {/* Geometric Accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-white font-black text-6xl opacity-10 absolute -top-4 -left-2 italic">02</span>
            <h2 className="font-black text-4xl mb-6 text-white tracking-tighter">2031 Vision</h2>
            <p className="text-xl md:text-2xl leading-relaxed text-white font-medium italic">
              "Establishing Candy K Luxe as a <span className="text-secondary">global empire</span> of innovation and elegance."
            </p>
          </div>
        </motion.div>

      </div>

      {/* Subtle bottom text for balance */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        className="mt-16 text-xs uppercase tracking-widest text-brand-text/40 font-bold"
      >
        Candy K Luxe • Precision • Excellence
      </motion.div>
    </div>
  );
};

export default MissionVision3D;