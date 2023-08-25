// contexts/TransitionContext.tsx

import { createContext, ReactNode, useContext, useState } from "react";

interface TransitionContextProps {
  isTransitioning: boolean;
  setTransitioning: React.Dispatch<React.SetStateAction<boolean>>;
}

const TransitionContext = createContext<TransitionContextProps | undefined>(
  undefined
);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
};

interface TransitionProviderProps {
  children: ReactNode;
}

export const TransitionProvider: React.FC<TransitionProviderProps> = ({
  children,
}) => {
  const [isTransitioning, setTransitioning] = useState(false);
  return (
    <TransitionContext.Provider value={{ isTransitioning, setTransitioning }}>
      {children}
    </TransitionContext.Provider>
  );
};
