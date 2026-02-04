export interface SlideData {
  id: number;
  name: string;
  description: string;
  tagline: string;
  image: string; // High-res transparent PNG of the gloss tube
  color: string; // The primary color of this shade
}
export interface StackingProps {
  children: React.ReactNode;
  index: number; // We need the index to stagger the "depth"
}