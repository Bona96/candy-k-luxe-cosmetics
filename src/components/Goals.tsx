import { motion } from "framer-motion";
import { goals } from "../assets/constants";
import { LandingPageSectionHeader } from "./parts/Headers";

const Goals = () => {

  return (
      <section id="goals">
        <LandingPageSectionHeader
          heading="Glossy Goals"
          tagline=""
        />
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {goals.map((goal, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative p-8 rounded-2xl bg-surface/50 backdrop-blur-2xl border border-secondary/20 h-90 flex flex-col justify-end overflow-hidden"
            >
              {/* The "Gloss" Shine Overlay */}
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="text-6xl font-black opacity-10 absolute top-4 right-4">{goal.year}</span>
              <h3 className="text-3xl font-black text-secondary mb-2">{goal.task}</h3>
              <p className="text-brand-text/70">{goal.desc}</p>
              
              {/* Liquid Button */}
              <motion.div className="mt-6 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </section>
  );
};

export default Goals;