import type React from "react";
import { motion } from 'framer-motion'
import type { ImageData } from "../../types/types";
import { globalImageClassName } from "../../assets/constants";

export const SliderImage: React.FC<ImageData> = ({ src, alt, animate, transition, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="lg:flex z-99 hidden justify-center order-2 lg:order-1"
        >
            <motion.img
              src={src}
              alt={alt}
              animate={animate}
              transition={transition}
              className={`${className}`}
            />
        </motion.div>
    )
}
export const GlobalImage: React.FC<ImageData> = ({ src, alt, animate, transition, className, page }) => {
    return (
        <motion.div>
            <motion.img
              src={src}
              alt={alt}
              animate={animate}
              transition={transition}
              className={`${
                page === 'footer' || page === 'media' 
                    ? className
                    : globalImageClassName
            }`}
            />
        </motion.div>
    )
}