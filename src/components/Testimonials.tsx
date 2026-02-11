import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../assets/constants';

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      filter: "blur(10px)",
      scale: 0.95,
      transition: { duration: 0.4 }
    })
  } as const;

  return (
    /* CHANGE: Removed h-screen and fixed background. 
       The StackingSection parent now handles the height and the background.
       Using flex-1 and justify-center to center content vertically.
    */
    <div className="flex-1 flex flex-col justify-center items-center w-full py-12 md:py-20 relative">
      
      {/* Dynamic Header */}
      <div className="text-center mb-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-4"
        >
          Customer Reviews
        </motion.p>
        <h2 className="text-4xl md:text-6xl font-black text-brand-text tracking-tighter">
          Voices of <span className="text-secondary italic">Confidence</span>
        </h2>
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-6">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex justify-center"
          >
            {/* The Testimonial Card: 
               Updated to a more horizontal 'Luxe' layout for better 3D visibility 
            */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl w-full flex flex-col md:flex-row gap-10 items-center overflow-hidden">
              
              {/* Image Side */}
              <div className="relative shrink-0">
                <div className="absolute -inset-2 bg-secondary/20 blur-xl rounded-full opacity-50" />
                <img 
                  src={testimonials[index].avatar} 
                  alt={testimonials[index].name} 
                  className="w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover border-2 border-white/10 relative z-10"
                />
              </div>

              {/* Content Side */}
              <div className="flex flex-col text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < testimonials[index].rating ? "var(--secondary)" : "none"} 
                      className={i < testimonials[index].rating ? "text-secondary" : "text-white/20"} 
                    />
                  ))}
                </div>

                <p className="text-xl md:text-2xl font-medium text-brand-text leading-relaxed italic mb-6">
                  "{testimonials[index].quote}"
                </p>

                <div>
                  <h4 className="font-bold text-2xl text-brand-text">{testimonials[index].name}</h4>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-1">
                    <p className="text-sm text-secondary font-bold uppercase tracking-widest">
                      {testimonials[index].location}
                    </p>
                    <span className="h-1 w-1 bg-white/30 rounded-full hidden md:block" />
                    <span className="text-xs text-brand-text/50">
                      Wearing: <span className="text-brand-text/80">{testimonials[index].shade}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls: Moved outside the card for better clickability within the stack */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button 
            onClick={prevStep}
            className="group p-4 rounded-full border border-white/10 bg-white/5 hover:bg-secondary hover:border-secondary transition-all"
          >
            <ChevronLeft size={24} className="group-hover:text-white" />
          </button>
          
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                   setDirection(i > index ? 1 : -1);
                   setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-secondary' : 'w-2 bg-white/20 hover:bg-white/40'}`} 
              />
            ))}
          </div>

          <button 
            onClick={nextStep}
            className="group p-4 rounded-full border border-white/10 bg-white/5 hover:bg-secondary hover:border-secondary transition-all"
          >
            <ChevronRight size={24} className="group-hover:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;