import React, { useState, useEffect } from "react";
import SidebarMobile from "./SidebarMobile";
import SidebarDesktop from "./SidebarDesktop";

interface SidebarProps {
  priceToUse: string;
  price: number;
  checkoutUrl: string;
}

const Sidebar: React.FC<SidebarProps> = ({ priceToUse, checkoutUrl }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768);
      window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth < 768);
      });
    }
  }, []);

  return isMobile ? (
    <SidebarMobile priceToUse={priceToUse} checkoutUrl={checkoutUrl} />
  ) : (
    <SidebarDesktop priceToUse={priceToUse} checkoutUrl={checkoutUrl} />
  );
};

export default Sidebar;
