// src/animations/useScroll.js

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

function useScroll() {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.7 });

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, view]); // Ensure controls and view are included in the dependency array

  return { element, controls };
}

export default useScroll;
