import { motion } from 'framer-motion';
// import { X } from 'lucide-react'; // TikTok often uses MessageCircle or a custom SVG
import { socialData } from '../assets/constants';
import type { SocialLink } from '../types/types';

const SocialIcon = ({ link }: { link: SocialLink }) => {
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="group relative w-12 h-12 flex items-center justify-center rounded-full 
                 bg-surface/40 backdrop-blur-md border border-white/10 
                 text-brand-text transition-all duration-500 overflow-hidden shadow-lg"
    >
      {/* Liquid Fill Hover Effect */}
      <motion.div 
        className="absolute inset-0 bg-linear-to-tr from-primary to-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"
      />

      {/* Icon Wrapper */}
      <span className="relative z-10 group-hover:text-white transition-colors duration-300">
        {link.icon}
      </span>

      {/* Subtle Specular Highlight (The Gloss) */}
      <div className="absolute top-1 left-1 w-full h-full bg-linear-to-br from-white/20 to-transparent rounded-full pointer-events-none" />
    </motion.a>
  );
};

export const Socials = () => {
  return (
    <div className="flex gap-4 p-2">
      {socialData.map((social) => (
        <SocialIcon key={social.name} link={social} />
      ))}
    </div>
  );
};