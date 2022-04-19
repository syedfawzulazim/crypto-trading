import {
  AiOutlineStar,
  AiFillPieChart,
  AiFillFilter,
  AiOutlineMenu,
} from "react-icons/ai";
import React from "react";
import { BiCustomize, BiBarcodeReader } from "react-icons/bi";
import Link from "next/link";

const Options: React.FC = () => {
  return (
    <div className="flex justify-between overflow-x-auto overflow-y-hidden no-scrollbar whitespace-nowrap">
      <div className="space-x-2">
        <a className="dark:bg-[#323546] bg-slate-200 text-black dark:text-white px-2 py-[5px] rounded-md text-xs">
          <button>
            <span className="flex items-center font-semibold">
              <AiOutlineStar className="inline mr-1" />
              Watchlist
            </span>
          </button>
        </a>

        <a className="dark:bg-[#323546] bg-slate-200 text-black dark:text-white px-2 py-[5px] rounded-md text-xs ">
          <button>
            <span className="flex items-center font-semibold">
              <AiFillPieChart className="inline mr-1" />
              Portfolio
            </span>
          </button>
        </a>
      </div>
      <div className="flex items-center ml-2 space-x-2">
        <button>
          <span className="flex items-center dark:bg-[#323546] bg-slate-200 text-black dark:text-white px-2 py-[5px] rounded-md text-xs font-semibold">
            <AiFillFilter className="inline mr-1" />
            Filters
          </span>
        </button>
        <button>
          <span className="flex items-center dark:bg-[#323546] bg-slate-200 text-black dark:text-white px-2 py-[5px] rounded-md text-xs font-semibold">
            <BiCustomize className="inline mr-1" />
            Customize
          </span>
        </button>
        <button>
          <span className="flex items-center dark:bg-[#323546] bg-slate-200 text-black dark:text-white px-2 py-[5px] rounded-md text-md font-semibold">
            <AiOutlineMenu className="inline mr-1" />

            <BiBarcodeReader className="inline" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Options;
