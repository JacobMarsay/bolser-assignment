import React from "react";
import { staggeredFadeUp } from "../../animations/animations";
import { motion } from "framer-motion";
interface CardProps {
  className?: string;
}

const Card = ({ className }: CardProps) => {
  // Use classNames utility to conditionally assign classes
  return (
    <motion.div
      variants={staggeredFadeUp}
      className={`card ${className}`}
    ></motion.div>
  );
};

export default Card;
