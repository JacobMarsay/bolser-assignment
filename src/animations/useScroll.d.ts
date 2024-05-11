import { RefObject } from "react";
import { AnimationControls } from "framer-motion";

export interface ScrollHookResult {
  element: RefObject<any>;
  controls: AnimationControls;
}

declare function useScroll(): ScrollHookResult;

export default useScroll;
