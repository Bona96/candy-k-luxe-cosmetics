import {
    FaInstagram as Instagram,
    FaTiktok as Tiktok,
    FaWhatsapp as Whatsapp,
} from 'react-icons/fa6'

import CandyK from '../assets/images/candy-k.jpg'



// import MultipleProductDisplay from '../assets/images/candy-k-multiple-product-display.png'
import logoWhite from '../assets/images/candy-k-logo-white-bg.png'
import logoTransparent from '../assets/images/candy-k-logo-bg-transparent.png'

//images for hero slider
import CandyKHoldingLipGloss from '../assets/images/candy-k-luxe-cosmetics-candy.jpeg'
import LadyLookingAtProduct from './images/candy-k-lady-looking-at-product.jpg'
import Product3 from '../assets/images/candy-k-product-3.jpg'
import LipLinerProduct1 from '../assets/images/candy-k-luxe-cosmetics-lip-liner-product.jpg'
import LadyWearingTruffleLipGloss from '../assets/images/candy-k-luxe-cosmetics-person-wearing-truffle-shade-lipgloss.jpeg'

// Product
//Price list
import PriceList from "../assets/images/candy-k-product-price-list.jpg"
//Images of product

import ColorCraze1 from '../assets/images/candy-k-product-color-craze-1.jpg'
import Product6 from '../assets/images/candy-k-product-6.jpg'
import RedBombShellLipgloss1 from '../assets/images/candy-k-luxe-cosmetics-redbombshell-lipgloss-1.jpeg'
import RedBombShellLipgloss4 from '../assets/images/candy-k-luxe-cosmetics-redbombshell-lipgloss-4.jpg'
import RedBombShellLipgloss5 from '../assets/images/candy-k-luxe-cosmetics-redbombshell-lipgloss-5.jpeg'

import PesronWithProductDisplay1 from '../assets/images/candy-k-person-with-product-display-1.jpg'
import PesronWearingProduct1 from '../assets/images/candy-k-person-wearing-lip-gloss-1.jpg'
import PersonWithPocketMirror from '../assets/images/candy-k-person-with-pocket-mirror.jpeg'
import LipLinerProduct2 from '../assets/images/candy-k-luxe-cosmetics-lip-liner-product-2.jpeg'
// images for testimonials
import HappyClient1 from '../assets/images/candy-k-luxe-cosmetics-happy-client-1.jpeg'
import HappyClient2 from '../assets/images/candy-k-luxe-cosmetics-happy-client-2.jpeg'
import HappyClient3 from '../assets/images/candy-k-luxe-cosmetics-happy-client-3.jpeg'

import type { FooterDataProps, SlideData, SocialLink, Testimonial } from '../types/types';

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
// testimonials
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Isagara Lisa",
    location: "Kampala - Uganda",
    quote: "The Gloss Charm is literally magic. Stays shiny for hrs without that annoying sticky feeling. My new daily essential!",
    shade: "Gloss Charm",
    rating: 5,
    avatar: HappyClient1
  },
  {
    id: 2,
    name: "Charlotte",
    location: "United Kingdom - Europe",
    quote: "This lipgloss is amazing \u{1F60A}, I love it!!!.",
    shade: "Multiple shades",
    rating: 5,
    avatar: HappyClient2
  },
  {
    id: 3,
    name: "Client 3",
    location: "Kampala - Uganda",
    quote: "The packaging alone makes me feel like a queen. But the formula? It’s the smoothest application I’ve ever experienced.",
    shade: "Luxe Tint",
    rating: 5,
    avatar: HappyClient3
  }
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

// images and slides
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
        image: Product6,
        text: 'Gloss Charm multi-choice'
    },
    {
        image: RedBombShellLipgloss1,
        text: 'Redbombshell Lipgloss'
    },
    {
        image: RedBombShellLipgloss4,
        text: 'Redbombshell Lipgloss'
    },
    {
        image: RedBombShellLipgloss5,
        text: 'Redbombshell Lipgloss'
    },
    {
        image: PersonWithPocketMirror,
        text: 'Pocket Mirrors'
    },
    {
        image: Product3,
        text: 'Gloss Charm'
    },
    {
        image: LipLinerProduct1,
        text: 'Lipliner'
    },
    {
        image: LipLinerProduct2,
        text: 'Lippies'
    },
    // {
    //     image: RedBombShellLipgloss1,
    //     text: 'Redbombshell Lipgloss'
    // },
    {
        image: PesronWithProductDisplay1,
        text: 'Gloss shopping spree'
    },
    {
        image: ColorCraze1,
        text: 'Color craze (color changing lipgloss)'
    },
]
// slides for hero section
export const slides: SlideData[] = [
  {
    id: 1,
    title: "Candy.K Luxe Cosmetics",
    tagline: "where beauty meets confidence and every pout is pampered",
    description: "We are passionate about creating high-quality lip products that celebrate beauty in all its forms",
    image: CandyKHoldingLipGloss,
    color: "var(--secondary)"
  },
  {
    id: 2,
    title: "Featured Products",
    tagline: "Your Lips, Your Power.",
    description: "From nourishing lipgloss to lip scrubs, balms, collagen-infused lip masks and precision lip liners.",
    image: LadyLookingAtProduct,
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
    image: LipLinerProduct1,
    color: "var(--secondary)"
  },
  {
    id: 5,
    title: "TRUFFLE LIPGLOSS",
    tagline: "Unapologetic Elegance.",
    description: "Our products are designed to make every customer feel bold, confident and unapologetic.",
    image: LadyWearingTruffleLipGloss,
    color: "var(--primary)"
  }
];
// social links
export const socialData: SocialLink[] = [
  { name: 'Instagram', href: 'https://www.instagram.com/candy_k_luxe_cosmetics/', icon: <Instagram size={20} /> },
  { name: 'TikTok', href: 'https://vm.tiktok.com/ZNRUTsLU7/', icon: <Tiktok size={20} />}, // Custom stylized T
  { name: 'Whatsapp', href: 'https://wa.me/message/6TCE2JWDGTD4P1', icon: <Whatsapp size={20} /> },
];
// footer data
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

// css classname variables
export const globalImageClassName = "mt-4 rounded-xl w-30 md:w-80 lg:w-70 shadow-xl shadow-secondary"
