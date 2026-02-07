import {
    FaInstagram as Instagram,
    FaTiktok as Tiktok,
    FaWhatsapp as Whatsapp,
} from 'react-icons/fa6'
import CandyK from '../assets/images/candy-k.jpg'
import LadyLookingAtProduct from './images/candy-k-lady-looking-at-product.jpg'
import BlackWomanLipGlossBeauty from '../assets/images/candy-k-black-woman-lip-gloss-beauty.webp'
// import MultipleProductDisplay from '../assets/images/candy-k-multiple-product-display.png'
import logoWhite from '../assets/images/candy-k-logo-white-bg.png'
import logoTransparent from '../assets/images/candy-k-logo-bg-transparent.png'

// Product
//Price list
import PriceList from "../assets/images/candy-k-product-price-list.jpg"
//Images of product

import Product1 from '../assets/images/candy-k-product-1.jpg'
import Product2 from '../assets/images/candy-k-product-2.jpg'
import Product3 from '../assets/images/candy-k-product-3.jpg'
// import Product4 from '../assets/images/candy-k-product-4.jpg'
// import Product5 from '../assets/images/candy-k-product-5.jpg'
import Product6 from '../assets/images/candy-k-product-6.jpg'
// import Product7 from '../assets/images/candy-k-product-7.jpg'
// import Product8 from '../assets/images/candy-k-product-8.jpg'
import Product9 from '../assets/images/candy-k-product-9.jpg'
// import Product10 from '../assets/images/candy-k-product-10.jpg'
// import Product11 from '../assets/images/candy-k-product-11.jpg'
import Product12 from '../assets/images/candy-k-product-12.jpg'
// import Product13 from '../assets/images/candy-k-product-13.jpg'
import Product14 from '../assets/images/candy-k-product-14.jpg'

import PesronWithProduct2 from '../assets/images/candy-k-person-with-product-2.jpg'
import PesronWithProductDisplay1 from '../assets/images/candy-k-person-with-product-display-1.jpg'
import PesronWearingProduct1 from '../assets/images/candy-k-person-wearing-lip-gloss-1.jpg'

import type { FooterDataProps, SlideData, SocialLink } from '../types/types';

export const LightModeLogo = logoWhite
export const DarkModeLogo = logoTransparent
export const Candy = CandyK
export const CandyKPriceList = PriceList
export const PesronWearingLipGloss = PesronWearingProduct1 

export const logos = [
    {
        id: 1,
        img: logoWhite
    },
    {
        id: 2,
        img: logoTransparent
    }
]
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
        image: Product1,
        text: 'Lip Gloss'
    },
    {
        image: PesronWithProduct2,
        text: 'Gloss Charm'
    },
    {
        image: Product3,
        text: 'Gloss Charm'
    },
    {
        image: Product12,
        text: 'Lip Liner'
    },
    {
        image: Product2,
        text: 'Gloss Charm'
    },
    {
        image: Product9,
        text: 'Truffle Gloss Charm'
    },
    {
        image: Product6,
        text: 'Gloss Charm multi-choice'
    },
    {
        image: PesronWithProductDisplay1,
        text: 'Multiple shades and Flavours'
    },
]
export const slides: SlideData[] = [
  {
    id: 1,
    title: "Candy.K Luxe Cosmetics",
    tagline: "where beauty meets confidence and every pout is pampered",
    description: "We are passionate about creating high-quality lip products that celebrate beauty in all its forms",
    image: LadyLookingAtProduct,
    color: "var(--secondary)"
  },
  {
    id: 2,
    title: "Featured Products",
    tagline: "Your Lips, Your Power.",
    description: "From nourishing lip glosses to lip scrubs, balms, collagen-infused lip masks and precision lip liners.",
    // description: "A luxury beauty brand committed to producing high-quality, elegant, and affordable cosmetic products designed for everyday confidence.",
    image: Product14,
    color: "var(--secondary)"
  },
  {
    id: 3,
    title: "Gloss Charm",
    tagline: "Our signature lip-gloss collection",
    description: "Designed to complement every skin tone and every occasion.",
    image: Product3,
    color: "var(--secondary)"
  },
  {
    id: 4,
    title: "Lip Liners",
    tagline: "More than just lip gloss",
    description: "We also offer enhancing lip liners in a variety of shades, including black, brown, pink and more...",
    image: Product12,
    color: "var(--secondary)"
  },
  {
    id: 5,
    title: "TRUFFLE LIPGLOSS",
    tagline: "Unapologetic Elegance.",
    description: "Our products are designed to make every customer feel bold, confident and unapologetic.",
    image: BlackWomanLipGlossBeauty,
    color: "var(--primary)"
  }
];


export const globalImageClassName = "mt-4 rounded-xl w-30 md:w-80 lg:w-70 shadow-xl shadow-secondary"
export const socialData: SocialLink[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/candy_k_luxe_cosmetics/', icon: <Instagram size={20} /> },
  { name: 'TikTok', href: '#', icon: <Tiktok size={20} />}, // Custom stylized T
  { name: 'Whatsapp', href: '#', icon: <Whatsapp size={20} /> },
];
export const footerData: FooterDataProps = {
    logoBranding: {
        image: logoTransparent,
        title: "More About CANDY.K LUXE COSMETICS",
        desc: `
            As a legally registered brand, we move with structure: 
            Reliable customer service Timely deliveries Professional communication
            Luxury isn't just how it looks--it's how it operates
        `,
        contact: "+256-757-123961"
    },
    quickLinks: [
        {
            id: 1,
            title: 'Privacy Policy',
            href: "#"
        },
        {
            id: 2,
            title: 'Shipping Info',
            href: "#contact"
        },
        {
            id: 3,
            title: 'Wholesale',
            href: "#contact"
        },
    ],
    copyright: {
        allrights: '© 2026 Candy.K Luxe Cosmetics. All Rights Reserved.',
        designedbyTitle: 'Designed by:',
        designedbyName: 'KNiHT Digital Solutions',
        designedbyLink: 'https://knihtdigitalsolutions.vercel.app'
    }
}