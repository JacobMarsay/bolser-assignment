import React from "react";
import { SVGProps } from "react";
import { IconMap } from "./IconMap";

type IconProps = SVGProps<SVGSVGElement> & {
  name: keyof typeof IconMap;
};

const Icon: React.FC<IconProps> = ({ name, ...rest }) => {
  const IconComponent = IconMap[name];

  if (!IconComponent) {
    return null;
  }

  // Render the dynamically selected IconComponent with the provided props
  return <IconComponent {...rest} />;
};

export default Icon;
