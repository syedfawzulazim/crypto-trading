import React, { ReactNode, useState } from "react";
import { Navbar, Footer, Sidebar } from "..";
import { SidebarContextProvider } from "../../context/index";

const Layout = ({ children }: { children: ReactNode }) => {
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
