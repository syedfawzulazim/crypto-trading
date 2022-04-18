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

        <div className="flex items-center lg:hidden">
          <ThemeToggle />
          <div className="mr-3">
            <AiOutlineSearch />
          </div>
          <div>
            <AiOutlineMenuFold />
          </div>
        </div>

        <div className="flex space-x-4 text-sm">
          <div className="hover:text-blue-600">
            <Link href="/">
              <a>Cryptocurrencies</a>
            </Link>
          </div>
          <div className="hover:text-blue-600">
            <Link href="/">
              <a>Exchanges</a>
            </Link>
          </div>
          <div className="hover:text-blue-600">
            <Link href="/">
              <a>NFT</a>
            </Link>
          </div>
          <div className="hover:text-blue-600">
            <Link href="/">
              <a>Portfolio</a>
            </Link>
          </div>
          <div className="hover:text-blue-600">
            <Link href="/">
              <a>Watchlist</a>
            </Link>
          </div>
        </div>

        <div className="flex space-x-4">
          <div>Login</div>
          <div>Signup</div>
        </div>
      </div>
    </nav>
  );
};

export default Main;
