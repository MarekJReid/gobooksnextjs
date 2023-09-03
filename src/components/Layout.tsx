// Layout component

import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useTransition } from "../../contexts/TransitionContext";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { isTransitioning, setTransitioning } = useTransition();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setTransitioning(true);
    };

    const handleRouteChangeComplete = () => {
      setTransitioning(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, setTransitioning]);

  return (
    <div style={{ position: `relative` }}>
      <Navbar />
      <Transition
        as="div"
        show={!isTransitioning}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {children}
      </Transition>
      <Footer />
    </div>
  );
};

export default Layout;
