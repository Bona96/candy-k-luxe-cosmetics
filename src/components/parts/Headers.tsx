import type React from "react";
import { motion } from "framer-motion"
import type { GlobalHeaderType } from "../../types/types";
import { ModalBtn } from "../Buttons";

export const GlobalHeader: React.FC<GlobalHeaderType> = ({ heading, icon, onClick}) => {
    return (
        <header className=" mt-5 p-2">
            <div className="flex justify-between gap-60">
                <h1>{heading}</h1>
                <ModalBtn
                    icon={icon}
                    onClick={onClick}
                />
            </div>
        </header>
    )
}

type LandingPageSectionHeaderProps = {
    heading: string
    tagline: string
}
export const LandingPageSectionHeader: React.FC<LandingPageSectionHeaderProps> = ({ heading, tagline }) => {
    return (
        <div className="mt-10 md:mt-16 lg:mt-5 text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-primary font-black text-4xl md:text-5xl lg:text-6xl tracking-tight"
            >
                {heading}
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-secondary font-medium tracking-[0.2em] mt-4 uppercase text-sm"
            >
                {tagline}
            </motion.p>
        </div>
    )
}