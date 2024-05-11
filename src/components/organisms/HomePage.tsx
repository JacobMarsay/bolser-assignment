import React, { ReactNode } from "react";

interface HomepageProps {
  children: ReactNode;
}

const Homepage: React.FC<HomepageProps> = ({ children }) => {
  return <div className="page__wrapper">{children}</div>;
};

export default Homepage;
