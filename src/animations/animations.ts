import { Variants } from "framer-motion";

export const staggeredFadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 200, // Initial y position (offscreen)
  },
  show: {
    opacity: 1,
    y: 0, // Final y position (on screen)
    transition: {
      duration: 1, // Total duration for each card animation
      staggerChildren: 1, // Stagger each card's animation by 0.1 seconds
    },
  },
};
