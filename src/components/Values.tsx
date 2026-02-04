import { motion } from "framer-motion";
import { containerVariants, values } from "../assets/constants";

const Values = () => {
  
  return (
    <section id="values" className="py-24 px-6 bg-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-black text-4xl md:text-5xl lg:text-6xl tracking-tight"
          >
            The Glossy Standard
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary font-medium tracking-[0.2em] mt-4 uppercase text-sm"
          >
            Built on Substance • Shined to Perfection
          </motion.p>
        </div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
