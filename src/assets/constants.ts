import LadyLookingAtProduct from './images/candy-k-lady-looking-at-product.jpg'
import BlackWomanLipGlossBeauty from '../assets/images/candy-k-black-woman-lip-gloss-beauty.webp'
import MultipleProductDisplay from '../assets/images/candy-k-multiple-product-display.png'
import type { SlideData } from '../types/types';

export const values = [
    { title: "Consistency", desc: "Reliable service, timely deliveries, and professional structure.", icon: "✨" },
    { title: "Inclusivity", desc: "Flattering diverse complexions. Beauty is for every lip and every vibe.", icon: "🌍" },
    { title: "Quality", desc: "Non-sticky, long-lasting shine with safe, non-cruel ingredients.", icon: "💎" },
    { title: "Accessible Luxury", desc: "High-quality beauty that feels indulgent without being intimidating.", icon: "🛍️" }
];
export const goals = [
    { year: "2026", task: "Rebranding Launch", desc: "Setting the luxury standard in Uganda." },
    { year: "2028", task: "Gloss Charm Global", desc: "Expanding to international retail hubs." },
    { year: "2031", task: "Beauty Empire", desc: "A full line of innovative cosmetics." }
];
export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};
export const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};
export const default3DGalleryItems = [
    {
        image: `https://picsum.photos/seed/1/800/600?grayscale`,
        text: 'Bridge'
    },
    {
        image: `https://picsum.photos/seed/2/800/600?grayscale`,
        text: 'Desk Setup'
    },
    {
        image: `https://picsum.photos/seed/3/800/600?grayscale`,
        text: 'Waterfall'
    },
    {
        image: `https://picsum.photos/seed/4/800/600?grayscale`,
        text: 'Strawberries'
    },
    {
        image: `https://picsum.photos/seed/5/800/600?grayscale`,
        text: 'Deep Diving'
    },
];
export const threeDGalleryItems = [
    {
        image: LadyLookingAtProduct,
        text: 'Showcasing the product'
    },
]
export const slides: SlideData[] = [
  {
    id: 1,
    name: "GLOSS CHARM",
    tagline: "Your Lips, Your Power.",
    image: MultipleProductDisplay,
    color: "var(--secondary)"
  },
  {
    id: 2,
    name: "PURPLE REIGN",
    tagline: "Unapologetic Elegance.",
    image: BlackWomanLipGlossBeauty,
    color: "var(--primary)"
  }
];
export const heroImages = [
    {
        image: BlackWomanLipGlossBeauty,
    },
    {
        image: MultipleProductDisplay,
    },
]