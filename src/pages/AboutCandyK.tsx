import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Beams from "../assets/3d/Beams";

const AboutCandyK = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Subtly different speeds for the 3D depth effect
    const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const yRight = useTransform(scrollYProgress, [0, 1], [-40, 40]);

    return (
        <section ref={containerRef} id="about-candy-k" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg">
            
            {/* 3D Background Beams */}
            <div className="absolute inset-0 z-0 opacity-40">
                <Beams
                    beamWidth={3}
                    beamHeight={30}
                    beamNumber={20}
                    lightColor="#ffffff"
                    speed={1.5}
                    noiseIntensity={1.75}
                    scale={0.3}
                    rotation={25}
                />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* Card 1: The Identity (Glass Style) */}
                    <motion.div 
                        style={{ y: yLeft }} 
                        className="p-10 md:p-14 rounded-[3.5rem] bg-white/80 backdrop-blur-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.3)] relative overflow-hidden"
                    >
                        {/* Decorative Gradient Flare */}
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/10 blur-[100px] pointer-events-none" />
                        
                        <h2 className="text-secondary font-black text-4xl md:text-5xl mb-8 tracking-tighter italic">
                            The Identity
                        </h2>
                        <p className="text-xl md:text-2xl leading-relaxed text-brand-text font-light tracking-tight">
                            Candy K Luxe Cosmetics is a <span className="text-secondary font-medium">modern beauty brand</span> built on confidence, self-expression, and inclusivity. 
                        </p>
                        <p className="mt-6 text-lg text-brand-text/70 leading-relaxed">
                            What began as a personal passion has grown into a brand dedicated to celebrating beauty in all its forms.
                        </p>
                    </motion.div>

                    {/* Card 2: The Philosophy (Solid Primary Style) */}
                    <motion.div 
                        style={{ y: yRight }} 
                        className="p-10 md:p-14 rounded-[3.5rem] bg-primary text-white shadow-[0_30px_60px_rgba(var(--primary-rgb),0.2)]"
                    >
                        <h2 className="font-black text-4xl md:text-5xl mb-8 tracking-tighter text-white italic">
                            The Philosophy
                        </h2>
                        <p className="text-xl md:text-2xl leading-relaxed mb-6 font-medium">
                            Rooted in elegance and individuality, we are designed to <span className="text-secondary">enhance and elevate</span> every beauty style.
                        </p>
                        <p className="text-lg leading-relaxed text-white/80">
                            Whether worn naturally or expressed through makeup—we empower women to feel confident, bold, and effortlessly luxe every day.
                        </p>

                        {/* Minimalist Divider */}
                        <div className="mt-10 h-px w-20 bg-white/30" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutCandyK;