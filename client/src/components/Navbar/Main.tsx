import { AiOutlineSearch, AiOutlineMenuFold } from "react-icons/ai";
import Link from "next/link";

const Main = () => {
  return (
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
  );
};

export default Main;
