import React, { useState } from "react";
import { TSidebarContext } from "../types";

interface SidebarProviderProps {
  children: React.ReactNode;
}

export const SidebarContext = React.createContext<TSidebarContext>(
  {} as TSidebarContext
);

const SidebarContextProvider: React.FC<SidebarProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, toggler: setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
