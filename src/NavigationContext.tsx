import React, { createContext, useContext, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigationContextType {
  navigateWithTransition: (path: string) => void;
  isChatOpen: boolean;
  setIsChatOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const navigateWithTransition = (path: string) => {
    navigate(path);
  };

  return (
    <NavigationContext.Provider value={{ navigateWithTransition, isChatOpen, setIsChatOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationTransition() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigationTransition must be used within a NavigationProvider');
  }
  return context;
}
