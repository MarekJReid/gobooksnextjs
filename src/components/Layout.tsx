import React, { ReactNode } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Navbar />

      <main className=" mx-auto  w-full min-h-[90vh]">
        {/* Your main content */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
