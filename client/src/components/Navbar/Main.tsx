import { AiOutlineSearch, AiOutlineMenuFold } from "react-icons/ai";
import Link from "next/link";
import { ThemeToggle } from "../UI";

const Main = () => {
  return (
    <nav>
      <div className="flex items-center justify-between p-4 text-xl border-b-0 border-slate-800 ">
        <div>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </div>
        <div className="flex items-center">
          <ThemeToggle />
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
