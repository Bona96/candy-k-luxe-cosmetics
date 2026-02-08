import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Beams from "../assets/3d/Beams";
// import { FadeInSection } from "./ScrollSections";
import { Candy } from "../assets/constants";

const AboutCandyK = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Items move at different speeds for a 3D effect
    const yLeft = useTransform(scrollYProgress, [0, 2], [20, 0]);
    const yRight = useTransform(scrollYProgress, [0, 1], [0, 20]);

    return (
        <section ref={containerRef} id="mission" className="relative min-h-screen flex flex-col flex-wrap items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Beams
                    beamWidth={3}
                    beamHeight={30}
                    beamNumber={20}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={30}
                />
            </div>
            {/* Content Overlay */}
            <div className="text-center px-4 pointer-events-none">
                <div className="mt-20 mb-10 max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 items-center">
                    <motion.div style={{ y: yLeft }} className="p-10 rounded-[3rem] bg-surface border border-primary/20 shadow-2xl">
                        <h2 className="text-secondary font-black text-4xl mb-4">About Candy K</h2>
                        <p className="text-lg leading-relaxed opacity-80">
                            Formerly known as Candy K Beauty, Candy K Luxe Cosmetics was officially registered on December 2025 under the Business Name Registration Act and rules made there under.
                        </p>
                        <section className="flex items-center">
                            <motion.img
                                src={Candy}
                                alt={'Candy'}
                                animate={{ x: [0, -20, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                                className="mt-4 rounded-xl w-60 md:w-50 lg:w-70 drop-shadow-[0_30px_50px_rgba(0,0,0,0.2)]"
                            />
                        </section>
                    </motion.div>

                    <motion.div style={{ y: yRight }} className="mb-10 p-10 rounded-[3rem] bg-primary text-white shadow-2xl">
                        <h2 className="font-black text-xl mb-4 text-white">The Story</h2>
                        <p className="text-lg mb-4 leading-relaxed text-white/90">
                            Born from a small dream in my bedroom, on 16th August 2024, driven by a deep belief that true beauty shines brightest through authenticity and self-confidence
                        </p>
                        <p className="text-lg mb-4 leading-relaxed text-white/90">
                            What begun as a vision has grown into a brand dedicated to helping women feel bold, beautiful and empowered especially women of deeper and richer skin tones.
                        </p>
                    </motion.div>
                </div>
            </div>
            {/* <div className="z-20 w-full mb-20 mt-20 bottom-0"/> */}
        </section>
    );
};

export default AboutCandyK;