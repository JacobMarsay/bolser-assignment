// IconMap.ts
import React from "react";
import { Logo, Facebook } from "./Icons";

interface IconMapProps {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const IconMap: IconMapProps = {
  // Ensure lowercase key to match icon name usage
  logo: Logo,
  facebook: Facebook,
};

export default IconMap;
