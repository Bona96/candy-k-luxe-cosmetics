import { motion } from "framer-motion";
import { goals } from "../assets/constants";
import { LandingPageSectionHeader } from "./parts/Headers";

const Goals = () => {

  return (
      <section id="goals" className="relative">
        <div className="flex flex-col items-center justify-center w-full">
          <LandingPageSectionHeader
            heading="Glossy Goals"
            tagline=""
          />
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-3 lg:px-6">
            {goals.map((goal, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group relative p-8 rounded-2xl bg-surface/50 backdrop-blur-2xl border border-secondary/20 h-50 flex flex-col justify-end"
              >
                {/* The "Gloss" Shine Overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-primary/50 via-transparent to-pink-300 opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="text-4xl font-black opacity-20 absolute top-4 right-4">{goal.year}</span>
                <h3 className="text-3xl font-black text-secondary mb-2">{goal.task}</h3>
                <p className="text-brand-text/70">{goal.desc}</p>
                
                {/* Liquid Button */}
                <motion.div className="mt-6 h-1 w-0 bg-secondary group-hover:w-full transition-all duration-1000" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Goals;