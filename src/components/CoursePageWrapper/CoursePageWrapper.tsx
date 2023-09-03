// PageWrapper.tsx
import React from "react";

interface PageWrapperProps {
  children?: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full md:flex md:space-x-4 lg:space-x-6">{children}</div>
  );
};

export default PageWrapper;
