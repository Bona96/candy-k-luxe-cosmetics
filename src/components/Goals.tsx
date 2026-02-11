import { motion } from "framer-motion";
import { goals } from "../assets/constants";
import { LandingPageSectionHeader } from "./parts/Headers";

const Goals = () => {
  return (
    /* flex-1 and justify-center to stay aligned within the StackingSection */
    <div className="flex-1 flex flex-col justify-center items-center w-full py-16 md:py-24 px-6 relative">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <LandingPageSectionHeader
            heading="Glossy Goals"
            tagline="Our Roadmap to Global Brilliance"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2,
                translateY: -5 
              }}
              className="group relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 h-75 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Animated Gloss Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
              
              {/* Year Indicator - Subtle & Large */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-5xl font-black text-brand-text opacity-10 italic group-hover:opacity-30 transition-opacity">
                  {goal.year}
                </span>
                {/* Visual Accent */}
                <div className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_var(--secondary)]" />
              </div>

              {/* Content Area */}
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-secondary mb-3 tracking-tighter leading-tight group-hover:translate-x-2 transition-transform duration-300">
                  {goal.task}
                </h3>
                <p className="text-brand-text/60 leading-relaxed text-sm md:text-base group-hover:text-brand-text/90 transition-colors">
                  {goal.desc}
                </p>
                
                {/* Progress Line Animation */}
                <div className="mt-6 h-0.5 w-full bg-white/10 overflow-hidden rounded-full">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
                    className="h-full w-full bg-linear-to-r from-primary to-secondary"
                  />
                </div>
              </div>

              {/* Shine Sweep */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;