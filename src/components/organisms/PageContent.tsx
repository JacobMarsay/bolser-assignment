import React, { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

const PageContent: React.FC<PageProps> = ({ children }) => {
  return <div className="page__content">{children}</div>;
};
export default PageContent;
