import {motion} from 'framer-motion'
import type { DescTextProps, TaglineTextProps, TextSectionProps, TitleTextProps } from '../../types/types'


export const TextSection: React.FC<TextSectionProps> = ({slides = [], index = 0, setIndex}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="z-99 order-1 lg:order-2"
    >
      <div className="lg:mt-20 p-8 md:p-12 backdrop-blur-lg rounded-[2.5rem] bg-primary/20 border border-white/20 dark:border-white/10 shadow-2xl">
        {slides[index].id === 1 && (
          <motion.span 
            style={{ color: slides[index].color }}
            className="text-lg font-bold tracking-[0.3em] uppercase mt-10 mb-3 block"
          >
            Welcome to...
          </motion.span>
        )}
        {slides[index].id === 1 ? (<TitleText title={slides[index].title}/>) : (<TaglineText  tagline={slides[index].tagline} />)}
        {slides[index].id === 1 ? (<TaglineText  tagline={slides[index].tagline} />) : (<TitleText title={slides[index].title}/>)}
        <DescText desc={slides[index].description}/>
        
        <div className="flex items-center gap-5">
          <button className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105 active:scale-95">
            Shop Shade
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${i === index ? 'w-8 bg-secondary' : 'w-2 bg-brand-text/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export const TitleText: React.FC<TitleTextProps> = ({title}) => {
  return (
    <h1 className="text-xl md:text-5xl font-black text-brand-text mb-5 leading-tight">
      {title}
    </h1>
  )
}
export const TaglineText: React.FC<TaglineTextProps> = ({tagline}) => {
  return (
    <p className="text-md md:text-xl font-medium text-secondary italic mb-3">
      {tagline}
    </p>
  )
}
export const DescText: React.FC<DescTextProps> = ({desc}) => {
  return (
    <p className="text-brand-text/80 text-lg leading-relaxed mb-8 max-w-md">
      {desc}
    </p>
  )
}