import React, { ReactNode } from "react";

interface OverlayProps {
  children: ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ children }) => {
  return <div className="overlay">{children}</div>;
};

export default Overlay;
