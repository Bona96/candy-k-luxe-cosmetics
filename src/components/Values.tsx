import { motion } from "framer-motion";
import { containerVariants, values } from "../assets/constants";
import { LandingPageSectionHeader } from "./parts/Headers";

const Values = () => {
  
  return (
    <section id="values" className="p-6 bg-brand-bg">
        <div className="overflow-hidden overflow-y-auto h-190 max-w-7xl mx-auto">
            <LandingPageSectionHeader
                heading="The Glossy Standard"
                tagline="Built on Substance • Shined to Perfection"
            />
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {values.map((v, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="p-8 rounded-3xl bg-surface border border-secondary/10 shadow-sm transition-all"
                    >
                        <span className="text-4xl mb-4 block">{v.icon}</span>
                        <h3 className="text-xl font-bold mb-3 text-primary">{v.title}</h3>
                        <p className="text-brand-text/70 leading-relaxed">{v.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    </section>
  );
};

export default Values;
