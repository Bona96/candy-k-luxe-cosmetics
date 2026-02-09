import type React from "react";

// contexts
export type GlobalContextType = {
  privacyPolicyModal: boolean;
  setPrivacyPolicyModal: (v: boolean) => void;
};
export type Theme = 'light' | 'dark';

export type DarkModeContextType = {
  theme: Theme;
  isScrolled: boolean;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
};

// slides
export interface SlideData {
  id: number;
  title: string;
  description: string;
  tagline: string;
  image: string; // High-res transparent PNG of the gloss tube
  color: string; // The primary color of this shade
}

// text
export interface TextSectionProps {
  slides: SlideData[]
  index: number
  setIndex: (i: number) => void
}
export interface TitleTextProps {
  title: string;
}
export interface TaglineTextProps {
  tagline: string;
}
export interface DescTextProps {
  desc: string;
}

// images
export interface ImageData {
  src: string;
  alt: string;
  animate: {};
  transition: {};
  className: string;
  page: string;
}

export interface SliderNavBtnProps {
  prevSlide: () => void
  nextSlide: () => void
}

// stacking scroll view
export interface StackingProps {
  children: React.ReactNode;
  index: number; // We need the index to stagger the "depth"
}

//testimonials
export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  shade: string; // The specific product they used
  rating: number;
  avatar: string;
}
// socials
export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}
// headers
export type GlobalHeaderType = {
  heading: string;
  icon: React.ReactNode;
  onClick: () => void
}
export type ModalBtnType = {
  icon: React.ReactNode;
  onClick: () => void
}

// footer
export type FooterProps = {
  footerInfo: FooterDataProps
}
export interface FooterDataProps {
  logoBranding: {
    image: string;
    title: string;
    desc: string;
    contact: string 
  };
  quickLinks: {
    id: number;
    title: string;
    href: string;
  }[];
  copyright: {
    allrights: string;
    designedbyTitle: string;
    designedbyName: string;
    designedbyLink: string;
  };
}