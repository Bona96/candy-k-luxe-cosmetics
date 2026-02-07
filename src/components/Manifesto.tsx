import { motion } from 'framer-motion';

const Manifesto = () => {
  return (
    <section className="h-screen py-32 bg-brand-bg text-center px-6 relative overflow-hidden">
      {/* Glossy Overlay Effect */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_20%,var(--primary),transparent)]" />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-3xl font-light leading-relaxed text-brand-text/90 italic">
            "We exist to enhance—not replace, natural beauty. Our products are designed to make every customer feel bold, confident and unapologetic."
          </p>
          
          <div className="flex flex-col items-center">
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-primary/40 via-pink-300 to-primary/40">
              Your Lips, Your Power.
            </h3>
            <div className="h-1 w-24 bg-primary mt-6 rounded-full" />
          </div>
          
          <p className="pt-8 text-sm tracking-[0.3em] uppercase opacity-60">
            Candy K Luxe Cosmetics © 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;