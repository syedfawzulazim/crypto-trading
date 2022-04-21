import React, { useState } from "react";
import { TSidebarContext, IChildren } from "../types";

export const SidebarContext = React.createContext<TSidebarContext>(
  {} as TSidebarContext
);

const SidebarContextProvider: React.FC<IChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider value={{ isOpen, toggler: setIsOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextProvider;
