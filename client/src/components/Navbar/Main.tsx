import React, { useState } from "react";
import { Login } from "../index";

import { ThemeToggle } from "../UI";
import Button from "../UI/Button";
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
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const handleClick = () => {
    setOpenLoginModal(true);
  };
  const handleClose = () => {
    setOpenLoginModal(false);
  };

  return (
    <nav>
      <div className="flex items-center justify-between p-4 text-xl border-b-0 border-slate-800 ">
        <div className="cursor-pointer">
          <a>Logo</a>
        </div>

        <Menu />

        <div className="flex space-x-4 text-sm lg-m-w:hidden">
          {NavbarOptions.map((item) => (
            <div className="cursor-pointer hover:text-blue-600" key={item.id}>
              <a>{item.title}</a>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4 lg-m-w:hidden">
          <ThemeToggle />
          <div className="flex space-x-3 cursor-pointer">
            <Button label="Login" type="button" handleClick={handleClick} />
            <Button label="Signup" type="button" handleClick={handleClick} />
          </div>
        </div>
      </div>
      {openLoginModal && <Login handleClose={handleClose} />}
    </nav>
  );
};

export default Main;
