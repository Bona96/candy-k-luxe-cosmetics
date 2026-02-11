import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Beams from "../assets/3d/Beams";
import { Candy } from "../assets/constants";

const AboutCandyK = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax movement for depth
    const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);
    const yRight = useTransform(scrollYProgress, [0, 1], [-60, 60]);

    return (
        <section ref={containerRef} id="about-candy-k" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-bg py-20">
            
            {/* 3D Background */}
            <div className="absolute inset-0 z-0 opacity-30">
                <Beams
                    beamWidth={3}
                    beamHeight={30}
                    beamNumber={15}
                    lightColor="#ffffff"
                    speed={1.2}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    
                    {/* CARD 1: ABOUT CANDY K (The Identity) */}
                    <motion.div 
                        style={{ y: yLeft }} 
                        className="p-8 md:p-12 rounded-[3rem] bg-white/20 backdrop-blur-2xl border border-white/10 shadow-2xl"
                    >
                        <h2 className="text-secondary font-black text-3xl md:text-4xl mb-6 italic tracking-tighter">
                            About Candy K
                        </h2>
                        <div className="space-y-4 text-brand-text/80 text-lg leading-relaxed">
                            <p>
                                <span className="text-white font-semibold">Candy K Luxe Cosmetics</span> is a modern beauty brand built on confidence, self-expression, and inclusivity.
                            </p>
                            <p className="text-sm border-l-2 border-secondary/30 pl-4 italic">
                                Formerly known as Candy K Beauty, the brand was officially registered in December 2025 under the Business Name Registration Act.
                            </p>
                            <p>
                                Rooted in elegance and individuality, our mission is to enhance and elevate every beauty style—empowering women to feel bold and effortlessly luxe every day.
                            </p>
                        </div>
                    </motion.div>

                    {/* CARD 2: THE STORY (The Personal Touch) */}
                    <motion.div 
                        style={{ y: yRight }} 
                        className="p-8 md:p-12 rounded-[3rem] bg-primary text-white shadow-xl relative overflow-hidden"
                    >
                        {/* THE IMAGE: Sophisticated and sized for responsiveness */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-white/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <img 
                                    src={Candy} 
                                    alt="Candy - Founder" 
                                    className="relative w-28 h-28 md:w-32 md:h-32 object-cover rounded-2xl border-2 border-white/20 shadow-lg"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <h2 className="font-black text-3xl italic tracking-tighter">The Story</h2>
                                <p className="text-white/60 text-xs uppercase tracking-[0.3em]">Founder & Visionary</p>
                            </div>
                        </div>

                        <div className="space-y-4 text-white/90 leading-relaxed text-base md:text-lg">
                            <p>
                                Born from a small dream in a bedroom on <span className="text-white font-bold underline decoration-secondary/50 underline-offset-4">August 16, 2024</span>, Candy came up with an idea that birthed Candy K Luxe Cosmetics.
                            </p>
                            <p>
                                With a deep belief that beauty is not one-dimensional—it is personal, powerful, and expressive. What started as a vision has evolved into a brand committed to helping women feel seen, beautiful, and confident in their own skin.
                            </p>
                            <p className="font-medium text-white italic">
                                "We proudly celebrate women of deeper and richer skin tones, creating products that inspire confidence at every level of glam—from bare beauty to bold expression."
                            </p>
                        </div>

                        {/* Aesthetic Shine Overlay */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[60px] rounded-full" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutCandyK;