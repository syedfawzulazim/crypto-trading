import React from "react";

import { ThemeToggle } from "../UI";
import Menu from "./Menu";

const NavbarOptions = [
  {
    id: "n1",
    title: "Cryptocurrencies",
  },
  {
    id: "n2",
    title: "Exchanges",
  },
  {
    id: "n3",
    title: "NFT",
  },
  {
    id: "n4",
    title: "Portfolio",
  },
  {
    id: "n5",
    title: "Watchlist",
  },
];

const Main: React.FC = () => {
  return (
    <nav>
      <div className="flex items-center justify-between p-4 text-xl border-b-0 border-slate-800 ">
        <div>
          <a>Logo</a>
        </div>

        <Menu />

        <div className="flex space-x-4 text-sm lg-m-w:hidden">
          {NavbarOptions.map((item) => (
            <div className="hover:text-blue-600" key={item.id}>
              <a>{item.title}</a>
            </div>
          ))}
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
