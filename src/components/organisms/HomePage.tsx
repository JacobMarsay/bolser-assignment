import React, { ReactNode } from "react";

interface HomepageProps {
  children: ReactNode;
}

const Homepage: React.FC<HomepageProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Homepage;
