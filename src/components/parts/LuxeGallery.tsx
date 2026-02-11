import { motion } from "framer-motion";
import { LandingPageSectionHeader } from "./Headers";

interface LuxeGalleryProps<T> {
  items: T[];
  heading: string;
  tagline?: string;
  renderItem: (item: T, index: number) => React.ReactNode;
  columns?: {
    md?: number;
    lg?: number;
  };
}

const LuxeGallery = <T,>({ 
  items, 
  heading, 
  tagline, 
  renderItem, 
  columns = { md: 2, lg: 3 } 
}: LuxeGalleryProps<T>) => {
  
  // Mapping column numbers to Tailwind classes (Standard for Tailwind 4)
  const gridCols = {
    2: "md:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full py-8 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-10 text-center"
        >
          <LandingPageSectionHeader heading={heading} tagline={tagline || ""} />
        </motion.div>

        {/* MOBILE: Flex-row with horizontal overflow + snap scrolling
            DESKTOP: Dynamic Grid based on props
        */}
        <div className={`
          flex overflow-x-auto snap-x snap-mandatory gap-5 pb-10 no-scrollbar
          md:grid ${gridCols[columns.md as keyof typeof gridCols] || "md:grid-cols-2"} 
          ${gridCols[columns.lg as keyof typeof gridCols] || "lg:grid-cols-3"}
          md:overflow-visible md:pb-0
        `}>
          {items.map((item, i) => (
            <div key={i} className="snap-center min-w-[85vw] md:min-w-0 h-full">
              {renderItem(item, i)}
            </div>
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="md:hidden flex items-center justify-center gap-2 mt-4 text-[10px] uppercase tracking-[0.3em] text-brand-text"
        >
          <span>Swipe</span>
          <div className="w-8 h-px bg-brand-text/30" />
        </motion.div>
      </div>
    </div>
  );
};

export default LuxeGallery;