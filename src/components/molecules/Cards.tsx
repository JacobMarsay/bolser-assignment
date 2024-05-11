import React from "react";
import { motion } from "framer-motion";
import Card from "../atoms/Card";
import useScroll from "../../animations/useScroll";
import { ScrollHookResult } from "../../animations/useScroll";
import { staggeredFadeUp } from "../../animations/animations";

const Cards = () => {
  const { element, controls }: ScrollHookResult = useScroll();

  return (
    <motion.div
      variants={staggeredFadeUp}
      animate={controls}
      ref={element}
      initial="hidden"
      className="cards__wrapper"
    >
      <motion.div className="cards">
        <Card className="primary" />
        <Card className="secondary" />
        <Card className="primary" />
        <Card className="secondary" />
      </motion.div>
    </motion.div>
  );
};

export default Cards;
