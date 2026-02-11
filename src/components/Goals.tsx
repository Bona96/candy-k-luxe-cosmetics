import LuxeGallery from "../components/parts/LuxeGallery";
import { goals } from "../assets/constants";
import { motion } from "framer-motion";
import type { GoalType } from "../types/types";



const Goals = () => {
  return (
    <LuxeGallery
      heading="Glossy Goals"
      tagline="Our Roadmap to Global Brilliance"
      items={goals}
      renderItem={(goal: GoalType) => (
        <motion.div className="relative p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-2xl border border-white/10 h-87.5 flex flex-col justify-between overflow-hidden shadow-2xl">
           <div>
             <span className="text-4xl font-black text-brand-text opacity-10 italic">{goal.year}</span>
             <h3 className="text-2xl font-black text-secondary mt-2 mb-3">{goal.task}</h3>
             <p className="text-brand-text/70 text-sm leading-relaxed">{goal.desc}</p>
           </div>
           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }} 
               whileInView={{ width: '100%' }} 
               transition={{ duration: 1.5, delay: 0.2 }}
               className="h-full bg-secondary" 
             />
           </div>
        </motion.div>
      )}
    />
  );
};

export default Goals;