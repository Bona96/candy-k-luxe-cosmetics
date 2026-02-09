import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../assets/constants';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay Logic
  useEffect(() => {
    const timer = setInterval(nextStep, 5000); // Slide every 5 seconds
    return () => clearInterval(timer);
  }, [nextStep]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
      rotateY: direction < 0 ? 45 : -45,
      transition: { duration: 0.6 }
    })
  };

  return (
    <section id="reviews" className="h-screen bg-brand-bg overflow-hidden relative">
      {/* Decorative Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-black mt-4 mb-2 text-brand-text tracking-tighter"
        >
          Voices of <span className="text-secondary italic">Confidence</span>
        </motion.h2>
        <div className="relative flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              {/* The Glass Card */}
              <div className="bg-surface/30 backdrop-blur-2xl border border-white/20 dark:border-white/5 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                {/* Shine Sweep Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <div className="flex justify-center mb-6 gap-1">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} size={15} fill="var(--secondary)" className="text-secondary" />
                  ))}
                </div>
                <div className="flex flex-row justify-center items-center">
                  <img 
                    src={testimonials[index].avatar} 
                    alt={testimonials[index].name} 
                    className="w-80 h-80 rounded-lg border-2 border-secondary/30 mb-4 object-cover"
                  />
                  <div className="flex flex-col justify-center items-center p-5">
                    <p className="text-md md:text-lg font-medium text-brand-text leading-relaxed mb-10 italic">
                        "{testimonials[index].quote}"
                    </p>
                    <h4 className="font-bold text-xl text-brand-text">{testimonials[index].name}</h4>
                    <p className="text-sm text-secondary font-bold uppercase tracking-widest">{testimonials[index].location}</p>
                    <span className="mt-2 text-xs opacity-50">Wearing: {testimonials[index].shade}</span>
                  </div>
                  
                  
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute z-30 bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-8">
            <button 
              onClick={prevStep}
              className="p-4 rounded-full border border-secondary/20 hover:bg-secondary hover:text-white transition-all transform active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-8 bg-secondary' : 'w-2 bg-brand-text/20'}`} 
                />
              ))}
            </div>

            <button 
              onClick={nextStep}
              className="p-4 rounded-full border border-secondary/20 hover:bg-secondary hover:text-white transition-all transform active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;