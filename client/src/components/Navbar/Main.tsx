import { AiOutlineSearch, AiOutlineMenuFold } from "react-icons/ai";

import { ThemeToggle } from "../UI";
import Menu from "./Menu";

const Main = () => {
  return (
    <nav>
      <div className="flex items-center justify-between p-4 text-xl border-b-0 border-slate-800 ">
        <div>
          <a>Logo</a>
        </div>

        <Menu />

        <div className="flex space-x-4 text-sm lg-m-w:hidden">
          <div className="hover:text-blue-600">
            <a>Cryptocurrencies</a>
          </div>
          <div className="hover:text-blue-600">
            <a>Exchanges</a>
          </div>
          <div className="hover:text-blue-600">
            <a>NFT</a>
          </div>
          <div className="hover:text-blue-600">
            <a>Portfolio</a>
          </div>
          <div className="hover:text-blue-600">
            <a>Watchlist</a>
          </div>
        </div>

        <div className="flex items-center space-x-4 lg-m-w:hidden">
          <ThemeToggle />
          <div>Login</div>
          <div>Signup</div>
        </div>
      </div>
    </nav>
  );
};

export default Main;
