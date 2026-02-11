import { motion } from "framer-motion";
import { values } from "../assets/constants";
import { LandingPageSectionHeader } from "./parts/Headers";

const Values = () => {
  // Define staggered animation variants locally for precise control
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  } as const;

  return (
    /* flex-1 and justify-center ensures it sits in the middle of your StackingSection */
    <div className="flex-1 flex flex-col justify-center w-full py-16 md:py-24 px-6 relative">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <LandingPageSectionHeader
            heading="The Glossy Standard"
            tagline="Built on Substance • Shined to Perfection"
          />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                borderColor: "var(--secondary)" 
              }}
              className="group p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-colors duration-300 relative overflow-hidden"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 origin-left">
                  {v.icon}
                </div>
                
                <h3 className="text-xl font-black mb-3 text-secondary tracking-tight">
                  {v.title}
                </h3>
                
                <p className="text-brand-text/60 leading-relaxed group-hover:text-brand-text/80 transition-colors">
                  {v.desc}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white/5 rounded-full blur-xl group-hover:bg-secondary/20 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Values;