import React, { ReactNode, useState } from "react";
import { Navbar, Footer, Sidebar } from "..";
import { SidebarContextProvider } from "../../context/index";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <SidebarContextProvider>
        <Navbar />
        <Sidebar />
      </SidebarContextProvider>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
