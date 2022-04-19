import React from "react";
import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import { AiOutlineClose } from "react-icons/ai";
import s from "./Sidebar.module.css";

const Index: React.FC = () => {
  const { isOpen, toggler } = useContext(SidebarContext);

  const className = isOpen ? "left-0" : "left-[-100vw]";

  const handleClick = () => {
    isOpen ? toggler(false) : toggler(true);
  };

  return (
    <div
      className={`top-0 ${className} lg:hidden transition-all ease-in-out w-[100vw] bg-slate-200 dark:bg-slate-700 p-6 h-screen fixed z-[99]`}
    >
      <div
        className="flex justify-end p-1 dark:text-white"
        onClick={handleClick}
      >
        <AiOutlineClose />
      </div>
      <div className="flex flex-col justify-center mt-10 space-y-4 font-semibold text-center">
        <a
          href=""
          className="py-1 bg-slate-50 dark:bg-slate-400 hover:rounded-md"
        >
          Home
        </a>
        <a className="" href="">
          Trend
        </a>
        <a href="">News</a>
        <a href="">Metaverse</a>
        <a href="">NFT</a>
        <a href="">Portfolio</a>
        <a href="">Watchlist</a>
      </div>
    </div>
  );
};

export default Index;
