import { AiOutlineSearch, AiOutlineMenuFold } from "react-icons/ai";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-[#17171a]">
      <div className="w-full mx-auto xl:max-w-[1400px]">
        <nav>
          <div className="flex items-center justify-between p-4 text-xl border-b-0 border-slate-800 text-[#a0a0a0]">
            <div>
              <Link href="/">
                <a>Logo</a>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="mr-3">
                <AiOutlineSearch />
              </div>
              <div>
                <AiOutlineMenuFold />
              </div>
            </div>
          </div>
        </nav>
        <div className="relative ">
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-slate-900 ... "></div>
          <div className="flex space-x-3 no-scrollbar px-4 py-2 overflow-x-auto overflow-y-hidden text-[11px] border whitespace-nowrap border-slate-800 ">
            <span>Cryptos:</span>
            <span>Exchanges:</span>
            <span>Market Cap:</span>
            <span>24h Vol:</span>
            <span>Dominance:</span>
            <span>ETH Gas:</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
