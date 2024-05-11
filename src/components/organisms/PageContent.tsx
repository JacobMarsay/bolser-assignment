import React, { ReactNode } from "react";
import Overlay from "./Overlay";

interface PageProps {
  children: ReactNode;
}

const PageContent: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="page__content__wrapper">
      <Overlay>
        <div className="page__body">{children}</div>
      </Overlay>
    </div>
  );
};
export default PageContent;
