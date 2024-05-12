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

export const fadeInFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100, // Initial x position (offscreen to the left)
  },
  show: {
    opacity: 1,
    x: 0, // Final x position (on screen)
    transition: {
      duration: 1, // Total duration for the animation
    },
  },
};

export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -100, // Initial y position (offscreen above)
  },
  show: {
    opacity: 1,
    y: 0, // Final y position (on screen)
    transition: {
      duration: 1, // Total duration for the animation
    },
  },
};
