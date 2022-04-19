import React, { useContext, useState } from "react";
import { AiOutlineMenuFold, AiOutlineSearch } from "react-icons/ai";
import { ThemeToggle } from "../UI";
import { SidebarContext } from "../../context/SidebarContext";

const Menu: React.FC = () => {
  const { isOpen, toggler } = useContext(SidebarContext);

  const toggleSidebar = () => {
    isOpen ? toggler(false) : toggler(true);
  };

  return (
    <div className="flex items-center lg:hidden ">
      <ThemeToggle />
      <div className="mr-3">
        <AiOutlineSearch />
      </div>
      <div className="cursor-pointer ">
        <button onClick={toggleSidebar}>
          <AiOutlineMenuFold />
        </button>
      </div>
    </div>
  );
};

export default Menu;
